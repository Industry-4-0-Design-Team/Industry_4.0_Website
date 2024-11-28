const AboutAndMission = () => {
    return (
      <div id="about" className="relative z-[10]">
        <div className="flex mt-48 flex-col custom-lg:flex-row justify-between items-center custom-lg:items-start gap-8">
          {/* About Section */}
          <div
            className="flex flex-col custom-lg:ml-[8rem] items-center custom-lg:items-start"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div
              className="flex items-center ml-[2rem] mt-[5rem] custom-lg:mt-[3rem]"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h1 className="subtitle text-[24px] custom-lg:text-[54px] sm:text-4xl text-center custom-lg:text-left mt-10 z-10">
                Ab
              </h1>
              <img
                src="/Gears/yellow_gear_in_4.0.svg"
                className="ml-1 mr-1 mt-[4.1rem] w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block relative -top-2 clip-top-half"
                draggable="false"
              />
              <h1 className="subtitle text-[24px] custom-lg:text-[54px] sm:text-4xl text-center custom-lg:text-left mt-10 z-10">
                ut Us
              </h1>
            </div>
            <h2
              className="body px-8 text-center custom-lg:text-left custom-lg:text-[24px] md:text-[20px] mt-4 z-10 max-w-[800px]"
            >
              We are an organization committed to empowering students in
              Management Sciences by fostering a hands-on learning environment.
              Through case studies, workshops, and leadership events, we provide
              real-world experiences that bridge the gap between theory and
              practice. We strive to create a learning environment where students gain early
              exposure to industry skills, expert knowledge, and valuable
              connections. Through mentorship, career-focused workshops, and a
              supportive community, we prepare them to excel in the tech-driven
              future of Industry 4.0.
            </h2>
          </div>
  
          {/* Mission Section */}
          {/*
          <div
            className="flex flex-col mt-10 custom-lg:mr-[10rem] items-center custom-lg:items-end"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div
              className="flex items-center custom-lg:justify-end"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="300"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h1 className="subtitle text-[24px] custom-lg:text-[54px] sm:text-4xl text-center custom-lg:text-right mt-10 z-10 inline-block subtitle-responsive">
                Our Missi
                <img
                  src="/Gears/yellow_gear_in_4.0.svg"
                  className="w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block align-middle mx-1"
                  draggable="false"
                />
                n
              </h1>
            </div>
            <h2
              className="body custom-lg:text-[24px] md:text-[20px] text-center custom-lg:text-right text-xl mt-4 z-10 max-w-[720px] body-responsive"
            >
              We strive to create a learning environment where students gain early
              exposure to industry skills, expert knowledge, and valuable
              connections. Through mentorship, career-focused workshops, and a
              supportive community, we prepare them to excel in the tech-driven
              future of Industry 4.0.
            </h2>
          </div>
*/}
        </div>
        {/*Statistics under about us page */}
        <div className="w-full text-center mt-14 text-white">
          <ul className="flex w-full text-center items-center justify-around">
            <li>
              <div>
                <h1 className="font-black text-5xl">500+</h1>
                <h3>COMPETITORS</h3>
              </div>
            </li>
            <li>
              <div>
                <h1 className="font-black text-5xl">25+</h1>
                <h3>EVENTS</h3>
              </div>
            </li>
            <li>
              <div>
                <h1 className="font-black text-5xl">50+</h1>
                <h3>ORGANIZERS</h3>
              </div>
            </li>
          </ul>
        </div>
  
        {/* Oscillating Gear */}
        <div className="flex justify-center ml-[8rem] mt-24 mb-32">
          <img
            src="/Gears/MissionGear.svg"
            className="oscillate w-[320px] h-auto"
            draggable="false"
          />
        </div>
  
        {/* Responsive Layout */}
        <style jsx>{`
          @media (max-width: 1024px) {
            #about {
              text-align: center;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default AboutAndMission;
  