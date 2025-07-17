import { useEffect } from "react";
import Button from "../../Components/Button";

const SponsorPage = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      // Disable AOS animations for small screens
      const elementsWithAOS = document.querySelectorAll("[data-aos]");
      elementsWithAOS.forEach((element) => {
        element.removeAttribute("data-aos");
      });
    }
  }, []);

  return (
    <div id="sponsors" className="h-full relative">
      <div className="relative z-10 flex justify-center items-center mx-[128px]">
        <div className="flex flex-col items-center custom-lg:mt-0 custom-lg:flex-row">
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
              className="body px-8 md:px-8 lg:px-8 custom-lg:px-10 text-center mt-0 z-10 max-w-[1250px] w-full md:text-2xl lg:text-2xl"
              data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="400"
              data-aos-duration="700"
              data-aos-once="true"
            >
              With the support of our incredible sponsors, we are broadening
              opportunities for students, providing them with the tools &
              resources needed to create solutions in the tech-driven world.
            </h2>

            {/* Button Section */}
            <div
              className="mt-8 text-center custom-lg:text-left"
              data-aos="fade-up"
              data-aos-offset="80"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <a
                href="mailto:industry4team@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="BECOME A SPONSOR" />
              </a>
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
                data-aos="zoom-in"
                data-aos-offset="80"
                data-aos-delay="600"
                data-aos-duration="1100"
                data-aos-once="true"
              />
              <img
                src="/Sponsers/TOYOTA.svg"
                className="h-lg inline-block relative -top-2 mt-[-1.5rem] custom-lg:mt-0"
                draggable="false"
                data-aos="zoom-in-left"
                data-aos-offset="80"
                data-aos-delay="600"
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
