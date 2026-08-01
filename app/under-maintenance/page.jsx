import Link from "next/link";
import { ArrowRight, Mail, Store, Wrench } from "lucide-react";

export const metadata = {
  robots: { index: false, follow: false },
};

function UnderMaintenancePage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#0B1320]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 sm:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f6f8fb_52%,#e8edf5_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#0f172b_1px,transparent_1px),linear-gradient(90deg,#0f172b_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Shop Update In Progress
            </div>

            <h1 className="mt-8 max-w-3xl text-[42px] font-semibold leading-[1.08] text-[#0B1320] sm:text-[58px] lg:text-[68px]">
              Our online shop is under maintenance.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We are preparing a smoother shopping experience for our customers.
              The shop will be available soon.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#0f172b] px-6 text-sm font-semibold text-white transition hover:bg-[#2c3f6e]"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              {/* <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center gap-2 border border-slate-300 bg-white px-6 text-sm font-semibold text-[#0B1320] transition hover:border-[#0f172b]"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Link> */}
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,43,0.12)]">
            <div className="flex h-16 w-16 items-center justify-center bg-[#0f172b] text-white">
              <Store className="h-8 w-8" />
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f1f4f9] text-[#2c3f6e]">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-slate-950">
                    Shop coming soon
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Product browsing and ordering are currently being updated.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-1.5 overflow-hidden bg-slate-200">
              <div className="h-full w-2/3 bg-[#0f172b]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UnderMaintenancePage;
