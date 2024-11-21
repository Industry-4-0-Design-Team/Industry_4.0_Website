import { useState } from "react";

const Story = ({ name, job, quote, headshot }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true); 
        // I added this cuz like the text was rendering before the image rendered so this makes it so that
        // the full think renders only when the image finishes rendering
    };

    return (
        <div className="flex mt-12 items-center">
            <div className="relative flex justify-center items-center">
                <img
                    src="/Gears/StoriesGear.svg"
                    className="custom-lg:max-w-[820px] md:max-w-[360px] max-w-[260px] h-auto mx-auto custom-lg:mx-0"
                    draggable="false"
                />
                <img
                    src={headshot}
                    className="absolute w-[180px] h-auto rounded-full"
                    draggable="false"
                    alt="Story Headshot"
                    onLoad={handleImageLoad} // Trigger image load handler
                />
            </div>
            <div className="flex flex-col ml-6 justify-center">
                {imageLoaded && (
                    <>
                        <div className="body custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl z-10 max-w-[520px]">
                            {name}
                        </div>
                        <div className="body-job-position custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl mt-4 z-10 max-w-[520px]">
                            {job}
                        </div>
                        <div className="body custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl mt-4 z-10 max-w-[520px]">
                            {quote}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Story;
