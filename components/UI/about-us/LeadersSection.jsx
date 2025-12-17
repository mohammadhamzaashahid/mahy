import LeaderQuoteCard from "./LeaderQuoteCard";

export default function LeadersSection() {
    return (
        <section className="w-full bg-black">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-1 pt-16 sm:pt-20 lg:pt-24 mb-4">
                <h3
                    className="
            text-white
            uppercase
            font-bold
            tracking-tight
            text-3xl
            sm:text-2xl
            lg:text-3xl
          "
                >
                    From The Leaders
                </h3>
            </div>

            <LeaderQuoteCard
                imageSrc="/gallery/chairmanphoto.jpg"
                imageAlt="Mr. Salahuddin Sharafi"
                quote="Our people are our greatest strength and the driving force behind our shared vision of making trade flow."
                name="Mr. Salahuddin Sharafi"
                designation="Chairman of M.A.H.Y. Khoory & Co. LLC"
            />

            <LeaderQuoteCard
                imageSrc="/gallery/GCM.png"
                imageAlt="Mr. Shabbir Haideri"
                quote="Our people are our greatest strength and the driving force behind our shared vision of making trade flow."
                name="Mr. Shabbir Haideri"
                designation="Group CEO of M.A.H.Y. Khoory & Co. LLC"
            />
        </section>
    );
}
