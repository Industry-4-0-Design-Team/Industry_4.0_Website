const AboutPage = () => {
    return (
        <div className="mt-[-2rem] h-dvh relative">
            <div className="relative z-10 flex justify-center items-center mx-[128px] pt-48">
                <div className="flex">
                    <img
                        src="/Gears/MissionGear.svg"
                        className="w-[320px] h-auto inline-block mt-24"
                        draggable="false"
                    />
                    <div className="flex flex-col items-end justify-center ml-auto">
                        <div className="flex items-center">
                            <h1 className="subtitle text-center text-3xl mt-10 z-10">
                                Our Missi
                            </h1>
                            <img
                                src="/Gears/yellow_gear_in_4.0.svg"
                                className="ml-1 mr-1 mt-[4.1rem] w-8 h-8 inline-block relative -top-2"
                                draggable="false"
                            />
                            <h1 className="subtitle text-center text-3xl mt-10 z-10">
                                n </h1><h1 className="subtitle text-center text-3xl ml-4 mt-10 z-10"> and Vision
                            </h1>
                        </div>
                        <h2 className="body text-right text-3xl mt-4 z-10 max-w-[550px]">
                        At Industry 4.0, we strive to create a dynamic learning environment where students gain
                            early access to industry-relevant skills, knowledge, and connections. Through mentorship,
                            career-enhancing workshops, and a supportive community, we prepare students to excel in the
                            tech-driven future and thrive in the evolving world of Industry 4.0.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
