import '../Styles/Landing.css'; 
import Button from '../Components/Button';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center w-full h-screen justify-center">
            {/* Main content container */}
            <div className="flex flex-col items-center mt-[380px]">
                {/* Left side (Industry 4. and gear) */}
                <div className="flex items-center justify-center w-full">
                    <h1 className="text-center text-8xl text-primaryText font-900">
                        INDUSTRY 4.
                        <img
                            src="/Gears/yellow_gear_in_4.0.svg"
                            className="spinning-image ml-1 w-20 h-20 inline-block relative -top-2"
                            draggable="false"
                        />
                    </h1>
                </div>

                {/* Right side (Gear up to go beyond and buttons) */}
                <div className="flex justify-end w-full mt-6 ml-[5rem] z-20">
                    <div className="text-right mr-10">
                        <h1 className="text-[#EEE6FF] font-900 text-4xl">
                            GEAR UP TO GO BEYOND
                        </h1>
                        <div className="mt-6 flex gap-5 justify-end">
                            <Button text="SIGN UP" />
                            <button className="text-secondary font-900 border border-secondary px-4 py-1 rounded-full text-lg w-40 h-14 transition-colors duration-300 hover:bg-yellow-300/20">
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
                        maxWidth: 'clamp(900px, 40vw + 3300px, 4900px)',
                    }}
                />
            </div>
        </div>
    );
};

export default LandingPage;
