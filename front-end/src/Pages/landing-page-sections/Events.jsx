// import Button from "../../Components/Button";

const EventsPage = () => {
  return (
    <div
      id="events"
      className="mx-auto max-w-[1440px] mt-0 h-fit mb-[200px] custom-lg:mb-[250px] relative"
    >
      <div className="relative z-10 flex justify-center items-center custom-lg:mr-[72px] custom-lg:ml-[150px] mx-[12px]">
        <div className="flex flex-col items-center custom-lg:flex-row custom-lg:items-start w-full">
          {/* Left Section - Discover Events */}
          <div
            className="flex flex-col gap-3 items-center custom-lg:items-start justify-center mr-auto mt-8 custom-lg:mt-0 w-full"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="flex items-center justify-center custom-lg:justify-start w-full">
              <h1 className="neonText subtitle text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-8xl z-10 tracking-widest">
                EVENTS
              </h1>
            </div>
            <h2
              className="body pr-4 md:pr-6 lg:pr-10 custom-lg:pr-10 text-center custom-lg:text-left mt-4 z-10 w-full md:text-2xl lg:text-2xl"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              From engaging design
              <span className="text-secondary font-bold"> showcases</span> and
              insightful
              <span className="text-secondary font-bold">
                {" "}
                panel discussions{" "}
              </span>
              to personalized{" "}
              <span className="text-secondary font-bold"> resume </span>
              critiques and our highly anticipated annual
              <span className="text-secondary font-bold"> competition</span>,
              there&apos;s always something exciting happening in our club.
              Whether you&apos;re looking to sharpen your skills, gain
              inspiration from industry experts, or connect with a community of
              like-minded peers, our events have something for everyone. Stay
              connected with us to ensure you don&apos;t miss out on these
              incredible events! 📲
            </h2>
            {/* <div
              className="mt-6 text-center custom-lg:text-left"
              data-aos="fade-up"
              data-aos-offset="80"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Button text="ALL EVENTS" />
            </div> */}
          </div>

          {/* Right Section - Events Gear */}
          <img
            src="/Gears/EventsGear.png"
            className="custom-lg:max-w-[600px] md:max-w-[500px] sm:max-w-[400px] max-w-[300px] mt-10 h-auto inline-block md:mt-100 custom-lg:mt-0 mx-auto custom-lg:mx-0 custom-lg:inline-block"
            draggable="false"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-once="true"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
