import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const SelectInput = ({
  label,
  placeHolder,
  control,
  name,
  isReqiured,
  className,
  options, // New prop for dropdown options
}) => {
  const { field, fieldState } = useController({ control, name });

  return (
    <div className={`pb-5 md:max-w-full flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className="text-purple text-md lg:text-xl font-bold capitalize font-poppins">
        {label}
        {isReqiured && <span className="text-2xl text-red-700">*</span>}
      </label>

      <div className="w-full">
        <select
          {...field}
          className="outline-none max-w-[200px] lg:max-w-full bg-white placeholder:text-neutral-400 text-[14px] px-5 py-4 rounded-2xl w-full">
          {options.map((option, idx) => (
            <option
              key={idx}
              value={option.value}
              className="text-[10px] lg:text-[14px]">
              {option.label}
            </option>
          ))}
        </select>

        {fieldState?.error ? (
          <p className="h-[15px] text-red-500 font-semibold text-sm">
            {fieldState.error?.message}
          </p>
        ) : (
          <p className="h-[15px]"></p>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
