"use client";

import { useRef, useState } from "react";

import ChatLayout from "./ChatLayout";
import ChatMessages from "./ChatMessages";
import ChatOptionButtons from "./ChatOptionButtons";
import CountryDropdown from "./CountryDropdown";
import ChatInput from "./ChatInput";
import { COUNTRY_LIST } from "@/utils/countries";
import { FLOW } from "@/utils/chatbot-inference/chatBotFlow";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { from: "bot", text: FLOW.q1_business.text },
  ]);
  const [current, setCurrent] = useState("q1_business");
  const [answers, setAnswers] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const messagesRef = useRef(null);

  function addBot(text) {
    setMessages((prev) => [...prev, { from: "bot", text }]);
    setTimeout(() => messagesRef.current?.scrollToBottom?.(), 50);
  }

  function addUser(text) {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setTimeout(() => messagesRef.current?.scrollToBottom?.(), 50);
  }

  function saveAnswer(field, value) {
    if (!field) return;

    const questionText = FLOW[current]?.text || "";

    setAnswers((prev) => ({
      ...prev,
      [field]: value,
      _qmap: [...(prev._qmap || []), { question: questionText, answer: value }],
    }));
  }

  async function submitToCRM(payload) {
    // await fetch("/api/lead", { method: "POST", body: JSON.stringify(payload) });
    console.log("CRM Payload:", payload);
  }

  function handleOptionSelect(optionLabel) {
    const question = FLOW[current];
    if (!question) return;

    addUser(optionLabel);

    const cleanValue = optionLabel.replace(/^[^\w]+/, "").trim();
    saveAnswer(question.field, cleanValue);

    const nextKey = question.options?.find(
      (o) => o.label === optionLabel
    )?.next;

    progress(nextKey);
  }

  function handleTextSubmit(text) {
    const question = FLOW[current];
    if (!question) return;

    addUser(text);
    saveAnswer(question.field, text);

    if (question.submit) {
      finalizeSubmission();
      return;
    }

    progress(question.next);
  }

  function handleCountrySelect(country) {
    const question = FLOW[current];
    if (!question) return;

    addUser(country);
    saveAnswer(question.field, country);
    progress(question.next);
  }

  async function finalizeSubmission() {
    setIsTyping(true);
    addBot("Submitting your details...");

    setTimeout(async () => {
      await submitToCRM({ answers, conversation: messages });
      setIsTyping(false);
      addBot(
        "Your enquiry has been submitted successfully. Our specialists will contact you shortly."
      );
      setCurrent("done");
    }, 900);
  }

  function progress(nextKey) {
    if (!nextKey || !FLOW[nextKey]) {
      setCurrent("done");
      return;
    }

    setIsTyping(true);

    setTimeout(async () => {
      const nextQuestion = FLOW[nextKey];
      addBot(nextQuestion.text);

      if (nextQuestion.submit && nextQuestion.type === "info") {
        await submitToCRM({ answers, conversation: messages });
        setIsTyping(false);
        setCurrent("done");
        return;
      }

      setIsTyping(false);
      setCurrent(nextKey);
    }, 650);
  }

  const question = FLOW[current];
  const options =
    question?.type === "options" ? question.options.map((o) => o.label) : null;

  const isTextStage =
    question && ["text", "email", "phone"].includes(question.type);

  const isCountryStage = question?.type === "country";
  const canInteract = current !== "done" && !isTyping;
  const prompt = current !== "done" ? question?.text : null;

  function getPlaceholder() {
    if (!question) return "Type your response";
    if (question.type === "email") return "name@company.com";
    if (question.type === "phone") return "+971 55 123 4567";
    return "Type your response";
  }

  return (
    <>
      {!isWidgetOpen && (
        <button
          type="button"
          onClick={() => setIsWidgetOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-xl"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
              Concierge
            </p>
            <p className="text-lg font-semibold text-slate-900">Chat with us</p>
          </div>
        </button>
      )}

      {isWidgetOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsWidgetOpen(false)}
          />

          <div
            className="
    fixed
    bottom-6
    right-6
    z-50
    w-[calc(100vw-3rem)]
    max-w-[420px]
    sm:w-full
  "
          >
            <ChatLayout
              onClose={() => setIsWidgetOpen(false)}
              className="h-[80vh] max-h-[640px]"
            >
              {" "}
              <ChatMessages
                ref={messagesRef}
                messages={messages}
                isTyping={isTyping}
              />
              <footer className="space-y-3 border-t border-slate-100 bg-slate-50 px-5 pb-5 pt-4">
                {prompt && (
                  <p className="text-sm font-semibold text-slate-600">
                    {prompt}
                  </p>
                )}

                {canInteract && options && (
                  <ChatOptionButtons
                    options={options}
                    onSelect={handleOptionSelect}
                  />
                )}

                {canInteract && isCountryStage && (
                  <CountryDropdown
                    countries={COUNTRY_LIST}
                    onSubmit={handleCountrySelect}
                  />
                )}
                {canInteract && isTextStage && (
                  <ChatInput
                    placeholder={getPlaceholder()}
                    onSubmit={handleTextSubmit}
                    type={question.type}
                  />
                )}

                {!canInteract && current === "done" && (
                  <div className="text-center text-xs text-slate-500">
                    <button
                      onClick={() => {
                        setMessages([
                          { from: "bot", text: FLOW.q1_business.text },
                        ]);
                        setAnswers({});
                        setCurrent("q1_business");
                        setIsTyping(false);
                      }}
                      className="mt-2 rounded-full border border-slate-200 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-600"
                    >
                      Start New Enquiry
                    </button>
                  </div>
                )}
              </footer>
            </ChatLayout>
          </div>
        </>
      )}
    </>
  );
}
