"use client";

export default function IdlePrompt({ visible, onOpen }) {
  if (!visible) return null;

  return (
    <div
      className="
        absolute
        bottom-[72px]
        sm:bottom-[88px]
        right-0.5
        sm:right-1
        w-[208px]
        sm:w-[230px]
        rounded-2xl
        border
        border-white/40
        bg-white/35
        px-4
        py-4
        backdrop-blur-xl
        shadow-[0_16px_40px_rgba(15,23,42,0.18)]
        animate-[fadeUp_0.25s_ease-out]
        text-slate-900
        pointer-events-auto
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[18px] border border-white/50 bg-white/80 text-slate-900 shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M21 12a9 9 0 0 1-10 9 9.6 9.6 0 0 1-4-.9L3 21l.9-4a9.6 9.6 0 0 1-.9-4 9 9 0 1 1 18 0Z" />
            <path d="M8 11h8" strokeLinecap="round" />
            <path d="M8 15h5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="space-y-0.5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            Need help?
          </p>
          <p className="text-sm font-semibold text-slate-900">
            Chat with Mahyra
          </p>
        </div>
      </div>

      <button
        onClick={onOpen}
        className="
          mt-3
          inline-flex
          items-center
          justify-between
          rounded-full
          border border-white/50
          bg-white/60
          px-3.5
          py-1.5
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-slate-800
          backdrop-blur
          transition
          hover:bg-white
        "
      >
        Let's talk
        <span className="ml-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </button>

      <div
        className="
          pointer-events-none
          absolute
          -bottom-6
          right-[-2px]
          sm:right-1
          flex
          flex-col
          items-start
          gap-1
        "
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-white/85" />
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-white/70" />
        <span className="ml-2 h-1 w-1 rounded-full bg-white/60" />
      </div>
    </div>
  );
}
