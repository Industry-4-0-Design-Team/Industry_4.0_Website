const AboutPage = () => {
    return (
        <div id="about" className="absolute relative z-[10]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <h1 className='subtitle  text-[24px] custom-lg:text-[54px]  sm:text-4xl text-center text-3xl mt-10 z-10'>
                        Ab
                    </h1>
                    <img
                        src="/Gears/yellow_gear_in_4.0.svg"
                        className="ml-1 mr-1 mt-[4.1rem] w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block relative -top-2 clip-top-half" // Apply the clip-top-half class here too
                        draggable="false"
                    />
                    <h1 className='subtitle  text-[24px] custom-lg:text-[54px]  sm:text-4xl text-center text-3xl mt-10 z-10'>
                        ut Us
                    </h1>
                </div>
                <h2 className="body px-8 text-center custom-lg:text-[24px] md:text-[20px] mt-4 z-10 max-w-[700px]" data-aos='fade-up' data-aos-duration='900'>
                    We are an organization committed to empowering students in
                    Management Sciences by fostering a hands-on learning environment.
                    Through case studies, workshops, and leadership events, we provide real-world
                    experiences that bridge the gap between theory and practice.
                </h2>
            </div>
        </div>
    );
};

export default AboutPage;
