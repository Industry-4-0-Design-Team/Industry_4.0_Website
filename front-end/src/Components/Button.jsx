const Button = ({ text }) => {
    return (
        <button className="text-black font-900 bg-secondary px-4 py-1 rounded-full text-md md:text-lg w-32 h-12 md:w-40 md:h-14 transition-colors duration-300 hover:bg-[#9d904c] inline-flex items-center justify-center whitespace-nowrap">
            {text}
        </button>
    );
};

export default Button;