const AboutPage = () => {
    return (
        <div className="bg-diamonds absolute relative z-[10]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center mt-[-14rem]">
                    <h1 className='subtitle text-center text-3xl mt-10 z-10'>
                        Ab
                    </h1>
                    <img src="/Gears/yellow_gear_in_4.0.svg" className="ml-1 mr-1 mt-[4.1rem] w-8 h-8 inline-block relative -top-2" draggable="false" />
                    <h1 className='subtitle text-center text-3xl mt-10 z-10'>
                        ut Us
                    </h1>
                </div>
                <h2 className="body text-center text-3xl mt-2 z-10 max-w-[700px]">
                    We are an organization committed to empowering students in
                    Management Sciences by fostering a hands-on learning environment.
                    Through case studies, workshops, and leadership events, we provide real-world
                    experiences that bridge the gap between theory and practice.
                </h2>
            </div>
        </div>
    );
}

export default AboutPage;