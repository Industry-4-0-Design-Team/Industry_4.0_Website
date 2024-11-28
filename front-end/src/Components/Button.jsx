const Button = ({ text }) => {
    return (
        <button className="buttonGlow text-secondary font-900 bg-secondary px-4 py-1 rounded-full text-md md:text-lg w-auto min-w-[10rem] h-12 md:w-auto md:h-14 inline-flex items-center justify-center whitespace-nowrap transform transition-transform duration-200">            {text}
        </button>
    );
};

export default Button;