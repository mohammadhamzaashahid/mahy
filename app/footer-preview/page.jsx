import FooterV2 from "@/components/Layout/FooterV2";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function FooterPreviewPage() {
  return (
    <main className="min-h-screen bg-slate-100 pt-24">
      <FooterV2 />
    </main>
  );
}
