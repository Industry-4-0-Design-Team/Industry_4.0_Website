import Button from "../../Components/Button";

const CompetitionPage = () => {
  return (
    <div id="competition" className="h-full mt-[-17rem] mb-[10rem] relative">
      <div className="relative z-10 flex justify-center items-center mx-[128px]">
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
              <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center text-3xl mt-10 z-10">
                Compeiti
              </h1>
              <img
                src="/Gears/yellow_gear_in_4.0.svg"
                className="ml-1 mr-1 mt-[4.1rem] w-6 h-6 custom-lg:w-8 custom-lg:h-8 inline-block relative -top-2"
                draggable="false"
              />
              <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center text-3xl mt-10 z-10">
                n
              </h1>
            </div>

            {/* Subtitle Section */}
            <h2
              className="body custom-lg:text-[24px] md:text-[20px] text-center mt-4 z-10 max-w-[550px] custom-lg:max-w-[850px]"
              data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Lorem ipsum dolor sit amet consectetur. A phasellus quis aliquet
              et. Eu elit convallis nec massa mus fringilla viverra. Duis
              egestas sed felis risus interdum neque ut massa. Amet a cursus et
              et volutpat nascetur. Sed non fringilla nec enim lobortis.
              Tristique rhoncus.
            </h2>

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
