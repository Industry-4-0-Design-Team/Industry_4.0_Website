import Button from "../../Components/Button";

const SponserPage = () => {
    return (
        <div id="sponsors" className="h-full relative">
            <div className="relative z-10 flex justify-center pt-32 items-center mx-[128px]">
                <div className="flex flex-col items-center custom-lg:flex-row">
                    <div className="flex flex-col items-center justify-center ml-auto">
                        <div className="flex mt-[18rem] custom-lg:mt-0 items-center custom-lg:justify-start">
                            <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center text-3xl mt-10 z-10">
                                Spons
                            </h1>
                            <img
                                src="/Gears/yellow_gear_in_4.0.svg"
                                className="ml-1 mr-1 mt-[4.1rem] w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block relative -top-2"
                                draggable="false"
                            />
                            <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center text-3xl mt-10 z-10">
                                rs
                            </h1>
                        </div>
                        <h2 className="body custom-lg:text-[24px] md:text-[20px] text-center mt-4 z-10 max-w-[550px] custom-lg:max-w-[850px]">
                            With the support of our incredible sponsors, we are broadening opportunities for students,
                            providing them with the tools & resources needed to create meaningful
                            solutions in the tech-driven world.
                        </h2>
                        <div className="mt-6 text-center">
                            <Button text="BECOME A SPONSER" />
                        </div>
                        <div
                            className="flex flex-col custom-lg:flex-row items-center mt-12 gap-12 justify-center custom-lg:space-x-4"
                        >
                            <img
                                src="/Sponsers/WEEF.svg"
                                className="h-lg inline-block relative -top-2 custom-lg:mt-0"
                                draggable="false"
                            />
                            <img
                                src="/Sponsers/MGMT.svg"
                                className="h-lg inline-block relative -top-2 mt-[-2rem] custom-lg:mt-0"
                                draggable="false"
                            />
                            <img
                                src="/Sponsers/TOYOTA.svg"
                                className="h-lg inline-block relative -top-2 mt-[-1.5rem] custom-lg:mt-0"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponserPage;
