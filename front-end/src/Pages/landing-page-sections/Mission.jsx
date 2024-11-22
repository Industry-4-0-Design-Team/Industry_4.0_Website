const MissionPage = () => {
    return (
        <div className="mt-[-2rem] h-dvh relative">
            <div className="relative z-10 flex justify-center items-center mx-[12px] pt-48">
                <div className="flex flex-col custom-lg:flex-row">
                    <img
                        src="/Gears/MissionGear.svg"
                        className="oscillate w-[320px] h-auto inline-block mt-24"
                        draggable="false"
                    />
                    <div className="flex flex-col items-center custom-lg:items-end justify-center custom-lg:ml-auto mt-8 custom-lg:mt-0">
                        <div className="flex items-center custom-lg:justify-end">
                            <h1 className="subtitle text-[24px] custom-lg:text-[54px]  sm:text-4xl
                                text-center custom-lg:text-right 
                                mt-10 z-10 inline-block 
                                subtitle-responsive">
                                Our Missi
                                <img
                                    src="/Gears/yellow_gear_in_4.0.svg"
                                    className="w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block align-middle mx-1"
                                    draggable="false"
                                />
                                n and Vision
                            </h1>
                        </div>
                        <h2 className="body custom-lg:text-[24px] md:text-[20px]
                            text-center custom-lg:text-right 
                            text-xl
                            mt-4 z-10 max-w-[520px] 
                            body-responsive">
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

export default MissionPage;