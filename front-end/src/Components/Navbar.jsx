import { useState, useEffect, useRef } from 'react';

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

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Update navbar style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to the section with the specified ID
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offsetTop = section.offsetTop - 100; // Adjust for navbar height
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div
            className={`w-full flex items-center justify-between py-4 px-16 text-primaryText gap-12 font-medium tracking-wide text-sm z-30 ${isScrolled ? 'fixed top-0 backdrop-blur-md bg-opacity-10 bg-black' : 'relative'
                } transition-all duration-300`}
        >
            {/* Logo */}
            <div className="flex items-center w-3/12">
                <img src="/Gears/I4_Gear_Logo.png" alt="I4 Logo" className="w-10 h-10" />
            </div>

            <div className="navbar-buttons hidden custom-lg:flex justify-center gap-7 items-center flex-grow">
                {['ABOUT', 'TEAM', 'SPONSORS', 'EVENTS', 'STORIES', 'SIGN&nbsp;UP'].map((item) => {
                    const isSignUp = item.includes('SIGN&nbsp;UP');
                    return (
                        <button
                            key={item}
                            onClick={() =>
                                scrollToSection(item.toLowerCase().replace(/&nbsp;/g, '-').replace(' ', '-'))
                            }
                            className={`navbar-text transition-colors duration-300 px-4 py-2 ${isSignUp
                                    ? 'hover:bg-yellow-300/20 border border-white rounded-[60px]'
                                    : 'hover:bg-secondary'
                                }`}
                            dangerouslySetInnerHTML={{ __html: item }}
                        />
                    );
                })}

            </div>

            {/* Social Media Icons */}
            <div className="w-3/12 flex justify-evenly hidden custom-lg:flex">
                <a href="https://www.instagram.com/uwindustry4.0/" target="blank">
                    <img src="/Social-Media-Icons/instagram_icon.svg" alt="Instagram Link" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/industry4team/" target="blank">
                    <img src="/Social-Media-Icons/linkedin_icon.svg" alt="LinkedIn Link" className="w-5 h-5" />
                </a>
                <a href="https://discord.gg/dRtUKaXekc" target="blank">
                    <img src="/Social-Media-Icons/discord_icon.svg" alt="Discord Link" className="w-5 h-5" />
                </a>
                <a href="mailto:industry4team@uwaterloo.ca" target="blank">
                    <img src="/Social-Media-Icons/mail_icon.svg" alt="Email Link" className="w-5 h-5" />
                </a>
            </div>

            {/* Hamburger Icon for Mobile View */}
            <div className={`custom-lg:hidden ${isMenuOpen ? 'hidden' : ''} ml-auto`}>
                <button onClick={toggleMenu} className="text-white">
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`custom-lg:hidden fixed top-0 right-0 bg-transparent backdrop-blur-lg bg-opacity-30 w-72 h-full transition-all transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-40`}
            >
                <div className="flex flex-col items-center pt-24">
                    <ul className="text-white">
                        {['ABOUT', 'TEAM', 'SPONSORS', 'EVENTS', 'STORIES', 'SIGN&nbsp;UP'].map((item) => (
                            <li key={item} className="py-4 text-xl">
                                <button
                                    onClick={() => scrollToSection(item.toLowerCase().replace(/&nbsp;/g, '-').replace(' ', '-'))}
                                    className="navbar-text hover:bg-secondary hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px]"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Social media icons */}
                    <div className="flex justify-evenly gap-8 mt-6">
                        <a href="https://www.instagram.com/uwindustry4.0/" target="blank">
                            <img src="/Social-Media-Icons/instagram_icon.svg" alt="Instagram Link" className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/industry4team/" target="blank">
                            <img src="/Social-Media-Icons/linkedin_icon.svg" alt="LinkedIn Link" className="w-5 h-5" />
                        </a>
                        <a href="https://discord.gg/dRtUKaXekc" target="blank">
                            <img src="/Social-Media-Icons/discord_icon.svg" alt="Discord Link" className="w-5 h-5" />
                        </a>
                        <a href="mailto:industry4team@uwaterloo.ca" target="blank">
                            <img src="/Social-Media-Icons/mail_icon.svg" alt="Email Link" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
