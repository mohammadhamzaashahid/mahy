import PartnersSection from "@/components/Layout/PartnersSection";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import KeyStatsSection from "@/components/UI/home/KeyStatsSection";
import { getLocale, getTranslations } from "next-intl/server";
import BusinessStepsContainer from "@/components/UI/home/BusinessStepsContainer";
import WhyUsContainer from "@/components/UI/home/WhyUsContainer";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import CompaniesList from "@/components/UI/home/CompaniesList";
import NewsroomSection from "@/components/UI/home/NewsroomSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import AwardsSection from "@/components/Awards/AwardsSection";
import { articles } from "@/constants/news";


export default async function Home() {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();

  const slides = [
    {
      title: "Nearly a Century of Building the UAE",
      subtitle:
        "Founded in Dubai in 1930, M.A.H.Y. Khoory Group has grown from a single trading enterprise into 25 operating companies across 10 industries trusted by the UAE's developers, municipalities and industrial operators for nearly a century.",
      cta: { label: "Explore Companies", href: "/companies/all" },
    },
    {
      title: "Engineering Infrastructure That Powers the UAE",
      subtitle:
        "From district cooling plants and high rise towers to municipal water stations and industrial facilities Al Khoory Engineering has delivered pumping and MEP systems to landmark projects across the Emirates for decades.",
      cta: {
        label: "Engineering Services",
        href: "/companies/engineering-services",
      },
    },
    {
      title: "Excellence Built on Experience and Commitment",
      subtitle:
        "Our decades of industry knowledge enable us to provide consistent quality and trusted services across every business we operate.",
      cta: { label: "Shop Products", href: "/under-maintenance" },
    },
    {
      title: "From Waste Paper to Finished Packaging Under One Roof",
      subtitle:
        "Our integrated recycling and manufacturing ecosystem collects waste paper converts it into recycled containerboard and supplies it to corrugated packaging producers across the UAE and Gulf a closed loop that few regional groups can offer.",
      cta: { label: "Explore Companies", href: "/companies/all" },
    },
    {
      title: "Authorized Distributors of the World's Leading Engineering Brands",
      subtitle:
        "As the UAE's authorized partner for Grundfos, Samsung, Ariston, Dewalt and other globally recognized manufacturers, we bring world-class engineering technology backed by decades of local installation and after sales expertise.",
      cta: { label: "View Services", href: "/companies/engineering-services" },
    },
    {
      title: "Solar EPC. Paper Manufacturing. Automotive. Waste Management.",
      subtitle:
        "Our 25 companies operate independently, each a specialist in its field from pumping systems and LED lighting to solar EPC, hotel operations and vehicle distribution. One Group. Ten industries. No compromises.",
      cta: { label: "Learn More", href: "/companies/all" },
    },
    {
      title: "UAE-National Owned. Dubai Founded. Built to Last",
      subtitle:
        "M.A.H.Y. Khoory Group is one of the few UAE national-owned industrial holding groups with roots stretching back to 1930. Our ownership, our people and our purpose are all rooted in this country.",
      cta: { label: "Explore Solutions", href: "/companies/all" },
    },
    {
      title: "1,300 Tonnes of Waste Recovered. Every Single Day.",
      subtitle:
        "Through our waste collection, recycling and manufacturing operations across Dubai, Abu Dhabi and Oman, we divert over 1,300 metric tonnes of recyclable material from landfill daily turning waste into industrial raw material.",
      cta: { label: "Discover More", href: "/companies/all" },
    },
  ];
  const floatingMenuItems = [
    t("FloatingMenu.Item1"),
    t("FloatingMenu.Item2"),
    t("FloatingMenu.Item3"),
    t("FloatingMenu.Item4"),
    t("FloatingMenu.Item5"),
    t("FloatingMenu.Item6"),
    t("FloatingMenu.Item7"),
  ];
  // const advantages = {
  //   heading: t("Advantages.Heading"),
  //   text1: t("Advantages.Text1"),
  //   text2: t("Advantages.Text2"),
  //   items: [
  //     {
  //       title: t("Advantages.Title1"),
  //       heading: t("Advantages.Heading1"),
  //       description: t("Advantages.Description1"),
  //     },
  //     {
  //       title: t("Advantages.Title2"),
  //       heading: t("Advantages.Heading2"),
  //       description: t("Advantages.Description2"),
  //     },
  //     {
  //       title: t("Advantages.Title3"),
  //       description: t("Advantages.Description3"),
  //     },
  //     {
  //       title: t("Advantages.Title4"),
  //       description: t("Advantages.Description4"),
  //     },
  //     {
  //       title: t("Advantages.Title5"),
  //       description: t("Advantages.Description5"),
  //     },
  //   ],
  // };
  // const announcements = [
  //   {
  //     heading: t("Announcements.Heading1"),
  //     title: t("Announcements.Title1"),
  //     text: t("Announcements.Text1"),
  //   },
  //   {
  //     heading: t("Announcements.Heading2"),
  //     title: t("Announcements.Title2"),
  //     text: t("Announcements.Text2"),
  //     img: "/gallery/gallery-7.webp",
  //   },
  //   {
  //     heading: t("Announcements.Heading3"),
  //     title: t("Announcements.Title3"),
  //     text: t("Announcements.Text3"),
  //     img: "/gallery/gallery-8.jpeg",
  //   },
  //   {
  //     heading: t("Announcements.Heading4"),
  //     title: t("Announcements.Title4"),
  //     text: t("Announcements.Text4"),
  //     img: "/gallery/gallery-9.jpeg",
  //   },
  //   {
  //     heading: t("Announcements.Heading5"),
  //     title: t("Announcements.Title5"),
  //     text: t("Announcements.Text5"),
  //     img: "/gallery/gallery-4.jpg",
  //   },
  //   {
  //     heading: t("Announcements.Heading6"),
  //     title: t("Announcements.Title6"),
  //     text: t("Announcements.Text6"),
  //     img: "/gallery/gallery-5.jpg",
  //   },
  //   {
  //     heading: t("Announcements.Heading7"),
  //     title: t("Announcements.Title7"),
  //     text: t("Announcements.Text7"),
  //     img: "/gallery/gallery-6.jpg",
  //   },
  //   {
  //     heading: t("Announcements.Heading8"),
  //     title: t("Announcements.Title8"),
  //     text: t("Announcements.Text8"),
  //   },
  // ];
  // const articleTranslations = await getTranslations("Articles");
  // const articles = await getArticles(0, 4, articleTranslations);


  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu floatingMenuItems={floatingMenuItems} />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <section id="who-we-are">
        <WhoWeAre
          image={
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
          }
          padding="xl"
        />
      </section>

      <div id="companies">
        <CompaniesList industeriesFirst={false} darkBg={true} />
      </div>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="stats">
        <KeyStatsSection />
      </section>

      <div id="awards">
        <AwardsSection />
      </div>

      <div id="newsroom">
        <NewsroomSection articles={articles} locale={locale} />
      </div>

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="after-sales">
        <BusinessStepsContainer />
      </section>

      <section id="why-us">
        <WhyUsContainer />
      </section>
    </main>
  );
}
