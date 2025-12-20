import LeaderQuoteCard from "./LeaderQuoteCard";

export default function LeadersSection({ leaders }) {
    return (
        <section className="w-full bg-black">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-1 pt-16 sm:pt-20 lg:pt-24 mb-4">
                <h3 className="text-white uppercase font-bold tracking-tight text-3xl sm:text-2xl lg:text-3xl">{leaders.heading}</h3>
            </div>

            <LeaderQuoteCard
                imageSrc="/gallery/chairmanphoto.jpg"
                imageAlt="Mr. Salahuddin Sharafi"
                quote={leaders.leader1.quote}
                name={leaders.leader1.name}
                designation={leaders.leader1.designation}
            />

            <LeaderQuoteCard
                imageSrc="/gallery/GCM.png"
                imageAlt="Mr. Shabbir Haideri"
                quote={leaders.leader2.quote}
                name={leaders.leader2.name}
                designation={leaders.leader2.designation}
            />
        </section>
    );
}
