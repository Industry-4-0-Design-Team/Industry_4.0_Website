import { useState, useEffect } from "react";
import Story from "../../Components/Story";

const StoriesPage = () => {
  const stories = [
    {
      name: "Adriel De Vera",
      job: "Former President, Inspiring Leader, Visionary in Software Architecture",
      quote: `Adriel De Vera, former president, drove innovation and championed user-centric software solutions, leaving an inspiring legacy. 
      
      A recipient of the Engineering Society Leadership Excellence Award, he recently shared insights on leadership and technology. Adriel recently shared his expertise on leadership and technology at our panel event. Now in San Francisco, Adriel continues to embody bold ambition and innovation.`,
      headshot: "/story-headshots/Adriel.svg",
    },
    {
      name: "Rodrigo  Tiscareno",
      job: "Former Director, Data Engineering Enthusiast, and Varsity Athlete",
      quote: `Rodrigo Tiscareno, a leader in data-driven innovation, connected 100+ students with cutting-edge tech as an Industry 4.0 director. 
        
        A Waterloo Management Engineering student, he excelled at Balyasny Asset Management, building data pipelines and supporting equities strategies with Python, AWS, and SQL. He also led the Midnight Sun Solar Team, contributed to the Data Science Club, and excelled as a varsity soccer player.`,
      headshot: "/story-headshots/Rodrigo.svg",
    },
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState({});

  useEffect(() => {
    const preloadImages = async () => {
      const imageCache = {};
      const loadPromises = [];

      const createImagePromise = (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            imageCache[src] = img.src;
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            resolve();
          };
        });

      [
        ...stories.map((story) => story.headshot),
        "/arrows/LeftArrow.svg",
        "/arrows/RightArrow.svg",
      ].forEach((src) => loadPromises.push(createImagePromise(src)));

      await Promise.all(loadPromises);
      setPreloadedImages(imageCache);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  const handleTransition = (newIndex) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentStoryIndex(newIndex);
      setIsVisible(true);
    }, 500);
  };

  const handleNext = () => {
    const newIndex = (currentStoryIndex + 1) % stories.length;
    handleTransition(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentStoryIndex - 1 + stories.length) % stories.length;
    handleTransition(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 12000);
    return () => clearInterval(interval);
  }, [currentStoryIndex]);

  if (!imagesLoaded) {
    return (
      <div className="h-full flex justify-center items-center">
        <div className="animate-pulse">Loading stories...</div>
      </div>
    );
  }

  return (
    <div
      id="stories"
      className="h-full relative mb-[150px] px-8 custom-lg:px-16"
    >
      <div className="relative z-10 flex flex-col items-center custom-lg:flex-row justify-center mt-44 max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col items-center justify-center custom-lg:flex-row custom-lg:items-start w-full">
          <div className="flex flex-col items-center justify-center mt-6 custom-lg:ml-6 custom-lg:mt-0 w-full">
            {/* Heading */}
            <h1
              className="neonText subtitle text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-8xl z-10 tracking-widest"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              STORIES
            </h1>

            {/* Description */}
            <h2
              className="body text-[18px] custom-lg:text-[24px] text-center mt-4 max-w-[750px] custom-lg:max-w-[900px]"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              Hear about the success stories from past Industry 4.0 members and
              participants in our annual I4 competition. 🏆
            </h2>

            {/* Story Component */}
            <div
              className="mt-16 max-w-full w-full"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <Story
                {...stories[currentStoryIndex]}
                isVisible={isVisible}
                preloadedImages={preloadedImages}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="custom-lg:mt-[4rem] mt-12 flex gap-4 justify-center z-[1] w-full">
              <button
                onClick={handlePrevious}
                className="buttonGlow2 bg-[#6F52AF] p-2 rounded-xl flex justify-center items-center"
                data-aos="zoom-out-right"
              >
                <img
                  src={
                    preloadedImages["/arrows/LeftArrow.svg"] ||
                    "/arrows/LeftArrow.svg"
                  }
                  className="w-[30px] h-auto"
                  draggable="false"
                  alt="Left Arrow"
                />
              </button>
              <button
                onClick={handleNext}
                className="buttonGlow2 bg-[#6F52AF] p-2 rounded-xl flex justify-center items-center"
                data-aos="zoom-out-left"
              >
                <img
                  src={
                    preloadedImages["/arrows/RightArrow.svg"] ||
                    "/arrows/RightArrow.svg"
                  }
                  className="w-[30px] h-[30px]"
                  draggable="false"
                  alt="Right Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
