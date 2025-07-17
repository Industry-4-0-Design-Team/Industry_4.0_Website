import Button from "../../Components/Button";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 425) {
      // Disable AOS animations for small screens
      const elementsWithAOS = document.querySelectorAll("[data-aos]");
      elementsWithAOS.forEach((element) => {
        element.removeAttribute("data-aos");
      });
    }
  }, []);

  return (
    <div
      className="body flex flex-col text-center custom-lg:text-left custom-lg:flex-row mx-auto mt-44 gap-11 
                        h-full justify-center items-center max-w-screen-lg px-14 md:px-12"
    >
      <div className="flex flex-col gap-2 h-full">
        <h1
          className="text-5xl font-bold text-white"
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact Us
        </h1>
        <p
          className="text-xl font-medium custom-lg:text-xl md:text-xl sm:text-base"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          When emailing us, please include your full name, university, and
          program in the subject line, separated by hyphens (-). In the body of
          the email, feel free to include any questions, comments, or topics
          you'd like to discuss with us!
        </p>
        <a
          data-aos="fade-up"
          className="mt-2"
          rel="noopener noreferrer"
          href="mailto:industry4team@uwaterloo.ca"
          target="_blank"
        >
          <Button text="Get In Touch" />
        </a>
      </div>
      <div
        className="w-max h-full"
        data-aos="flip-right"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          className="h-auto w-40 max-w-80 custom-lg:w-64 md:w-72 sm:w-52 mx-auto object-contain"
          src="\Gears\Contact_Gear.png"
          draggable="false"
        ></img>
      </div>
    </div>
  );
}

export default Contact;
