const AboutAndMission = () => {
    return (
      <div id="about" className="relative z-[10] w-full">
        <div className="flex mt-52 flex-col justify-center items-center gap-10">
          {/* About Section */}
          <div
            className="flex flex-col w-full items-center justify-center">
            <div
              className="w-full flex justify-center items-center text-center mb-8"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h1 className="subtitle text-9xl z-10 tracking-widest">
                AB
              </h1>
              <img
                src="/Gears/yellow_gear_in_4.0.svg"
                className="ml-1 mr-3 mt-[4.1rem] w-24 h-24 inline-block relative -top-8 clip-top-half"
                draggable="false"
              />
              <h1 className="subtitle text-9xl  z-10 tracking-widest">
                UT US
              </h1>
            </div>
            <p className="body px-20 text-left custom-lg:text-[24px] md:text-[20px] mt-4  mb-8 z-10 w-full"
               data-aos="zoom-in"
               data-aos-offset="50"
               data-aos-delay="300"
               data-aos-duration="700"
               data-aos-once="true">
              We are an organization committed to empowering students in
              Management Sciences by fostering a hands-on learning environment.
              Through case studies, workshops, and leadership events, we provide
              real-world experiences that bridge the gap between theory and
              practice. We strive to create a learning environment where students gain early
              exposure to industry skills, expert knowledge, and valuable
              connections. Through mentorship, career-focused workshops, and a
              supportive community, we prepare them to excel in the tech-driven
              future of Industry 4.0.
            </p>
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
              <div data-aos="fade-up"
                   data-aos-offset="30"
                   data-aos-delay="500"
                   data-aos-duration="700"
                   data-aos-once="true">
                <h1 className="font-black text-5xl">500+</h1>
                <h3>COMPETITORS</h3>
              </div>
            </li>
            <li>
              <div data-aos="fade-up"
                   data-aos-offset="30"
                   data-aos-delay="700"
                   data-aos-duration="700"
                   data-aos-once="true">
                <h1 className="font-black text-5xl">25+</h1>
                <h3>EVENTS</h3>
              </div>
            </li>
            <li>
              <div data-aos="fade-up"
                   data-aos-offset="30"
                   data-aos-delay="900"
                   data-aos-duration="700"
                   data-aos-once="true">
                <h1 className="font-black text-5xl">50+</h1>
                <h3>ORGANIZERS</h3>
              </div>
            </li>
          </ul>
        </div>
  
        {/* Oscillating Gear */}
        <div className="flex justify-center ml-[8rem] mt-40 mb-32">
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
  