import EventComponent from "../Components/EventComponent";

function Events() {
    const eventsData = [
        {
            title: "I4 Challenge",
            primaryTag: "Case Competition",
            secondaryTag: "Big Data Analytics",
            imagePath: "/Event-Page/competitionPhoto.png",
            eventDate: "March 8, 2025",
            linkPath: "https://www.instagram.com/p/DHDx3zquZSP/",
        },
        {
            title: 'Co-Op Conversations',
            primaryTag: 'Career Advice',
            secondaryTag: 'Data Science',
            eventDate: 'November 21, 2024',
            linkPath: 'https://www.instagram.com/p/DC0HuAZt7tw/',
            imagePath: '/Event-Page/coopConversations.png',
        },
        {
            title: 'Co-Op Conversations',
            primaryTag: 'Career Advice',
            secondaryTag: 'Data Science',
            eventDate: 'November 21, 2024',
            linkPath: 'https://www.instagram.com/p/DC0HuAZt7tw/',
            imagePath: '/Event-Page/coopConversations.png',
        },
        // Add more events here as needed
    ];

    return (
        <div className="pt-20 bg-[#1b1b1b] w-screen">
            <div className="w-full mt-12 mb-12 text-center relative">
                <h1 className="text-primaryText text-5xl font-bold mx-auto relative z-10">EVENTS</h1>
                <img
                    src="/hr.png"
                    className="absolute ml-[1rem] left-1/2 transform -translate-x-1/2 mt-[-1.5rem] w-[15rem] sm:w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[100rem]"
                    alt="Horizontal Line"
                />
            </div>

            <div className="grid grid-cols-1 xxl:grid-cols-3 custom-xl:grid-cols-2 gap-4 xs:mx-[1rem] sm:mx-[4rem] lmd:mx-[5rem] lg:mx-[12rem]">
                {eventsData.map((event, index) => (
                    <EventComponent
                        key={index}
                        title={event.title}
                        primaryTag={event.primaryTag}
                        secondaryTag={event.secondaryTag}
                        imagePath={event.imagePath}
                        eventDate={event.eventDate}
                        linkPath={event.linkPath}
                        animationDirection={index % 2 === 0 ? "fade-right" : "fade-left"}
                    />
                ))}
            </div>
        </div>
    );
}

export default Events;
