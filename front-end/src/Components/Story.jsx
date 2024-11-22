import { useState, useEffect } from "react";

const Story = ({ name, job, quote, headshot, isVisible, preloadedImages }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const img = new Image();
            img.src = preloadedImages?.[headshot] || headshot;
            img.onload = () => setImageLoaded(true);
        } else {
            setImageLoaded(false); // Reset state when transitioning out
        }
    }, [isVisible, headshot, preloadedImages]);

    const getImageSrc = (src) => preloadedImages?.[src] || src;

    return (
        <div className="flex mt-12 items-center">
            <div
                className="relative flex justify-center items-center"
                style={{
                    opacity: isVisible && imageLoaded ? 1 : 0,
                    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-5rem, 0, 0)',
                    transition: 'opacity 600ms ease-in-out, transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <img
                    src={getImageSrc('/Gears/StoriesGear.svg')}
                    className="custom-lg:max-w-[820px] md:max-w-[360px] max-w-[260px] h-auto mx-auto custom-lg:mx-0"
                    draggable="false"
                    alt="Gear Background"
                />
                <img
                    src={getImageSrc(headshot)}
                    className="absolute w-[180px] h-auto rounded-full"
                    draggable="false"
                    alt="Story Headshot"
                />
            </div>
            <div
                className="flex flex-col ml-6 justify-center"
                style={{
                    opacity: isVisible && imageLoaded ? 1 : 0,
                    transition: 'opacity 600ms ease-in-out, transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div className="body custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl z-10 max-w-[520px]">
                    {name}
                </div>
                <div className="body-job-position custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl mt-4 z-10 max-w-[520px]">
                    {job}
                </div>
                <div className="body custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl mt-4 z-10 max-w-[520px]">
                    {quote}
                </div>
            </div>
        </div>
    );
};

export default Story;
