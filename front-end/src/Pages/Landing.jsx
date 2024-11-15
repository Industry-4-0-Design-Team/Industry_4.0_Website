const LandingPage = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <div>
                <h1 className='w-full text-center text-5xl mt-10 text-black font-black'>
                    INDUSTRY 4.
                    <img src="/yellow_gear_in_4.0.svg" className="ml-1 w-10 h-10 inline-block transform translate-y-[-4px]" draggable="false"/>
                </h1>
                <h1 className="text-black font-bold text-xl w-full text-right">GEAR UP TO GO BEYOND</h1>
                <div className="mt-4 text-right">
                    <button className="text-third font-bold bg-secondary px-4 py-1 rounded-full mr-2 text-sm">SIGN UP</button>
                    <button className="text-secondary font-bold border border-secondary px-4 py-1 rounded-full text-sm">SPONSORS</button>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;