const Navbar = () => {
    return ( 
        <div className="w-full flex items-center py-12 pl-32 pr-32 text-primaryText gap-52 font-medium tracking-wide text-sm">
            <div className="w-7/12 flex justify-evenly gap-7 items-center "> 
                <img src='/Gears/I4_Gear_Logo.png' alt="I4 Logo" className="w-10 h-10"/>
                <h1>ABOUT</h1>
                <h1>TEAM</h1>
                <h1>SPONSORS</h1>
                <h1>EVENTS</h1>
                <h1>STORIES</h1>
                <h1>SIGN UP!</h1>
            </div>
            <div className="w-3/12 flex justify-evenly gap-3">
                <img src='/Social-Media-Icons/instagram_icon.svg' alt="Instagram Link" className="w-4 h-4"/>
                <img src='/Social-Media-Icons/linkedin_icon.svg' alt="Instagram Link" className="w-4 h-4"/>
                <img src='/Social-Media-Icons/discord_icon.svg' alt="Instagram Link" className="w-4 h-4"/>
                <img src='/Social-Media-Icons/mail_icon.svg' alt="Instagram Link" className="w-4 h-4"/>
            </div>
        </div>
     );
}
 
export default Navbar;