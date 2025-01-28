/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Button from "../Components/Button";

const CountdownSection = () => {
  const targetDate = new Date("2025-03-08T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
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
          ).padStart(
            2,
            "0"
          )}:${String(timeLeft.hours).padStart(2, "0")}:${String(
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
        <div className="custom-lg:mt-[4rem] mt-12 flex gap-8 justify-center z-[1] w-full">
          <a
            data-aos="fade-up"
            className="mt-2"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZNLAafZOhM9HAt3rDsPu88LIOI5Q24T5M9d_sfKqxToWYGg/viewform?usp=sharing"
            target="_blank"
          >
            <Button text="High School Sign Up" />
          </a>
          <a
            data-aos="fade-up"
            className="mt-2"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFWQfGcwmdqer-224ajgOM-uI07QgKttdFRtfy60_ruzpWbQ/viewform?usp=sf_link"
            target="_blank"
          >
            <Button text="University Sign Up" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
