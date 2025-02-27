export const Button = ({ text, type, onClick, className, disabled }) => {
  return (
    <button
      className={`bg-[var(--primary-color)] text-[var(--white-color)] rounded-lg p-[6px] font-semibold w-full text-[18px] ${
        disabled ? "cursor-not-allowed bg-gray-500" : "cursor-pointer"
      } ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
