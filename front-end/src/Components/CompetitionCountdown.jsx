import React, { useState, useEffect } from "react";

const CountdownSection = () => {
  const targetDate = new Date("2025-03-08T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="mt-14 w-full flex flex-col lg:flex-row justify-between items-center md:justify-center lg:justify-center gap-6"
      data-aos="fade-up"
      data-aos-offset="30"
      data-aos-delay="1000"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <img
        src="/Gears/clockWStars.png"
        alt="gear"
        className="w-52 md:w-64 lg:w-80 h-auto"
      />
      <div className="flex flex-col gap-0">
        <h2 className="font-black tracking-widest text-center text-3xl lg:text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-white via-yellow-100 to-secondary">
          {`${String(timeLeft.months).padStart(2, "0")}:${String(
            timeLeft.days
          ).padStart(2, "0")}:${String(timeLeft.hours).padStart(2, "0")}:${String(
            timeLeft.minutes
          ).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`}
        </h2>
        <div className="flex flex-row justify-between">
          <h2 className="font-black tracking-widest text-xs md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">
            MTHS
          </h2>
          <h2 className="font-black tracking-widest text-xs md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">
            DAYS
          </h2>
          <h2 className="font-black tracking-widest text-xs md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">
            HRS
          </h2>
          <h2 className="font-black tracking-widest text-xs md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">
            MINS
          </h2>
          <h2 className="font-black tracking-widest text-xs md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-t from-third via-purple-200 to-white">
            SECS
          </h2>
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
  );
};

export default CountdownSection;
