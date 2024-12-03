/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import HoveredText from "../../Components/HoveredTeamText";
import Marquee from "react-fast-marquee";
import { debounce } from "lodash";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const TeamPage = ({ teamData }) => {
  const [hoveredName, setHoveredName] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      // Disable AOS animations for small screens
      const elementsWithAOS = document.querySelectorAll("[data-aos]");
      elementsWithAOS.forEach((element) => {
        element.removeAttribute("data-aos");
      });
    }
  }, []);
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Fade-in duration
      once: true, // Only trigger once per page load
    });

    // Track when all images have loaded
    const images = Object.keys(teamData).map((name) => {
      return new Image();
    });

    // Update state once all images are loaded
    Promise.all(
      images.map((img, index) => {
        img.src = `/team-headshots/${Object.keys(teamData)[index]}.webp`;
        return new Promise((resolve) => {
          img.onload = resolve;
        });
      })
    ).then(() => {
      setImagesLoaded(true); // Once all images are loaded, trigger fade-in
    });

    // Cleanup AOS initialization
    return () => {
      AOS.refresh();
    };
  }, [teamData]);

  const handleMouseEnter = debounce((name) => setHoveredName(name), 100);
  const handleMouseLeave = debounce(() => setHoveredName(null), 100);

  return (
    <div className="container mx-auto px-4 mt-[10rem] mb-[4rem]">
      <div className="flex items-center justify-between space-x-8 flex-col custom-lg:flex-row">
        <div className="flex-shrink-0 w-[328px] relative text-center custom-lg:text-left">
          <HoveredText
            name={hoveredName}
            jobPosition={hoveredName ? teamData[hoveredName].jobPosition : null}
          />
        </div>
        <div
          className={`flex-grow relative overflow-hidden mt-12 custom-lg:mt-0 ${
            imagesLoaded
              ? "opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          }`}
          data-aos="zoom-in"
        >
          <div
            className="absolute inset-y-0 left-0 w-10 bg-[#181818] z-10 pointer-events-none"
            style={{
              maskImage: "linear-gradient(to right, black, transparent)",
              WebkitMaskImage: "linear-gradient(to right, black, transparent)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-10 bg-[#181818] z-10 pointer-events-none"
            style={{
              maskImage: "linear-gradient(to left, black, transparent)",
              WebkitMaskImage: "linear-gradient(to left, black, transparent)",
            }}
          />
          <Marquee speed={90} pauseOnHover gradient={false}>
            {Object.keys(teamData).map((name, index) => (
              <div
                key={index}
                className="relative group mx-2"
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={`/team-headshots/${name}.webp`}
                  className="rounded-full object-cover w-16 h-16"
                  alt={`${name} headshot`}
                  draggable="false"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
