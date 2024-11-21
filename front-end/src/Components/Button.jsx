const Button = ({ text }) => {
    return (
        <button className="text-third font-900 bg-secondary px-4 py-1 rounded-full text-lg min-w-[10rem] h-14 transition-colors duration-300 hover:bg-[#9d904c] inline-flex items-center justify-center whitespace-nowrap">
            {text}
        </button>
    );
};

export default Button;