import Button from "../../Components/Button";

const SponsorPage = () => {
  return (
    <div id="sponsors" className="h-full relative">
      <div className="relative z-10 flex justify-center items-center mx-[128px]">
        <div className="flex flex-col items-center custom-lg:mt-0 mt-[24rem] custom-lg:flex-row">
          <div className="flex flex-col items-center justify-center ml-auto">
            {/* Sponsors Heading */}
            <div
              className="flex items-center custom-lg:justify-start mb-5"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h1 className="neonText subtitle text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-8xl z-10 tracking-widest">
                SPONSORS
              </h1>
            </div>

            {/* Subtitle Section */}
            <h2
              className="body custom-lg:text-[24px] md:text-[20px] text-center mt-4 z-10 max-w-[550px] custom-lg:max-w-[850px]"
              data-aos="zoom-in"
               data-aos-offset="50"
               data-aos-delay="400"
               data-aos-duration="700"
               data-aos-once="true"
            >
              With the support of our incredible sponsors, we are broadening
              opportunities for students, providing them with the tools &
              resources needed to create meaningful solutions in the tech
              world.
            </h2>

            {/* Button Section */}
            <div
              className="mt-10 text-center custom-lg:text-left"
              data-aos="fade-in"
              data-aos-offset="80"
              data-aos-delay="800"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Button text="BECOME A SPONSOR" />
            </div>

            {/* Sponsors Logos */}
            <div className="flex flex-col custom-lg:flex-row items-center mt-12 gap-12 justify-center custom-lg:space-x-4">
              <img
                src="/Sponsers/WEEF.svg"
                className="h-lg inline-block relative -top-2 custom-lg:mt-0"
                draggable="false"
                data-aos="zoom-in-right"
                data-aos-offset="80"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-once="true"
              />
              <img
                src="/Sponsers/MGMT.svg"
                className="h-lg inline-block relative -top-2 mt-[-2rem] custom-lg:mt-0"
                draggable="false"
                data-aos="fade-in"
                data-aos-offset="80"
                data-aos-delay="600"
                data-aos-duration="1500"
                data-aos-once="true"
              />
              <img
                src="/Sponsers/TOYOTA.svg"
                className="h-lg inline-block relative -top-2 mt-[-1.5rem] custom-lg:mt-0"
                draggable="false"
                data-aos="zoom-in-left"
                data-aos-offset="80"
                data-aos-delay="00"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
