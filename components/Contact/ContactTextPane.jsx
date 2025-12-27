export default function ContactTextPane({ data }) {
  return (
    <div className="pt-4">
      <span className="text-xs tracking-[0.28em] font-semibold uppercase text-slate-500">{data[0]}</span>
      <h2 className="mt-6 text-[52px] leading-[1.05] font-bold text-black">{data[1]}</h2>
      <p className="mt-6 max-w-md text-[17px] leading-relaxed text-slate-600">{data[2]}</p>
    </div>
  );
}



