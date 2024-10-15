/* eslint-disable react/prop-types */
import { useController } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
const TextArea = ({label,placeHolder,type,control,name,isReqiured,className}) => {
    const {field ,fieldState}=useController({control,name})
  return (
    <div className={` flex flex-col gap-4   ${className}`}>
    <label htmlFor={name} className=" text-purple text-2xl font-bold capitalize font-poppins">
        {label}
        {isReqiured && <span className=" text-4xl text-red-700 ">*</span>}
    </label>
    <div className=" w-full flex-1">
    <textarea name={name} id={name} type={type} placeholder={placeHolder} {...field} className=" resize-none h-full outline-none bg-white placeholder:text-neutral-400 placeholder:text-lg text-lg  px-5 py-4 rounded-2xl w-full " ></textarea>
    {fieldState?.error && <p className=" text-red-500 font-semibold text-sm h-full ">{fieldState.error?.message}</p>}
    </div>
   </div>
  )
}

export default TextArea