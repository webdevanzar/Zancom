export const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const errors = "tooshort"
  
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        onBlur={onBlur}
        className="text-[15px] text-[var( --primary-color)] py-[12px] px-[18px] outline-0 w-full border-2 border-[var(--background-color)] mt-1 pr-10 focus:border-[var(--primary-color)]"
      />

      <p
        className={`text-red-500 text-[10px] text-left transition-opacity duration-200 ${
          errors ? "opacity-100" : "opacity-0"
        }`}
      >
         {errors ? "Too short" : "\u00A0"} {/* \u00A0 is a non-breaking space */}
      </p>
    </div>
  );
};
