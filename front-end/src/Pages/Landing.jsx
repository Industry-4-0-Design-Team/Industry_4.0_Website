import "../Styles/Landing.css";
import Button from "../Components/Button";

const LandingPage = () => {
  return (
    <div id="landing" className="">
      <div className="flex flex-col items-center w-full h-lvh justify-center">
        {/* Main content container */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center ">
            {/* Left side (Industry 4. and gear) */}
            <div className="sm:flex items-center justify-center w-full">
              <h1 className="text-center text-8xl text-primaryText font-900 small:text-5xl small:font-600">
                INDUSTRY 4.
                <img
                  src="/Gears/yellow_gear_in_4.0.svg"
                  className="spinning-image ml-1 w-20 h-20 inline-block relative -top-2 small:w-12 small:h-12"
                  draggable="false"
                />
              </h1>
            </div>

            {/* Right side (Gear up to go beyond and buttons) */}
            <div className="flex justify-end w-full custom-lg:mt-6 custom-lg:ml-[5rem] z-20 small:ml-0 small:flex-col small:items-center small:text-center">
              <div className="text-right mr-10 small:mr-0">
                <h1 className="text-[#EEE6FF] font-900 text-4xl small:text-2xl small:font-600">
                  GEAR UP TO GO BEYOND
                </h1>
                <div className="mt-6 flex flex-col align-center items-center gap-5 justify-center sm:flex-row sm:justify-end">
                  <Button text="SIGN UP" />
                  <button className="text-secondary font-900 border border-secondary px-4 py-1 rounded-full text-lg w-40 h-14 transition-colors duration-300 hover:bg-yellow-300/20">
                    SPONSORS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
