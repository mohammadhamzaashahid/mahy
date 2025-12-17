import LogoMarquee from "../UI/LogoMarquee";

const LOGOS = [
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994346/grundfos_lbiolu.png", alt: "Grundfos" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/GAIA_r8o2xz.png", alt: "Gaia" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/oventrop_v6j8mf.png", alt: "Oventrop" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/ListerPetter_ea6myv.png", alt: "Lister Petter" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/Marathon_rqvumo.png", alt: "Marathon Motor" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/Artiston_dkapb8.png", alt: "Ariston" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994347/PakaWaste_ltpkeg.png", alt: "Pakawaste" },
  { src: "https://res.cloudinary.com/db3fd1qah/image/upload/v1765994346/Havells_wmzbot.png", alt: "Havells" },
];

export default function PartnersSection() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Our Partners
        </h2>
        <div className="w-24 md:w-32 h-[3px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto my-4 rounded-full" />
        <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base font-medium">
          We work only with the best to bring you only the best.
        </p>
      </div>
      <LogoMarquee logos={LOGOS} speed={40} />
    </div>
  );
}
