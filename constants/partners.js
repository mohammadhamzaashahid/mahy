import { getTranslations } from "next-intl/server";

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
    image: "/companies/arsiton.png",
    name: "Ariston",
  },
  {
    id: 5,
    image: "/companies/dongfeng.png",
    name: "Dongfeng",
  },
  {
    id: 6,
    image: "/companies/dewalt.png",
    name: "Dewalt",
  },
  {
    id: 7,
    image: "/companies/franklinelectric.png",
    name: "Franklin Electric",
  },
  {
    id: 8,
    image: "/companies/samsung.png",
    name: "Samsung",
  },
  {
    id: 9,
    image: "/companies/hisense.png",
    name: "Hisense",
  },
  {
    id: 10,
    image: "/companies/jecco.png",
    name: "Jecco",
  },
  {
    id: 11,
    image: "/companies/fuji.png",
    name: "Fuji",
  },
  // {
  //   id: 4,
  //   image:
  //     "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276031/Marathon_nzfxf7.png",
  //   name: "Marathon Motor",
  // },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276025/Artiston_muldmh.png",
    name: "Ariston",
  },
  // {
  //   id: 6,
  //   image:
  //     "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276036/PakaWaste_dh4pkx.png",
  //   name: "Pakawaste",
  // },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276033/MKA_z1fx1q.png",
    name: "Mahy Khoory Motors",
  },
  // {
  //   id: 8,
  //   image:
  //     "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777276028/Havells_akbdxh.png",
  //   name: "Havells",
  // },
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
