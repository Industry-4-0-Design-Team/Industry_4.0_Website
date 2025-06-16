import EventComponent from "../Components/EventComponent";
import {useEffect} from 'react';

function EventsPage() {


    useEffect (()=>window.scrollTo(0,10),[]);

    const eventsData = [
        {
            title: "I4 Challenge 2025",
            primaryTag: "Case Competition",
            secondaryTag: "Big Data Analytics",
            imagePath: "/Event-Page/comp2025.png",
            eventDate: "March 8, 2025",
            linkPath: "https://www.instagram.com/p/DHDx3zquZSP/",
        },
        {
            title: 'Co-Op Conversations 2024',
            primaryTag: 'Career Advice',
            secondaryTag: 'Data Science',
            eventDate: 'November 21, 2024',
            linkPath: 'https://www.instagram.com/p/DC0HuAZt7tw/',
            imagePath: '/Event-Page/coopConversations2024.png',
        },
        {
            title: 'Resume Critique 2025',
            primaryTag: 'Career Advice',
            secondaryTag: 'Networking',
            eventDate:'January 16, 2025',
            linkPath: 'https://www.instagram.com/p/DEs0OZwvxYH/?utm_source=ig_web_copy_link',
            imagePath: '/Event-Page/resumeCritique.jpg',
        },
        {
            title: 'Management Engineering Bonfire',
            primaryTag: 'Community Building',
            secondaryTag: 'Social Event',
            eventDate:'November 03, 2025',
            linkPath: 'https://www.instagram.com/p/DB7d2NitmUW/?utm_source=ig_web_copy_link',
            imagePath: '/Event-Page/bonfire.jpg',
        },
        {
            title: 'I4 Challenge 2024',
            primaryTag: 'Case Competiton',
            secondaryTag: 'Big Data Analytics',
            eventDate:'March 03, 2024',
            linkPath: 'https://www.instagram.com/p/C4KUiIRABl-/?utm_source=ig_web_copy_link',
            imagePath: '/Event-Page/comp2024.jpg',
        },
        {
            title: 'Resume Critique 2024',
            primaryTag: 'Career Advice',
            secondaryTag: 'Networking',
            eventDate:'January 01, 2024',
            linkPath: 'https://www.instagram.com/p/C2kiTUPur2G/?utm_source=ig_web_copy_link',
            imagePath: '/Event-Page/resumeCritique2024.jpg',
        },
        {
            title: 'Co-op Conversations 2023',
            primaryTag: 'Career Advice',
            secondaryTag: 'Data Science',
            eventDate:'November 16, 2023',
            linkPath: 'https://www.instagram.com/p/CzmWU_og-Cv/?utm_source=ig_web_copy_link',
            imagePath: '/Event-Page/coopConversations2023.webp',
        },
        {
            title: 'Python Workshop Series',
            primaryTag: 'Coding Fundamentals',
            secondaryTag: 'Problem Solving',
            eventDate:'October 07, 2023',
            linkPath: 'https://www.instagram.com/p/CyzNj7SACUc/?utm_source=ig_web_copy_link',
            imagePath: '/Event-Page/pythonWorkshop.jpg',
        }
        // Add more events here as needed
    ];

    return (
        <div className="pt-20 bg-[#1b1b1b] w-screen">
            <div className="w-full mt-12 mb-12 text-center relative flex px-5 items-center">
                <hr className="border-t-1 border-white grow"/>
                <h1 className="text-primaryText text-5xl font-bold mx-auto relative z-10 px-3">EVENTS</h1>
                <hr className="border-t-1 border-white grow"/>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 custom-xl:grid-cols-2 gap-4 custom-xl:px-10">
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

export default EventsPage;
