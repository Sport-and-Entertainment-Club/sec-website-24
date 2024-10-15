/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import TextInput from "./TextInput";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import Stepper from "./Stepper";
import TextArea from "./TextArea";

const yearOfStudy = ["L1/1CP", "L2/2CP", "L3/1CS", "M1/2CS", "M2/3CS"];
const schema01 = yup
  .object({
    firstName: yup.string().required(),
    familyName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNum: yup
      .string()
      .matches(/^0[5-7][0-9]{8}$/, "Phone number must be valid")
      .required("Phone number is required"),
  })
  .required();

const schema02 = yup.object({
  discordId: yup
    .string()
    .matches(
      /^.{2,32}#[0-9]{4}$/,
      "Discord ID must be in the format 'username#1234'"
    )
    .required("Discord ID is required"),
  universityName: yup.string().required(),
  studyYear: yup.string().oneOf(yearOfStudy).required(),
  insuranceNumber: yup
    .string()
    .matches(
      /^[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{3}$/,
      "Insurance number must be a valid 13-digit number"
    )
    .required("Insurance number is required"),
});

const schema03 = yup.object({
  motivation: yup.string().required(),
  anythingAdded: yup.string(),
});

const Form = () => {
  const schemas = [schema01, schema02, schema03];
  const [step, setStep] = useState(0);
  const [currentSchema, setCurrentSchema] = useState(schemas[step]);
  const incrementStep = () => {
    setStep((prev) => prev + 1);
  };
  const decrementStep = () => {
    setStep((prev) => prev - 1);
  };
  useEffect(() => {
    setCurrentSchema(schemas[step]);
  }, [step]);

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(currentSchema),
    mode: "all",
    defaultValues: {
      firstName: "",
      familyName: "",
      email: "",
      phoneNum: "",
      discordId: "",
      universityName: "",
      studyYear: "",
      insuranceNumber: "",
      motivation: "",
      anythingAdded: "",
    },
  });

  const onsubmit = (data) => {
    console.log("data", data);
  };
  useEffect(() => {
    console.log("step:", step);
    console.log("is valid:", isValid);
  }, [step, isValid]); // This will log step and isValid whenever they change
  return (
    <div className="  w-full px-48 space-y-10 flex flex-col justify-center items-center">
      <Stepper activeStep={step} />
      <form action="" className=" grid grid-cols-2 grid-rows-3 gap-10 w-full">
        {step === 0 && (
          <>
            <TextInput
              control={control}
              name={"firstName"}
              placeHolder={"Enter your first name"}
              label={"first name"}
              isReqiured={true}
              className=" col-span-1 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"familyName"}
              placeHolder={"Enter your family name"}
              label={"Family Name"}
              isReqiured={true}
              className=" col-span-1 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"email"}
              placeHolder={"exemple@gmail.com"}
              label={"Email"}
              isReqiured={true}
              className=" col-span-2 w-full"
              type={"email"}
            />
            <TextInput
              control={control}
              name={"phoneNum"}
              placeHolder={"0782683513"}
              label={"Phone Number"}
              isReqiured={true}
              className=" col-span-2 w-full"
              type={"number"}
            />
          </>
        )}
        {step === 1 && (
          <>
            <TextInput
              control={control}
              name={"discordId"}
              placeHolder={"Enter your discord ID"}
              label={"Discord ID"}
              isReqiured={true}
              className=" col-span-2 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"universityName"}
              placeHolder={"Enter the name of your university"}
              label={"University Name"}
              isReqiured={true}
              className=" col-span-1 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"studyYear"}
              placeHolder={"--Select--"}
              label={"Year of Study"}
              isReqiured={true}
              className=" col-span-1 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"insuranceNumber"}
              placeHolder={
                "Enter your insurance number, or write 'N/A' if you don't have one"
              }
              label={"Insurance Number"}
              isReqiured={true}
              className=" col-span-2 w-full"
              type={"text"}
            />
          </>
        )}
        {step === 2 && (
          <>
            <TextArea
              control={control}
              name={"motivation"}
              placeHolder={"Show us your motivation"}
              label={"Show us your motivation"}
              isReqiured={true}
              className=" col-span-2 row-span-2 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"anythingAdded"}
              placeHolder={""}
              label={"Anything to add ?"}
              isReqiured={true}
              className=" col-span-2 row-span-1 w-full"
              type={"text"}
            />
          </>
        )}
      </form>
      <div className=" w-full  flex flex-row-reverse justify-between">
        {step === 0 && (
          <Button disable={!isValid} onClick={incrementStep}>
            <p className="text-2xl text-white font-poppins font-semibold">
              Next
            </p>
            <FaPlay className=" text-xl text-white" />
          </Button>
        )}
        {step === 1 && (
          <>
            <Button disable={!isValid} onClick={incrementStep}>
              <p className="text-2xl text-white font-poppins font-semibold">
                Next
              </p>
              <FaPlay className=" text-xl text-white" />
            </Button>
            <Button disable={false} onClick={decrementStep}>
              <FaPlay className=" text-xl text-white rotate-180" />
              <p className="text-2xl text-white font-poppins font-semibold">
                Back
              </p>
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Button disable={!isValid} onClick={handleSubmit(onsubmit)}>
              <p className="text-2xl text-white font-poppins font-semibold">
                Submit
              </p>
            </Button>
            <Button disable={false} onClick={decrementStep}>
              <FaPlay className=" text-xl text-white rotate-180" />
              <p className="text-2xl text-white font-poppins font-semibold">
                Back
              </p>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
