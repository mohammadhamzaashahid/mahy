import LogoMarquee from "../UI/LogoMarquee";

const LOGOS = [
  { src: "/companies/Grundfos.jpg", alt: "Grundfos" },
  { src: "/companies/oventop.jpeg", alt: "Oventrop" },
  { src: "/companies/partners-ariston.jpg", alt: "Ariston" },
  { src: "/companies/partners-gaia.jpg", alt: "Gaia" },
  { src: "/companies/partners-havells.jpg", alt: "Havells" },
  { src: "/companies/partners-lister-petter.jpg", alt: "Lister Petter" },
  { src: "/companies/partners-marathon-motor.jpg", alt: "Marathon Motor" },
  { src: "/companies/partners-pakawaste.jpg", alt: "Pakawaste" },
];

export default function PartnersSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Our Partners
        </h2>

<div className="w-24 md:w-32 h-[3px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto my-4 rounded-full" />

        <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base font-medium">
          We work only with the best to bring you only the best.
        </p>
      </div>
      <LogoMarquee logos={LOGOS} speed={35} />
    </section>
  );
}
