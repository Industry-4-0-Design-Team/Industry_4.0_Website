import React from "react";
import CountdownSection from "../../Components/CompetitionCountdown";

const CompetitionPage = () => {
  return (
    <div
      id="competition"
      className="h-full mt-52 relative z-10 flex justify-center items-center mx-[128px] custom-lg:flex-row"
    >
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
            The <span className="text-secondary font-bold">I4 Challenge</span> is
            a high school-level data-driven competition organized by students at
            the University of Waterloo. Named after the fourth industrial
            revolution, it focuses on the{" "}
            <span className="text-secondary font-bold">
              computerization of manufacturing
            </span>{" "}
            and{" "}
            <span className="text-secondary font-bold">
              big data analytics
            </span>
            .
            <br />
            <br />
            In this one-day event, participants will enhance their analytical,
            time management, and optimization skills. Working in{" "}
            <span className="text-secondary font-bold">teams of 3-5</span>,
            students will analyze a manufacturing process, evaluate its layout
            and efficiency, and apply engineering principles to propose
            improvements. Teams will present their findings in a concise report
            for plant management.
          </h2>
        </div>

        {/* Countdown Section */}
        <CountdownSection />
      </div>
    </div>
  );
};

export default CompetitionPage;
