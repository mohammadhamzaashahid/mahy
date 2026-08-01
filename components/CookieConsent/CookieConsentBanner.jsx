"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Switch from "@radix-ui/react-switch";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useLoaderReady } from "@/components/LoaderWrapper";
import { getStoredConsent, storeConsent } from "@/lib/utils/cookieConsent";

const COPY = {
  en: {
    title: "We value your privacy",
    message:
      'We use cookies to run this site, understand how it’s used, and personalize content. Click "Accept All" to consent, or manage your preferences below.',
    acceptAll: "Accept All",
    rejectNonEssential: "Reject Non-Essential",
    managePreferences: "Manage Preferences",
    hidePreferences: "Hide Preferences",
    save: "Save Preferences",
    policyLink: "Cookie Policy",
    categories: {
      necessary: {
        label: "Strictly Necessary",
        desc: "Required for the website to function properly. Always active.",
      },
      analytics: {
        label: "Analytics",
        desc: "Helps us understand how visitors interact with our website so we can improve it.",
      },
      marketing: {
        label: "Marketing",
        desc: "Used to deliver relevant advertising and measure campaign performance.",
      },
    },
  },
  ar: {
    title: "نحن نقدّر خصوصيتك",
    message:
      'نستخدم ملفات تعريف الارتباط لتشغيل هذا الموقع، وفهم كيفية استخدامه، وتخصيص محتواه. اضغط على "قبول الكل" للموافقة، أو قم بإدارة تفضيلاتك أدناه.',
    acceptAll: "قبول الكل",
    rejectNonEssential: "رفض غير الضروري",
    managePreferences: "إدارة التفضيلات",
    hidePreferences: "إخفاء التفضيلات",
    save: "حفظ التفضيلات",
    policyLink: "سياسة ملفات تعريف الارتباط",
    categories: {
      necessary: {
        label: "ضرورية بشكل صارم",
        desc: "ضرورية لعمل الموقع بشكل صحيح، وهي مفعّلة دائمًا.",
      },
      analytics: {
        label: "التحليلات",
        desc: "تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا لتحسينه.",
      },
      marketing: {
        label: "التسويق",
        desc: "تُستخدم لعرض إعلانات ذات صلة وقياس أداء الحملات.",
      },
    },
  },
};

export default function CookieConsentBanner() {
  const loaderReady = useLoaderReady();
  const locale = useLocale();
  const t = COPY[locale] || COPY.en;

  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (!loaderReady) return;
    if (getStoredConsent()) return;

    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, [loaderReady]);

  const finish = (record) => {
    storeConsent(record);
    setVisible(false);
  };

  const acceptAll = () => finish({ analytics: true, marketing: true });
  const rejectNonEssential = () => finish({ analytics: false, marketing: false });
  const savePreferences = () => finish(preferences);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label={t.title}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[9998] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f172b] text-white shadow-2xl">
            <div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-base font-semibold">{t.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {t.message}{" "}
                  <Link
                    href="/cookie-policy"
                    className="underline underline-offset-2 hover:text-white"
                  >
                    {t.policyLink}
                  </Link>
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                <button
                  onClick={() => setShowPreferences((v) => !v)}
                  className="rounded-full border border-white/25 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  {showPreferences ? t.hidePreferences : t.managePreferences}
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="rounded-full border border-white/25 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  {t.rejectNonEssential}
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f172b] transition hover:bg-white/90"
                >
                  {t.acceptAll}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="border-t border-white/10"
                >
                  <div className="space-y-4 p-5 sm:p-6">
                    <CategoryRow
                      label={t.categories.necessary.label}
                      desc={t.categories.necessary.desc}
                      checked
                      disabled
                    />
                    <CategoryRow
                      label={t.categories.analytics.label}
                      desc={t.categories.analytics.desc}
                      checked={preferences.analytics}
                      onChange={(v) =>
                        setPreferences((p) => ({ ...p, analytics: v }))
                      }
                    />
                    <CategoryRow
                      label={t.categories.marketing.label}
                      desc={t.categories.marketing.desc}
                      checked={preferences.marketing}
                      onChange={(v) =>
                        setPreferences((p) => ({ ...p, marketing: v }))
                      }
                    />
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={savePreferences}
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f172b] transition hover:bg-white/90"
                      >
                        {t.save}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CategoryRow({ label, desc, checked, disabled, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4">
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="mt-1 text-xs leading-relaxed text-white/60">{desc}</p>
      </div>
      <Switch.Root
        checked={checked}
        disabled={disabled}
        onCheckedChange={onChange}
        className="relative h-6 w-11 shrink-0 rounded-full bg-white/20 outline-none transition-colors data-[state=checked]:bg-emerald-500 data-[disabled]:opacity-60"
      >
        <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform will-change-transform data-[state=checked]:translate-x-[22px]" />
      </Switch.Root>
    </div>
  );
}
