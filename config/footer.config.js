export const getFooter = (translations) => {
  return {
    brand: {
      name: translations("Name"),
      logo: {
        src: "/MAHY.png",
        alt: "MAHY Khoory & Co. LLC",
        href: "/",
        width: 140,
        height: 32,
      },
      description: translations("Description"),
      status: {
        label: translations("Status"),
        active: true,
      },
    },


    sections: [
      {
        title: translations("Section1"),
        links: [
          { label: translations("Section1Link1"), href: "#" },
          { label: translations("Section1Link2"), href: "#" },
          { label: translations("Section1Link3"), href: "#" },
          { label: translations("Section1Link4"), href: "#" },
          { label: translations("Section1Link5"), href: "#" },
        ],
      },
      {
        title: translations("Section2"),
        links: [
          { label: translations("Section2Link1"), href: "#" },
          { label: translations("Section2Link2"), href: "#" },
          { label: translations("Section2Link3"), href: "#" },
          { label: translations("Section2Link4"), href: "#" },
        ],
      },
      {
        title: translations("Section3"),
        links: [
          { label: translations("Section3Link1"), href: "#" },
          { label: translations("Section3Link2"), href: "#" },
          { label: translations("Section3Link3"), href: "#" },
        ],
        cta: {
          label: translations("Cta"),
          href: "#",
        },
      },
    ],

    bottom: {
      copyright: translations("Bottom"),
      links: [
        { label: translations("BottomLink1"), href: "#" },
        { label: translations("BottomLink2"), href: "#" },
        { label: translations("BottomLink3"), href: "#" },
      ],
    },
  }
};
