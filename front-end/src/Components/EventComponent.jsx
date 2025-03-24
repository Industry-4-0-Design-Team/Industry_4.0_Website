function EventComponent({ title, eventDate, linkPath, imagePath, primaryTag, secondaryTag, animationDirection }) {
    return (
        <a 
            href={linkPath} 
            target="_blank" 
            className="group bg-[#2B2A2D] mb-6 rounded-2xl w-full sm:w-[580px] h-[500px] mx-auto px-8 py-8 flex flex-col transition-all duration-1500 hover:bg-[#222222] hover:scale-102 relative" 
            data-aos={animationDirection}
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="true"
        >
            <img 
                src={imagePath} 
                className="mx-auto w-full object-cover h-[16rem] rounded-t-xl transition-all duration-[700ms] ease-in-out group-hover:h-72" 
            />
            <div className="flex flex-row gap-2 items-center text-center justify-start mt-6">
                <h1 className="text-white text-sm rounded-2xl w-max px-4 py-[5px] bg-[#6F52AF]">{primaryTag}</h1>
                <h1 className="border border-white text-white text-sm rounded-2xl w-max px-4 py-[5px]">{secondaryTag}</h1>
            </div>
            <div>
                <h1 className="text-primaryText text-4xl font-bold mt-5">{title}</h1>
            </div>
            <div className="flex flex-row justify-between items-end">
                <h1 className="text-primaryText">{eventDate}</h1>
            </div>
            <div className="absolute bottom-3 right-3 p-2 rounded-full text-white">
                <img className="w-6 h-6" src="/externalLink.svg" alt="pop-out icon" />
            </div>
        </a>
    );
}

export default EventComponent;
