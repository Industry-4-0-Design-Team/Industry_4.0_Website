import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Toggle the menu open or closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.matchMedia("(min-width: 1200px)").matches
        ? 50
        : Infinity;

      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the section with the specified ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    // Define offsets for specific sections
    const offsets = {
      landing: 90,
      about: 80, // Custom offset for "about" section
      events: 140, // Custom offset for "events" section
      sponsors: 140, // Custom offset for "sponsors" section
      stories: 70, // Custom offset for "stories" section
      team: 100, // Custom offset for "team" section
      competition: 90
    };

    if (section) {
      const offsetTop = section.offsetTop - (offsets[id] || 100); // Default to 100 if no specific offset is defined
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`w-full flex items-center py-4 px-16 text-primaryText gap-0 font-medium tracking-wide text-sm z-30 ${isScrolled ? "fixed top-0 backdrop-blur-lg" : "fixed"
        } transition-all duration-500`}
      data-aos="fade-down"
      data-aos-offset="500"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-once="true"
    >
      {/* Logo */}
      <div className="flex items-center pl-2 mr-14">
        <button onClick={() => scrollToSection("landing")}>
          <img
            src="/Gears/I4_Gear_Logo.png"
            alt="I4 Logo"
            className="w-[40px] h-[40px]"
            draggable="false"
          />
        </button>
      </div>

      <div className="navbar-buttons hidden custom-lg:flex gap-7 justify-start items-center flex-grow">
        {(isScrolled ? ["ABOUT", "EVENTS", "SPONSORS", "STORIES", "COMPETITION", "SIGN&nbsp;UP"] : ["ABOUT", "EVENTS", "SPONSORS", "STORIES", "COMPETITION"]).map(
          (item) => {
            const isSpecialButton = item.includes("SIGN&nbsp;UP");
            return (
              <button
                key={item}
                onClick={() =>
                  scrollToSection((item == "SIGN&nbsp;UP")
                    ? "landing"
                    : item
                      .toLowerCase()
                      .replace(/&nbsp;/g, "-")
                      .replace(" ", "-")
                  )}
                className={`navbar-text transition-colors duration-300 px-4 py-2 ${isSpecialButton
                    ? "navbarButtonGlow hover: rounded-full"
                    : "hover:shadow-sm hover:text-secondary rounded-[60px] transform transition-transform duration-100 hover:scale-101"
                  }`}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          }
        )}
      </div>

      {/* Social Media Icons */}
      <div className="w-2/12 flex justify-evenly gap-4 hidden custom-lg:flex">
        <a
          href="https://www.instagram.com/uwindustry4.0/"
          target="blank"
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/Social-Media-Icons/instagram_icon.svg"
            alt="Instagram Link"
            className="w-5 h-5"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/industry4team/"
          target="blank"
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/Social-Media-Icons/linkedin_icon.svg"
            alt="LinkedIn Link"
            className="w-5 h-5"
          />
        </a>
        <a
          href="https://discord.gg/dRtUKaXekc"
          target="blank"
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/Social-Media-Icons/discord_icon.svg"
            alt="Discord Link"
            className="w-5 h-5"
          />
        </a>
        <a
          href="mailto:industry4team@uwaterloo.ca"
          target="blank"
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <img
            src="/Social-Media-Icons/mail_icon.svg"
            alt="Email Link"
            className="w-5 h-5"
          />
        </a>
      </div>

      {isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-200 block custom-lg:hidden fixed mt-4 top-3 right-5 z-50 text-sm"
        >
          hide
        </button>
      )}

      {/* Hamburger Icon for Mobile View */}
      <div className={`custom-lg:hidden ${isMenuOpen ? "hidden" : ""} ml-auto`}>
        <button onClick={toggleMenu} className="text-white">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`
    custom-lg:hidden 
    fixed 
    top-0 
    right-0 
    w-72 
    h-full 
    transition-all 
    transform 
    z-40 
    backdrop-filter 
    backdrop-blur-lg 
    bg-black/30 
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex flex-col items-center pt-12 pb-12">
          <ul className="text-white">
            {[
              "ABOUT",
              "EVENTS",
              "SPONSORS",
              "STORIES",
              "COMPETITION",
              "SIGN&nbsp;UP",
            ].map((item) => (
              <li key={item} className="py-4 text-xl">
                <button
                  onClick={() =>
                    scrollToSection(
                      item
                        .toLowerCase()
                        .replace(/&nbsp;/g, "-")
                        .replace(" ", "-")
                    )
                  }
                  className="navbar-text px-4 py-2 rounded-[60px] hover:shadow-sm hover:text-secondary transform transition-transform duration-300 hover:scale-101"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>

          {/* Social media icons */}
          <div className="flex justify-evenly gap-8 mt-6">
            <a
              href="https://www.instagram.com/uwindustry4.0/"
              target="blank"
              className="transform transition-transform duration-300 hover:scale-125"
            >
              <img
                src="/Social-Media-Icons/instagram_icon.svg"
                alt="Instagram Link"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/industry4team/"
              target="blank"
              className="transform transition-transform duration-300 hover:scale-125"
            >
              <img
                src="/Social-Media-Icons/linkedin_icon.svg"
                alt="LinkedIn Link"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://discord.gg/dRtUKaXekc"
              target="blank"
              className="transform transition-transform duration-300 hover:scale-125"
            >
              <img
                src="/Social-Media-Icons/discord_icon.svg"
                alt="Discord Link"
                className="w-5 h-5"
              />
            </a>
            <a
              href="mailto:industry4team@uwaterloo.ca"
              target="blank"
              className="transform transition-transform duration-300 hover:scale-125"
            >
              <img
                src="/Social-Media-Icons/mail_icon.svg"
                alt="Email Link"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
