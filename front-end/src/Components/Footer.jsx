const Footer = () => {
  return (
    <div className="relative">
      {/* Divider */}
      <div className="nav-gradient-line"></div>
      
      {/* Footer Content */}
      <footer className="flex flex-col custom-lg:flex-row justify-between items-center custom-lg:items-end py-[38px] px-[92px]">
        {/* Left Side: Gear and Contact Email */}
        <div className="flex items-center space-x-4 mb-4 custom-lg:mb-0">
          <img src="Gears/FooterGear.svg" alt="Footer Gear" className="w-6 h-6" />
          <span className="bg-gray-800 text-white py-1 px-3 rounded-full text-sm">
            contact@industry40.ca
          </span>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex mt-4 custom-lg:mt-0 custom-lg:justify-evenly items-center align-center justify-center gap-4 w-full custom-lg:w-2/12 flex-row custom-lg:items-end">
          <a
            href="https://www.instagram.com/uwindustry4.0/"
            target="blank"
            className="block"
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
            className="block"
          >
            <img
              src="/Social-Media-Icons/linkedin_icon.svg"
              alt="LinkedIn Link"
              className="w-5 h-5"
            />
          </a>
          <a href="https://discord.gg/dRtUKaXekc" target="blank" className="block">
            <img
              src="/Social-Media-Icons/discord_icon.svg"
              alt="Discord Link"
              className="w-5 h-5"
            />
          </a>
          <a
            href="mailto:industry4team@uwaterloo.ca"
            target="blank"
            className="block"
          >
            <img
              src="/Social-Media-Icons/mail_icon.svg"
              alt="Email Link"
              className="w-5 h-5"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
