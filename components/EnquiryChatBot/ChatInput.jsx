"use client";

import { useState } from "react";
import { COUNTRY_CODES } from "@/lib/formConstants";

const DEFAULT_COUNTRY_CODE = "+971";
const MIN_PHONE_DIGITS = 7;
const MAX_PHONE_CHARS = 15;

function getMaxLocalPhoneDigits(countryCode = "") {
  return Math.max(0, MAX_PHONE_CHARS - String(countryCode).length);
}

function normalizePhoneNumber(value = "", countryCode = "") {
  const rawValue = String(value).trim();
  const countryDigits = String(countryCode).replace(/\D/g, "");
  let phoneDigits = String(value).replace(/\D/g, "");

  if (
    countryDigits &&
    (rawValue.startsWith("+") || rawValue.startsWith("00")) &&
    phoneDigits.startsWith(countryDigits)
  ) {
    phoneDigits = phoneDigits.slice(countryDigits.length);
  }

  return phoneDigits.slice(0, getMaxLocalPhoneDigits(countryCode));
}

function isValidPhoneNumber(countryCode, phoneNumber) {
  const countryDigits = String(countryCode || "").replace(/\D/g, "");
  const phoneDigits = normalizePhoneNumber(phoneNumber, countryCode);
  const fullPhoneNumber = `${countryCode}${phoneDigits}`;

  return (
    countryDigits.length > 0 &&
    phoneDigits.length >= MIN_PHONE_DIGITS &&
    phoneDigits.length <= getMaxLocalPhoneDigits(countryCode) &&
    fullPhoneNumber.length <= MAX_PHONE_CHARS
  );
}

export default function ChatInput({
  placeholder,
  onSubmit,
  disabled = false,
  type = "text",
  data,
  isSubmitStage = false,
  initialCountryCode = DEFAULT_COUNTRY_CODE,
}) {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleChange(event) {
    let input = event.target.value;
    if (type === "phone") {
      input = normalizePhoneNumber(input, countryCode);
    }

    setValue(input);
    setError("");
  }

  function handleCountryCodeChange(event) {
    const nextCountryCode = event.target.value;
    setCountryCode(nextCountryCode);
    setValue((currentValue) => normalizePhoneNumber(currentValue, nextCountryCode));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = value.trim();
    let submitValue = trimmed;
    let submitMeta = null;

    if (!trimmed || disabled) return;

    if (type === "email" && !isValidEmail(trimmed)) {
      setError("Please enter a valid email address");
      return;
    }

    if (type === "phone") {
      const phoneNumber = normalizePhoneNumber(trimmed, countryCode);
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;

      if (!isValidPhoneNumber(countryCode, phoneNumber)) {
        setError("Please enter a valid phone number with 15 characters or less");
        return;
      }

      submitValue = fullPhoneNumber;
      submitMeta = {
        countryCode,
        phoneNumber,
        fullPhoneNumber,
      };
    }

    onSubmit(submitValue, submitMeta);
    setValue("");
    setError("");
  }

  const canSend =
    value.trim().length > 0 &&
    !disabled &&
    (type !== "email" || isValidEmail(value.trim())) &&
    (type !== "phone" || isValidPhoneNumber(countryCode, value));
  const actionLabel = type === "phone"
    ? isSubmitStage ? "Submit" : "Next"
    : data.send;
  const isPhoneInput = type === "phone";

  return (
    <div className="space-y-1.5">
      <form
        onSubmit={handleSubmit}
        className={`flex rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-100 sm:px-5 ${
          isPhoneInput
            ? "flex-col items-stretch gap-3"
            : "items-center gap-3"
        }`}
      >
        {isPhoneInput && (
          <select
            aria-label="Country code"
            value={countryCode}
            disabled={disabled}
            onChange={handleCountryCodeChange}
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-800 focus:border-slate-400 focus:bg-white focus:outline-none disabled:text-slate-400"
          >
            {COUNTRY_CODES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        )}

        <input
          type={type === "phone" ? "tel" : type === "email" ? "email" : "text"}
          className={`min-w-0 flex-1 bg-transparent text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:text-slate-400 ${
            isPhoneInput
              ? "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 focus:border-slate-400 focus:bg-white"
              : ""
          }`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          maxLength={type === "phone" ? getMaxLocalPhoneDigits(countryCode) : undefined}
          onChange={handleChange}
        />

        <button
          type="submit"
          aria-label={actionLabel}
          disabled={!canSend}
          className={`inline-flex h-11 min-w-[3rem] shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 sm:px-5 ${
            isPhoneInput ? "w-full" : ""
          } ${
            canSend
              ? "hover:-translate-y-0.5"
              : "opacity-40 hover:translate-y-0"
          }`}
        >
          <span className={type === "phone" ? "inline" : "hidden sm:inline"}>
            {actionLabel}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>

      {error && <p className="px-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
