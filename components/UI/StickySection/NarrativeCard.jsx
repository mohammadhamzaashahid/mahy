import PrimaryButton from "../PrimaryButton";
import Image from "next/image";

export default function NarrativeCard({
  title,
  subtitle,
  bullets,
  image,
}) {
  return (
    <div className="max-w-xl w-full">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-4 text-slate-400 leading-relaxed">
        {subtitle}
      </p>

      <ul className="mt-8 space-y-4">
        {bullets.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-white">
            <span className="text-teal-400 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <PrimaryButton
        label="View More"
        size="md"
        bg="bg-gradient-to-r from-teal-600 to-emerald-600"
        hoverBg="hover:from-teal-500 hover:to-emerald-500"
        radius="rounded-full"
        className="mt-10"
      />

      {image && (
        <div className="mt-10 block lg:hidden w-full">
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
