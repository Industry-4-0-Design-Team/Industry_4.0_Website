//NEED TO MAKE RESPONSIVE

function EventComponent ({ title, eventDate, linkPath, imagePath, primaryTag, secondaryTag}){
return(
    <div className="bg-[#2B2A2D] rounded-2xl w-2/3  mx-auto px-5 py-5 flex flex-col">
        <img src={imagePath} className="mx-auto w-full object-fill"/>
        <div className="flex flex-row gap-2 items-center text-center justify-start mt-3">
            <h1 className="text-white text-sm rounded-2xl w-max px-4 py-[5px] bg-[#6F52AF]">{primaryTag}</h1>
            <h1 className="border border-white text-white text-sm rounded-2xl w-max px-4 py-[5px]">{secondaryTag}</h1>
        </div>
        <div>
            <h1 className="text-primaryText text-4xl font-bold mt-5">{title}</h1>
        </div>
        <div className="flex flex-row justify-between items-end">
            <h1 className="text-primaryText">{eventDate}</h1>
            <a href={linkPath} target="_blank" className="rounded-full p-1 hover:bg-black">
                <img className='w-7 h-7'
                src="/externalLink.svg"/>
            </a>
        </div>
    </div>
)}


export default EventComponent;