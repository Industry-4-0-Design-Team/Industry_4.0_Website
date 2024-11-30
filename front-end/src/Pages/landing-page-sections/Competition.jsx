import Button from "../../Components/Button";

const CompetitionPage = () => {
  return (
    <div id="competition" className="h-full relative mt-52">
      <div className="relative z-10 flex justify-center items-center mx-8 md:mx-[128px]">
        <div className="flex flex-col items-center custom-lg:flex-row">
          <div className="flex flex-col items-center justify-center ml-auto">
            {/* Competition Header */}
            <div
              className="flex items-center custom-lg:justify-start"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <h1 className="neonText subtitle text-4xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-8xl z-10 tracking-widest">
                COMPETITION
              </h1>
            </div>

            {/* Subtitle Section */}
            <h2
              className="body text px-4 sm:px-8 lg:px-10 custom-lg:px-20 text-center mt-8 z-10 max-w-[550px] custom-lg:max-w-[850px]"
              data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Our high school-level data-driven competitions are designed to inspire and 
              challenge students in a dynamic, day-long event. Participants tackle real-world problems while 
              developing critical skills in analytical thinking, time management, and optimization.
              <br/><br/>
              These challenges push students to apply engineering principles, master problem-solving, 
              and excel under pressure—preparing them to thrive in an ever-evolving world.
            </h2>

            {/* Statistics Section */}
            <div className="w-full text-center text-white my-16">
              <ul className="flex flex-col md:flex-row w-full text-center items-center justify-around gap-8 md:gap-20">
                <li>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="30"
                    data-aos-delay="500"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <h1 className="purpleNeonText font-black text-3xl sm:text-4xl lg:text-6xl">1000+</h1>
                    <h3 className="text-sm sm:text-lg lg:text-2xl text-[#d3d3d3]">STUDENTS</h3>
                  </div>
                </li>
                <li>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="30"
                    data-aos-delay="700"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <h1 className="purpleNeonText font-black text-3xl sm:text-4xl lg:text-6xl">50+</h1>
                    <h3 className="text-sm sm:text-lg lg:text-2xl text-[#d3d3d3]">SCHOOLS</h3>
                  </div>
                </li>
                <li>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="30"
                    data-aos-delay="900"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <h1 className="purpleNeonText font-black text-3xl sm:text-4xl lg:text-6xl">60+</h1>
                    <h3 className="text-sm sm:text-lg lg:text-2xl text-[#d3d3d3]">ORGANIZERS</h3>
                  </div>
                </li>
              </ul>
            </div>

            {/* Button Section */}
            <div
              className="mt-6 text-center"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Button text="SIGN UP" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;
