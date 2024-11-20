import Button from "../../Components/Button";

const SponserPage = () => {
    return (
        <div className="bg-diamonds h-dvh relative">
            <div className="relative z-10 flex justify-center items-center mx-[128px]">
                <div className="flex">
                    <div className="flex flex-col items-center justify-center ml-auto">
                        <div className="flex items-center">
                            <h1 className="subtitle text-center text-3xl mt-10 z-10">
                                Spons
                            </h1>
                            <img
                                src="/Gears/yellow_gear_in_4.0.svg"
                                className="ml-1 mr-1 mt-[4.1rem] w-8 h-8 inline-block relative -top-2"
                                draggable="false"
                            />
                            <h1 className="subtitle text-center text-3xl mt-10 z-10">
                                rs
                            </h1>
                        </div>
                        <h2 className="body text-center text-3xl mt-4 z-10 max-w-[850px]">
                            With the support of our incredible sponsors, we are broadening opportunities for students,
                            providing them with the tools and resources needed to overcome challenges and create meaningful
                            solutions in the tech-driven world.
                        </h2>
                        <div className="mt-6">
                            <Button text="BECOME A SPONSER" />
                        </div>
                        <div className="flex items-center mt-12 gap-12 justify-center space-x-4">
                            <img
                                src="/Sponsers/WEEF.svg"
                                className="h-lg inline-block relative -top-2"
                                draggable="false"
                            />
                            <img
                                src="/Sponsers/MGMT.svg"
                                className="h-lg inline-block relative -top-2"
                                draggable="false"
                            />
                            <img
                                src="/Sponsers/TOYOTA.svg"
                                className="h-lg inline-block relative -top-2"
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
