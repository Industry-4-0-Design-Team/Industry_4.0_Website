// import Button from "../../Components/Button";

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
            className="body px-2 md:px-4 lg:px-6 custom-lg:px-10 text-center mt-4 z-10 w-full md:text-2xl lg:text-2xl"
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-delay="150"
            data-aos-duration="700"
            data-aos-once="true"
          >
            The <span className="text-secondary font-bold">I4 Challenge</span> is a high school-level data-driven competition organized by students at the University of Waterloo.
            Named after the fourth industrial revolution, it focuses on the <span className="text-secondary font-bold">computerization of manufacturing</span> and <span className="text-secondary font-bold">big data analytics</span>.
            <br /><br />
            In this one-day event, participants will enhance their analytical, time management, and optimization skills.
            Working in <span className="text-secondary font-bold">teams of 3-5</span>, students will analyze a manufacturing process, evaluate its layout and efficiency, and 
            apply engineering principles to propose improvements. Teams will present their findings in a concise report for plant management.
          </h2>
        </div>

          <div className="mt-14 w-full flex flex-col lg:flex-row justify-between items-center md:justify-center lg:justify-center gap-6"
               data-aos="fade-up"
               data-aos-offset="30"
               data-aos-delay="1000"
               data-aos-duration="700"
               data-aos-once="true">
              <img src="/Gears/clockWStars.png"
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
