import Button from "../../Components/Button";

const CompetitionPage = () => {


  return (
    <div id="competition" className="h-full mt-52 relative z-10 flex justify-center items-center mx-[128px] custom-lg:flex-row">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Competition Header */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div
              className="flex items-center custom-lg:justify-start"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <h1 className="neonText subtitle text-4xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl z-10 tracking-widest">
                COMPETITION
              </h1>
            </div>

            {/* Subtitle Section */}
            <h2
              className="body px-2 md:px-4 lg:px-6 custom-lg:px-10 text-center mt-12 z-10 w-full md:text-2xl lg:text-2xl"
              data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="700"
              data-aos-once="true"
            >
              The <span className="text-secondary font-bold">I4 Challenge</span> is a high school level data-driven competition run by students at the University of Waterloo.
              The name comes from what is known as the fourth industrial revolution, involving the computerization of manufacturing and increase in big data analytics.
              <br />
              The competition is a one day long event, where you will be tested on your analytical, time mangement, and optimization skills, through which you will learn 
              how to work on engineering cases, manage your time well under pressure and create quality solutions using engineering principles. We take <span className="text-secondary font-bold">teams of 3-5</span> students 
              through a manufacturing process, analyzing a section of the production line. Teams will be provided information from the line and will be asked 
              to use an engineering approach to analyze the process, layout, and efficiency. They will then prepare a short report with their analysis for how the 
              plant management can be improved.
            </h2>
          </div>

          {/*Statistics under about us page */}
          <div className="text-center text-white mt-14">
            <ul className="flex flex-col md:flex-row w-full text-center items-center justify-around gap-10 md:gap-28 lg:gap-64">
              <li>
                <div data-aos="fade-up"
                    data-aos-offset="30"
                    data-aos-delay="500"
                    data-aos-duration="700"
                    data-aos-once="true">
                  <h1 className="purpleNeonText font-black text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">1000+</h1>
                  <h3 className="text-sm xs:text-lg sm:text-lg lg:text-2xl text-[#d3d3d3]">STUDENTS</h3>
                </div>
              </li>
              <li>
                <div data-aos="fade-up"
                    data-aos-offset="30"
                    data-aos-delay="700"
                    data-aos-duration="700"
                    data-aos-once="true">
                  <h1 className="purpleNeonText font-black text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">50+</h1>
                  <h3 className="text-sm xs:text-lg sm:text-lg lg:text-2xl text-[#d3d3d3]">SCHOOLS</h3>
                </div>
              </li>
              <li>
                <div data-aos="fade-up"
                    data-aos-offset="30"
                    data-aos-delay="900"
                    data-aos-duration="700"
                    data-aos-once="true">
                  <h1 className="purpleNeonText font-black text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">75+</h1>
                  <h3 className="text-sm xs:text-lg sm:text-lg lg:text-2xl text-[#d3d3d3]">ALUMNI</h3>
                </div>
              </li>
            </ul>
          </div>


          <div className="mt-14 w-full flex flex-col lg:flex-row justify-between items-center md:justify-center lg:justify-center gap-6"
               data-aos="fade-up"
               data-aos-offset="30"
               data-aos-delay="1000"
               data-aos-duration="700"
               data-aos-once="true">
              <img src="/clockWStars.png" 
                      alt="gear" 
                      className="w-52 md:w-64 lg:w-80 h-auto"/>
            <div className="flex flex-col gap-0">
              <h2 className="font-black tracking-widest text-center text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-white via-yellow-100 to-secondary">01:26:08:38:20</h2>
              <div className="flex flex-row justify-between">
                <h2 className="font-black tracking-widest text-sm md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">MTHS</h2>
                <h2 className="font-black tracking-widest text-sm md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">DAYS</h2>
                <h2 className="font-black tracking-widest text-sm md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">HRS</h2>
                <h2 className="font-black tracking-widest text-sm md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">MINS</h2>
                <h2 className="font-black tracking-widest text-sm md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">SECS</h2>
              </div>
              <div
                className="mt-6 text-center"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <button className="buttonDisabled font-900 px-4 py-1 rounded-full text-md md:text-lg w-auto min-w-[10rem] h-12 md:w-auto md:h-14 inline-flex items-center justify-center whitespace-nowrap transform transition-transform duration-200">            
                  SIGN UP
                </button>
              </div>
            </div>

          </div>

        </div>
    </div>
  );
};

export default CompetitionPage;
