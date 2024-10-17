import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const TextInput = ({
  label,
  placeHolder,
  type,
  control,
  name,
  isReqiured,
  className,
}) => {
  const { field, fieldState } = useController({ control, name });
  return (
    <div className={` flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className=" text-purple text-lg lg:text-xl font-bold capitalize font-poppins">
        {label}
        {isReqiured && <span className=" text-2xl text-red-700 ">*</span>}
      </label>
      <div className=" w-full">
        <input
          type={type}
          placeholder={placeHolder}
          {...field}
          className=" outline-none bg-black placeholder:text-neutral-400 lg:placeholder:text-sm lg:text-sm text-[14px] placeholder:text-[14px]  px-5 py-4 rounded-2xl w-full "
        />
        {fieldState?.error ? (
          <p className="h-[15px] text-red-500 font-semibold text-[12px] ">
            {fieldState.error?.message}
          </p>
        ) : (
          <p className="h-[15px]"></p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
