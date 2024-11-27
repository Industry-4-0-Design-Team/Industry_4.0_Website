import "../Styles/Landing.css";
import Button from "../Components/Button";

const LandingPage = () => {
  return (
    <div id="landing" className="flex flex-col items-center w-full h-screen justify-center">
      {/* Main content container */}
      <div className="flex flex-col items-center custom-lg:mt-[380px] mt-[250px]">
        {/* Left side (Industry 4. and gear) */}
        <div className="flex items-center justify-center mt-16 w-full">
          <h1 className="text-center text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-8xl text-primaryText font-900">
            INDUSTRY 4.
            <img
              src="/Gears/yellow_gear_in_4.0.svg"
              className="spinning-image ml-1 w-20 h-20 inline-block relative -top-2"
              draggable="false"
            />
          </h1>
        </div>

        {/* Right side (Gear up to go beyond and buttons) */}
        <div className="flex justify-center md:justify-end w-full mt-3 md:mt-6 lg:ml-[5rem] z-20">
          <div className="text-center md:text-right lg:text-right lg:mr-10">
            <h1 className="text-[#EEE6FF] font-900 text-lg md:text-3xl lg:text-4xl lg:text-right">
              GEAR UP TO GO BEYOND
            </h1>
            <div className="mt-6 flex flex-col items-center md:flex-row gap-5 md:justify-end">
              <button className="text-black font-900 bg-secondary px-4 py-1 rounded-full text-md md:text-lg w-32 h-12 md:w-40 md:h-14 inline-flex items-center justify-center whitespace-nowrap transform transition-transform duration-200 hover:scale-110">
                  SIGN UP
              </button>
              <button className="buttonGlow text-secondary font-900 px-4 py-1 rounded-full text-sm md:text-lg w-32 h-12 md:w-40 md:h-14 transform transition-transform duration-200 hover:scale-110">
                SPONSORS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gear image at the bottom */}
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