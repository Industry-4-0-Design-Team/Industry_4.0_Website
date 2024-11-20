import '../Styles/Landing.css'

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center w-full h-fit">
            <div className="flex flex-col gap-2">
                <h1 className='w-full text-center text-7xl mt-16 text-primaryText font-black'>
                    INDUSTRY 4.
                    <img src="/Gears/yellow_gear_in_4.0.svg" className="spinning-image ml-1 w-20 h-20 inline-block relative -top-2" draggable="false"/>
                </h1>
                <h1 className="text-purple-200 font-bold text-4xl w-full text-right">GEAR UP TO GO BEYOND</h1>
                <div className="mt-4 flex gap-5 justify-end pb-12">
                    <button className="text-third font-bold bg-secondary px-4 py-1 rounded-full mr-2 text-lg w-40 h-14">SIGN UP</button>
                    <button className="text-secondary font-bold border border-secondary px-4 py-1 rounded-full text-lg w-40 h-14">SPONSORS</button>
                </div>
                <div className="mt-14 w-full h-72">
                    <img src="/Vector.png" alt="gear" className='absolute bg-transparent -z-10 spinning-image2 right-0' />
                    <img src="/Gradients.png" alt="gear" className='absolute -right-6 top-80 bg-transparent -z-20' />
                </div>
            </div>
        </div>
     );
}

export default LandingPage;