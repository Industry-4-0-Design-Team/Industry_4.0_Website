import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router';


const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Scroll to the section with the specified ID
  const scrollToSection = (id) => {
    const scrollAfterNavigate = () =>{
      const section = document.getElementById(id);
      // Define offsets for specific sections
      const offsets = {
        landing: 90,
        about: 80, // Custom offset for "about" section
        events: 140, // Custom offset for "events" section
        sponsors: 140, // Custom offset for "sponsors" section
        stories: 70, // Custom offset for "stories" section
        team: 100, // Custom offset for "team" section
        competition: 90, // Custom offset for "competition" section
      };

      if (section) {
        const offsetTop = section.offsetTop - (offsets[id] || 100); // Default to 100 if no specific offset is defined
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
    
    if (location.pathname!="/"){
      navigate("/");
      setTimeout(scrollAfterNavigate,300);
    }
    else{
      scrollAfterNavigate();
    }
  };

  return (
    <div
      className={`w-full flex items-center py-4 px-16 text-primaryText gap-0 font-medium tracking-wide text-sm z-30 ${
        isScrolled ? "fixed top-0  backdrop-filter backdrop-blur-lg" : "fixed"
      } transition-all duration-500`}>
      {/* Logo */}
      <div className="flex items-center pl-2 mr-14">
        <button onClick={() => scrollToSection("landing")}>
          <img
            src="/Gears/New_I4_Logo.png"
            alt="I4 Logo"
            className="w-[50px] h-[50px]"
            draggable="false"
          />
        </button>
      </div>

      <div
        className={
          isScrolled
            ? "navbar-buttons hidden custom-lg:flex gap-3 custom-lg:gap-[6px] xl:gap-3 justify-start items-center flex-grow"
            : "navbar-buttons hidden custom-lg:flex gap-7 justify-start items-center flex-grow"
        }
      >
        {(isScrolled
          ? [
              "ABOUT",
              "EVENTS",
              "SPONSORS",
              "STORIES",
              "COMPETITION",
              "NEWSLETTER",
              "SIGN&nbsp;UP",
            ]
          : [
              "ABOUT",
              "EVENTS",
              "SPONSORS",
              "STORIES",
              "COMPETITION",
              "NEWSLETTER",
            ]
        ).map((item) => {
          const isSpecialButton = item.includes("SIGN&nbsp;UP");
          return (
            <a
              key={item}
              href={
                item == "NEWSLETTER"
                  ? "https://uwindustry4.substack.com/."
                  : undefined
              }
              target={item == "NEWSLETTER" ? "_blank" : undefined}
            >
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item == "SIGN&nbsp;UP"
                      ? "competition"
                      : item
                          .toLowerCase()
                          .replace(/&nbsp;/g, "-")
                          .replace(" ", "-")
                  )
                }
                className={`navbar-text transition-colors duration-300 px-4 py-2 ${
                  isSpecialButton
                    ? "navbarButtonGlow hover: rounded-full"
                    : "hover:shadow-sm hover:text-secondary rounded-[60px] transform transition-transform duration-200 hover:scale-104"
                }`}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </a>
          );
        })}
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
          className=" block custom-lg:hidden fixed mt-4 top-3 right-60 z-50 text-sm"
        >
          <img className="w-6 h-6" src="/Close.svg" />
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
                  h-screen
                  transition-all
                  transform
                  z-40
                  backdrop-filter
                  backdrop-blur-lg
                  bg-black/30
                  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
      >
        <div className="flex flex-col items-center text-center pt-12 pb-12">
          <ul className="text-white">
            {[
              "ABOUT",
              "EVENTS",
              "SPONSORS",
              "STORIES",
              "COMPETITION",
              "NEWSLETTER",
              "SIGN&nbsp;UP",
            ].map((item) => {
              return (
                <li key={item} className="py-4 text-xl">
                  <a
                    href={
                      item === "NEWSLETTER"
                        ? "https://uwindustry4.substack.com/"
                        : undefined
                    }
                    target={
                      item === "NEWSLETTER"
                        ? "https://uwindustry4.substack.com/"
                        : undefined
                    }
                  >
                    <button
                      onClick={() =>
                        scrollToSection(
                          item == "SIGN&nbsp;UP"
                            ? "landing"
                            : item
                                .toLowerCase()
                                .replace(/&nbsp;/g, "-")
                                .replace(" ", "-")
                        )
                      }
                      className="navbar-text px-4 py-2 rounded-[60px] hover:shadow-sm hover:text-secondary transform transition-transform duration-300 hover:scale-101"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Social media icons */}
          <div className="flex justify-evenly gap-8 mt-6">
            <a
              href="https://uwindustry4.substack.com"
              target="blank"
              className="transform transition-transform duration-300 hover:scale-125"
            >
              NEWSLETTER
            </a>
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
