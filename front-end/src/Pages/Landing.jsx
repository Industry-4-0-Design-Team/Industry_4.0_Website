import { useState, useEffect } from "react";
import "../Styles/Landing.css";

const LandingPage = () => {
  // State for the toast message
  const [toastVisible, setToastVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);

  // Check for screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    // Define offsets for specific sections
    const offsets = {
      landing: 90,
      about: 90,
      events: -190,
      sponsors: 0,
      stories: -65,
      team: 100,
    };

    if (section) {
      const offsetTop = section.offsetTop - (offsets[id] || 100);
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // Handle "Sign Up" button click
  const handleSignUpClick = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 5000);
  };

  return (
    <div
      id="landing"
      className="flex flex-col items-center w-full h-screen justify-center"
    >
      {/* Main content container */}
      <img
        src="/planetGear.svg"
        alt="Planet Gear"
        className="simple-oscillate absolute right-0 top-10 md:right-20 md:top-4 lg:top-12 w-32 h-32 hidden custom-lg:block"
        {...(!isSmallScreen && {
          "data-aos": "fade-left",
          "data-aos-offset": "0",
          "data-aos-delay": "500",
          "data-aos-duration": "1100",
          "data-aos-once": "true",
        })}
      />

      <div className="flex flex-col items-center custom-lg:mt-[380px] mt-[550px] md:mt-[420px]">
        <div
          className="flex items-center justify-center mt-16 w-full"
          {...(!isSmallScreen && {
            "data-aos": "zoom-in",
            "data-aos-offset": "0",
            "data-aos-delay": "200",
            "data-aos-duration": "1100",
            "data-aos-once": "true",
          })}
        >
          <h1 className="text-center text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-8xl text-primaryText font-900">
            INDUSTRY 4.
            <img
              src="/Gears/yellow_gear_in_4.0.svg"
              className="spinning-image ml-1 w-20 h-20 inline-block relative -top-2"
              draggable="false"
            />
          </h1>
        </div>

        <div
          className="flex justify-center md:justify-end w-full mt-3 md:mt-6 lg:ml-[5rem] z-20"
          {...(!isSmallScreen && {
            "data-aos": "zoom-in",
            "data-aos-offset": "0",
            "data-aos-delay": "350",
            "data-aos-duration": "1100",
            "data-aos-once": "true",
          })}
        >
          <div className="text-center md:text-right lg:text-right lg:mr-10">
            <h1 className="text-[#EEE6FF] font-900 text-lg md:text-3xl lg:text-4xl lg:text-right">
              GEAR UP TO GO BEYOND
            </h1>
            <div className="text-secondary font-900 text-xl mt-3 grow-shrink">
              MARCH 8 - IN-PERSON at the UNIVERSITY OF WATERLOO
            </div>
            <div className="flex items-center mt-6 md:flex-row gap-5 md:justify-end">
              <button
                onClick={() => scrollToSection("competition")}
                className="text-black font-900 bg-secondary px-4 py-1 rounded-full text-md md:text-lg w-32 h-12 md:w-40 md:h-14 inline-flex items-center justify-center whitespace-nowrap transform transition-transform duration-200 hover:scale-105 active:drop-shadow-xl"
              >
                SIGN UP
              </button>
              <button
                onClick={() => scrollToSection("sponsors")}
                className="buttonGlow text-secondary font-900 px-4 py-1 rounded-full text-sm md:text-lg w-32 h-12 md:w-40 md:h-14 transform transition-transform duration-200 hover:scale-110"
              >
                SPONSORS
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/Comets.svg"
        alt="comets"
        className="absolute left-10 lg:left-20 hidden md:block"
        {...(!isSmallScreen && {
          "data-aos": "fade-right",
          "data-aos-offset": "0",
          "data-aos-delay": "600",
          "data-aos-duration": "1100",
          "data-aos-once": "true",
        })}
      />

      {toastVisible && (
        <div className="toast text-center">
          <p>
            Competition has not begun yet, check back soon or keep up with our
            socials for updates.
          </p>
        </div>
      )}

      <div className="mt-[22rem] h-72 relative z-1 clip-top-half">
        <img
          src="/Vector.svg"
          alt="gear"
          className="bg-transparent spinning-image2 align-center mt-[-24rem]"
          style={{
            maxWidth: "clamp(900px, 40vw + 3300px, 4900px)",
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
