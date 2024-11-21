import Button from "../../Components/Button";

const EventsPage = () => {
    return (
        <div id="events" className="mt-[-18rem] h-dvh relative">
            <div className="relative z-10 flex justify-center items-center mx-[128px] pt-48">
                <div className="flex flex-col items-center custom-lg:flex-row">
                    <div className="flex flex-col items-center custom-lg:items-start justify-center mr-auto mt-8 custom-lg:mt-0">
                        <div className="flex items-center custom-lg:justify-start">
                            <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center custom-lg:text-left mt-10 z-10">
                                Discover Events
                            </h1>
                        </div>
                        <h2 className="body custom-lg:text-[24px] md:text-[16px] text-[20px] text-center custom-lg:text-left mt-4 z-10 max-w-[550px]">
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
                        className="custom-lg:max-w-[820px] max-w-[360px] h-auto inline-block mt-24 
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
