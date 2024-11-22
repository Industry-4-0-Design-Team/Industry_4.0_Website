import Button from "../../Components/Button";

const EventsPage = () => {
    return (
        <div id="events" className="custom-lg:mt-[-18rem] custom-lg:mb-[10rem] h-dvh relative">
            <div className="relative z-10 flex justify-center items-center custom-lg:mr-[72px] custom-lg:ml-[150px] mx-[12px] pt-48">
            <div className="flex flex-col items-center custom-lg:flex-row w-full">
            <div className="flex flex-col items-center custom-lg:items-start justify-center mr-auto mt-8 custom-lg:mt-0 w-full">
                <div className="flex items-center custom-lg:justify-start w-full">
                    <h1 className="subtitle text-[24px] custom-lg:text-[54px] sm:text-4xl text-center custom-lg:text-left mt-10 z-10 break-words w-full">
                        Discover Events
                            </h1>
                        </div>
                        <h2 className="body custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-left mt-4 z-10 custom-lg:max-w-[550px] break-words w-full">
                            Lorem ipsum dolor sit amet consectetur. Felis rhoncus egestas risus imperdiet vel ullamcorper. 
                            Sagittis amet cras ut et sed malesuada cum odio aliquam. Orci quam facilisis penatibus pulvinar sapien 
                            feugiat facilisis tortor. At libero tortor accumsan at. Integer urna ac convallis massa.
                        </h2>
                        <div className="mt-6 text-center custom-lg:text-left">
                            <Button text="ALL EVENTS" />
                        </div>
                    </div>
                    <img
                        src="/Gears/EventsGear.svg"
                        className="custom-lg:max-w-[820px] md:max-w-[360px] max-w-[260px] mt-10 h-auto inline-block md:mt-24 
                        custom-lg:mt-0 
                        mx-auto custom-lg:mx-0 
                        block custom-lg:inline-block"
                        draggable="false"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventsPage;