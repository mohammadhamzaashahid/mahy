import { getTranslations } from "next-intl/server";
import { id } from "zod/v4/locales";

const partners = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276027/grundfos_mgr1iy.png",
    name: "Grundfos",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276027/GAIA_drogzh.png",
    name: "Gaia",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276035/oventrop_lcfzj9.png",
    name: "Oventrop",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276030/ListerPetter_zoul9w.png",
    name: "Lister Petter",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276031/Marathon_nzfxf7.png",
    name: "Marathon Motor",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276025/Artiston_muldmh.png",
    name: "Ariston",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276036/PakaWaste_dh4pkx.png",
    name: "Pakawaste",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276033/MKA_z1fx1q.png",
    name: "Mahy Khoory Motors",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276028/Havells_akbdxh.png",
    name: "Havells",
  },
];

export const getPartnerNames = async () => {
  const t = await getTranslations("Partners");
  return partners.map((partner, i) => {
    return {
      id: i,
      label: t(`Partner${i + 1}`),
    };
  });
};

export default partners;
