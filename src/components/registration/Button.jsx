// eslint-disable-next-line react/prop-types
const Button = ({ children, disable, onClick }) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`bg-gradient-to-b from-blue-ocean to-purple-ocean lg:px-8 lg:py-3 px-7 py-2 rounded-full flex flex-row justify-center items-center gap-4${
        disable ? " cursor-not-allowed" : ""
      }`}>
      {children}
    </button>
  );
};

export default Button;
