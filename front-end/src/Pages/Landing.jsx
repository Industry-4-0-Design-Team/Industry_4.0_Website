import '../Styles/Landing.css'

const LandingPage = () => {
    return (
        <div className="flex flex-col bg-diamonds items-center w-full h-fit">
            <div className="flex flex-col gap-2">
                <h1 className='w-full text-center text-8xl mt-24 text-primaryText relative z-[10] font-900'>
                    INDUSTRY 4.
                    <img src="/Gears/yellow_gear_in_4.0.svg" className="spinning-image ml-1 w-20 h-20 inline-block relative -top-2" draggable="false" />
                </h1>
    <div className='mr-[44.75rem] relative z-[10]'>
                <h1 className="text-white relative z-[10] font-900 text-4xl w-full text-right">
                    GEAR UP TO GO BEYOND
                    </h1>
                <div className="mt-4 flex gap-5 justify-end ">
                    <button className="text-third font-900 bg-secondary px-4 py-1 rounded-full mr-2 text-lg w-40 h-14 transition-colors duration-300 hover:bg-[#9d904c]">
                        SIGN UP
                    </button>
                    <button className="text-secondary font-900 border border-secondary px-4 py-1 rounded-full text-lg w-40 h-14 transition-colors duration-300 hover:bg-yellow-300/20">
                        SPONSORS
                    </button>
                    </div>
                </div>
                <div className="mt-[18rem] h-72 relative">
                    <img
                        src="/Vector.svg"
                        alt="gear"
                        className="bg-transparent -z-[-1] spinning-image2 align-center mt-[-24rem] max-w-[3100px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;