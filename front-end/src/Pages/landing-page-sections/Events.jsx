import Button from "../../Components/Button";

const EventsPage = () => {
  return (
    <div
      id="events"
      className="custom-lg:mt-[-18rem] mt-[10rem] custom-lg:mb-[10rem] h-dvh relative"
    >
      <div className="relative z-10 flex justify-center items-center custom-lg:mr-[72px] custom-lg:ml-[150px] mx-[12px] pt-48">
        <div className="flex flex-col items-center custom-lg:flex-row w-full">
          {/* Left Section - Discover Events */}
          <div
            className="flex flex-col items-center custom-lg:items-start justify-center mr-auto mt-8 custom-lg:mt-0 w-full"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div className="flex items-center custom-lg:justify-start w-full">
              <h1 className="subtitle text-[24px] custom-lg:text-[54px] sm:text-4xl text-center custom-lg:text-left mt-10 z-10 break-words w-full">
                Discover Events
              </h1>
            </div>
            <h2
              className="body custom-lg:text-[24px] md:text-[22px] text-center custom-lg:text-left mt-4 z-10 custom-lg:max-w-[550px] break-words w-full"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-once="false"
            >
              Stay connected and don&apos;t miss out on our club&apos;s exciting events!
              From design showcases and panel discussions to resume critiques
              and our annual competition, there&apos;s always something happening.
            </h2>
            <div
              className="mt-6 text-center custom-lg:text-left"
              data-aos="fade-up"
              data-aos-offset="80"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="false"
            >
              <Button text="ALL EVENTS" />
            </div>
          </div>

          {/* Right Section - Events Gear */}
          <img
            src="/Gears/EventsGear.svg"
            className="custom-lg:max-w-[820px] md:max-w-[360px] max-w-[260px] mt-10 h-auto inline-block md:mt-100 custom-lg:mt-0 mx-auto custom-lg:mx-0 block custom-lg:inline-block"
            draggable="false"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-once="false"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
