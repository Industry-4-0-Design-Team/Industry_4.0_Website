const Navbar = () => {
    return (
        <div className="w-full flex items-center py-8 pl-32 pr-32 text-primaryText gap-52 font-medium tracking-wide text-sm">
            <div className="w-7/12 flex navbar-text justify-evenly gap-7 items-center ">
                <img src='/Gears/I4_Gear_Logo.png' alt="I4 Logo" className="w-10 h-10"/>
                <h1 className="navbar-text">ABOUT</h1>
                <h1 className="navbar-text">TEAM</h1>
                <h1 className="navbar-text">SPONSORS</h1>
                <h1 className="navbar-text">EVENTS</h1>
                <h1 className="navbar-text">STORIES</h1>
                <h1 className="navbar-text">SIGN UP</h1>
            </div>
            <div className="w-3/12 flex justify-evenly gap-3">
                <a href="https://www.instagram.com/uwindustry4.0/" target="blank">
                    <img src='/Social-Media-Icons/instagram_icon.svg' alt="Instagram Link" className="w-4 h-4"/>
                </a>
                <a href="https://www.linkedin.com/company/industry4team/" target="blank">
                    <img src='/Social-Media-Icons/linkedin_icon.svg' alt="LinkedIn Link" className="w-4 h-4"/>
                </a>
                <a href="https://discord.gg/dRtUKaXekc" target="blank">
                    <img src='/Social-Media-Icons/discord_icon.svg' alt="Discord Link" className="w-4 h-4"/>
                </a>
                <a href="mailto:industry4team@uwaterloo.ca" target="blank">
                    <img src="/Social-Media-Icons/mail_icon.svg" alt="Email Link" className="w-4 h-4" />
                </a>
            </div>
        </div>
     );
}

export default Navbar;