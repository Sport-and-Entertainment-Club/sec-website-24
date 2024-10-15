import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const TextInput = ({label,placeHolder,type,control,name,isReqiured,className}) => {
    const { field,fieldState } = useController({ control, name });
  return (
   <div className={` flex flex-col gap-4 ${className}`}>
    <label htmlFor={name} className=" text-purple text-2xl font-bold capitalize font-poppins">
        {label}
        {isReqiured && <span className=" text-4xl text-red-700 ">*</span>}
    </label>
    <div className=" w-full">
    <input type={type} placeholder={placeHolder} {...field} className=" outline-none bg-white placeholder:text-neutral-400 placeholder:text-lg text-lg  px-5 py-4 rounded-2xl w-full " />
    {fieldState?.error && <p className=" text-red-500 font-semibold text-sm ">{fieldState.error?.message}</p>}
    </div>
   </div>

  )
}

export default TextInput