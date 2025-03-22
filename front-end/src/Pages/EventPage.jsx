import EventComponent from "../Components/EventComponent";

function Events(){
    return(
        <div className="pt-20 bg-[#1b1b1b] w-screen">
            {/* NEED TO MAKE THE HR CENTERED AND APPEAR DIRECTLY UNDER THE EVENTS TEXT */}
            <div className="w-full text-center relative">
                <img src="/hr.png" className=" absolute" alt="" />
                <h1 className="text-primaryText text-5xl font-bold mx-auto">EVENTS</h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <EventComponent 
                    title="I4 Challenge"
                    primaryTag="Case Competition"
                    secondaryTag="Big Data Analytics"
                    imagePath="/Event-Page/competitionPhoto.png"
                    eventDate="March 8, 2025"
                    linkPath="https://google.com"
                />
                <EventComponent
                    title='Co-Op Conversations'
                    primaryTag='Career Advice'
                    secondaryTag='Data Science'
                    eventDate='November 21, 2024'
                    linkPath='https://google.com'
                    imagePath='/Event-Page/coopConversations.png'
            />
            </div>
        </div>
    )
}

export default Events;