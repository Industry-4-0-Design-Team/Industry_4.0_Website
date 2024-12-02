import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';

const alumniNetworkImages = [
  "amazon.svg",
  "blackberry.svg",
  "CapitalOne.svg",
  "deloitte.svg",
  "microsoft.svg",
  "rbc.svg",
  "rogers.svg",
  "td-bank.svg",
  "telus.svg",
  "tesla.svg",
  "toyota-alumni.svg",
  "ttc.svg"
];

const AlumniNetwork = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Fade-in duration
      once: true, // Only trigger once per page load
    });

    // Track when all images have loaded
    const images = alumniNetworkImages.map((image) => new Image());

    Promise.all(
      images.map((img, index) => {
        img.src = `/Alumni-Network/${alumniNetworkImages[index]}`;
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
  }, []);

  return (
    <div className="container max-w-[1400px] mx-auto px-8 md:px-14 custom-lg:mt-[5rem] md:mt-[-5rem] mt-[5rem] mb-[5rem] custom-lg:mb-[15rem]">
      <div>
        {/* Staggered text animation */}
        <h1
          className="alumni-network-heading text-3xl"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Alumni Network
        </h1>
        <h2
          className="body py-4 mb-12 mt-0 z-10 w-full md:text-2xl lg:text-2x"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          I4 alumni have landed positions at top companies such as:
        </h2>
      </div>
      <div
        className={`relative overflow-hidden ${imagesLoaded ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}`}
        data-aos="zoom-in"
      >
        {/* Left gradient overlay */}
        <div
          className="absolute inset-y-0 left-0 w-10 bg-[#181818] z-10 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
        {/* Right gradient overlay */}
        <div
         className="absolute inset-y-0 -right-1 w-10 bg-[#181818] z-10 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
        {/* Marquee */}
        <Marquee speed={90} gradient={false}>
          {alumniNetworkImages.map((image, index) => (
            <div key={index} className="mx-4">
              <img
                src={`/Alumni-Network/${image}`}
                className="object-contain h-16"
                alt={`${image} logo`}
                draggable="false"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AlumniNetwork;
