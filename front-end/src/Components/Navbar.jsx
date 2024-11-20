const Navbar = () => {
    return (
        <div className="w-full flex items-center py-8 pl-32 pr-32 text-primaryText gap-52 font-medium tracking-wide text-sm">
            <div className="w-7/12 flex navbar-text justify-evenly gap-4 items-center">
                <img src='/Gears/I4_Gear_Logo.png' alt="I4 Logo" className="w-10 h-10" />
                <div className="navbar-buttons custom-lg:flex justify-evenly gap-7 items-center">
                    <button className="navbar-text hover:bg-[#FDE37F] hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px] whitespace-nowrap flex-shrink-0">
                        ABOUT
                    </button>
                    <button className="navbar-text hover:bg-[#FDE37F] hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px] whitespace-nowrap flex-shrink-0">
                        TEAM
                    </button>
                    <button className="navbar-text hover:bg-[#FDE37F] hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px] whitespace-nowrap flex-shrink-0">
                        SPONSORS
                    </button>
                    <button className="navbar-text hover:bg-[#FDE37F] hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px] whitespace-nowrap flex-shrink-0">
                        EVENTS
                    </button>
                    <button className="navbar-text hover:bg-[#FDE37F] hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px] whitespace-nowrap flex-shrink-0">
                        STORIES
                    </button>
                    <button className="navbar-text hover:bg-[#FDE37F] hover:text-black transition-colors duration-300 px-4 py-2 rounded-[60px] whitespace-nowrap flex-shrink-0 border border-white">
                        SIGN UP
                    </button>
                </div>
            </div>
            <div className="w-3/12 flex justify-evenly gap-3">
                <a href="https://www.instagram.com/uwindustry4.0/" target="blank">
                    <img src='/Social-Media-Icons/instagram_icon.svg' alt="Instagram Link" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/industry4team/" target="blank">
                    <img src='/Social-Media-Icons/linkedin_icon.svg' alt="LinkedIn Link" className="w-5 h-5" />
                </a>
                <a href="https://discord.gg/dRtUKaXekc" target="blank">
                    <img src='/Social-Media-Icons/discord_icon.svg' alt="Discord Link" className="w-5 h-5" />
                </a>
                <a href="mailto:industry4team@uwaterloo.ca" target="blank">
                    <img src="/Social-Media-Icons/mail_icon.svg" alt="Email Link" className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
