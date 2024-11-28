import { useState, useEffect } from "react";
import Story from "../../Components/Story";

const StoriesPage = () => {
  const stories = [
    {
      name: "Martin Luther King",
      job: "Freedom Fighter @ Bangladesh",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Venenatis tincidunt donec in dolor. In augue purus ac dignissim pellentesque porttitor. Nec ac nisl est mus hac. Erat aliquet at euismod libero ultricies vitae. Vulputate ac bibendum orci nunc feugiat.",
      headshot: "/story-headshots/TejasSample.jpg",
    },
    {
      name: "Rosa Parks",
      job: "Data Scientist @ Organization",
      quote:
        "Aliquam euismod nunc in elit tincidunt tristique. Praesent ut dui nec nisi vehicula porttitor. Suspendisse faucibus velit sit amet dignissim. Cras convallis tortor non sapien convallis tincidunt.",
      headshot: "/story-headshots/JinaSample.jpg",
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

      // Helper function to create image loading promise
      const createImagePromise = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            imageCache[src] = img.src;
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            imageCache[src] = src; // Fallback to original src
            resolve(); // Resolve anyway to prevent blocking
          };
        });
      };

      // Preload story headshots
      stories.forEach((story) => {
        loadPromises.push(createImagePromise(story.headshot));
      });

      // Preload static images
      const staticImages = [
        "/Gears/StoriesGear.svg",
        "/Gears/yellow_gear_in_4.0.svg",
        "/arrows/LeftArrow.svg",
        "/arrows/RightArrow.svg",
      ];

      staticImages.forEach((src) => {
        loadPromises.push(createImagePromise(src));
      });

      try {
        await Promise.all(loadPromises);
        setPreloadedImages(imageCache);
      } catch (error) {
        console.error("Error preloading images:", error);
      } finally {
        setImagesLoaded(true); // Always set loaded to true to prevent infinite loading
      }
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

  // Automatically transition every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 4 seconds

    // Cleanup interval on component unmount
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
    <div id="stories" className="h-full relative mb-[500px]">
      <div className="relative z-10 flex flex-col items-center custom-lg:flex-row justify-center pt-32 mx-[128px]">
        <div className="flex flex-col items-center justify-center custom-lg:flex-row custom-lg:items-start">
          {/* Text */}
          <div className="flex flex-col items-center justify-center mt-6 custom-lg:ml-6 custom-lg:mt-0">
            <h1 className="subtitle text-[24px] custom-lg:text-[54px] md:text-6xl text-center mt-10 z-10">
              St
              <img
                src={
                  preloadedImages["/Gears/yellow_gear_in_4.0.svg"] ||
                  "/Gears/yellow_gear_in_4.0.svg"
                }
                className="inline-block w-6 h-6 custom-lg:w-8 custom-lg:h-8 mx-1"
                draggable="false"
              />
              ries
            </h1>
            <h2
              className="body text-[18px] custom-lg:text-[24px] text-center mt-4 max-w-[550px] custom-lg:max-w-[850px]"
              data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="700"
              data-aos-once="false"
            >
              Hear about the success stories from past Industry 4.0 members and
              participants in our annual I4 competition.
            </h2>
            {/* Story Component */}
            <div className="mt-6 w-full">
              <Story
                {...stories[currentStoryIndex]}
                isVisible={isVisible}
                preloadedImages={preloadedImages}
              />
            </div>
            {/* Navigation Buttons */}
            <div className="custom-lg:mt-[-9rem] mt-12 custom-lg:ml-[63rem] flex gap-4 justify-center custom-lg:justify-start z-[1]">
              <button
                onClick={handlePrevious}
                className="buttonGlow bg-[#6F52AF] p-2 rounded-[10px] flex justify-center items-center"
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
                className="buttonGlow bg-[#6F52AF] p-2 rounded-[10px] flex justify-center items-center"
              >
                <img
                  src={
                    preloadedImages["/arrows/RightArrow.svg"] ||
                    "/arrows/RightArrow.svg"
                  }
                  className="w-[30px] h-auto"
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
