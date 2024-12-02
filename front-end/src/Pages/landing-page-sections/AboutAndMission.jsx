/* eslint-disable react/no-unknown-property */
const AboutAndMission = () => {
  return (
    <div id="about" className="relative z-[10] w-full">
      <div className="flex mt-64 flex-col justify-center items-center">
        {/* About Section */}
        <div className="flex flex-col w-full items-center justify-center">
          <div
            className="w-full flex justify-center items-center text-center mb-4"
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <h1 className="neonText subtitle text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-8xl z-10 tracking-widest">
              WHO WE ARE
            </h1>
          </div>
          <p
            className="body px-8 md:px-8 lg:px-8 custom-lg:px-10 max-w-[1300px] text-center mt-12 z-10 w-full md:text-2xl lg:text-2xl"
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-once="true"
          >
            We are an organization committed to empowering students in
            Management Sciences by fostering a hands-on learning environment. 🧠✨
            Through  <span className="text-secondary font-bold">case competitions</span>, <span className="text-secondary font-bold">workshops</span>,
              and <span className="text-secondary font-bold">leadership events</span>, we provide
            real-world experiences that bridge the gap between theory and
            practice. We strive to create a learning environment where
            students gain early exposure
            to <span className="text-secondary font-bold">industry skills</span>, <span className="text-secondary font-bold">expert knowledge</span>
            , and <span className="text-secondary font-bold">valuable connections</span>. Through mentorship,
            career-focused workshops, and a supportive community, we
            prepare them to excel in the tech-driven future of Industry 4.0! 🚀
          </p>
        </div>
      </div>

      {/* Oscillating Gear */}
      <div className="flex justify-center ml-[8rem] mt-40">
        <img
          src="/Gears/MissionGear.svg"
          className="oscillate w-[150px] md:w-[320px] h-auto"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
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
