import { useState } from "react";
import Story from "../../Components/Story";

const StoriesPage = () => {
    const stories = [
        {
            name: "Martin Luther King",
            job: "Freedom Fighter @ Bangladesh",
            quote: "Lorem ipsum dolor sit amet consectetur. Venenatis tincidunt donec in dolor. In augue purus ac dignissim pellentesque porttitor. Nec ac nisl est mus hac. Erat aliquet at euismod libero ultricies vitae. Vulputate ac bibendum orci nunc feugiat.",
            headshot: "/story-headshots/TejasSample.jpg",
        },
        {
            name: "Rosa Parks",
            job: "Data Scientist @ Organization",
            quote: "Aliquam euismod nunc in elit tincidunt tristique. Praesent ut dui nec nisi vehicula porttitor. Suspendisse faucibus velit sit amet dignissim. Cras convallis tortor non sapien convallis tincidunt.",
            headshot: "/story-headshots/JinaSample.jpg",
        },
    ];

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const handleNext = () => {
        setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    const handlePrevious = () => {
        setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    };

    return (
        <div id="stories" className="h-full relative mb-[500px]">
            <div className="relative z-10 flex justify-center pt-32 items-center mx-[128px]">
                <div className="flex flex-col items-center custom-lg:flex-row">
                    <div className="flex flex-col items-center justify-center ml-auto">
                        <div className="flex items-center custom-lg:justify-start">
                            <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center text-3xl mt-10 z-10">
                                St
                            </h1>
                            <img
                                src="/Gears/yellow_gear_in_4.0.svg"
                                className="ml-1 mr-1 mt-[4.1rem] w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block relative -top-2"
                                draggable="false"
                            />
                            <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center text-3xl mt-10 z-10">
                                ries
                            </h1>
                        </div>
                        <h2 className="body custom-lg:text-[24px] md:text-[20px] text-center mt-4 z-10 max-w-[550px] custom-lg:max-w-[850px]">
                            Hear about the success stories from past Industry 4.0 members
                            and participants in our annual I4 competition.
                        </h2>
                        <div className="mt-6 text-center">
                            <Story {...stories[currentStoryIndex]} />
                        </div>
                        <div className="mt-[-6rem] ml-[58rem] flex gap-4">
                            <button
                                onClick={handlePrevious}
                                className="bg-[#6F52AF] hover:bg-[#5A4391] border border-[#9B90E8] p-2 rounded-[10px] flex justify-center items-center"
                            >
                                <img
                                    src="/arrows/LeftArrow.svg"
                                    className="w-[30px] h-auto"
                                    draggable="false"
                                    alt="Left Arrow"
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-[#6F52AF] hover:bg-[#5A4391] border border-[#9B90E8] p-2 rounded-[10px] flex justify-center items-center"
                            >
                                <img
                                    src="/arrows/RightArrow.svg"
                                    className="w-[30px] h-auto"
                                    draggable="false"
                                    alt="Right Arrow"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoriesPage;
