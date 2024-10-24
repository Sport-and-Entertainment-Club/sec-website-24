/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "./TextInput";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import Stepper from "./Stepper";
import TextArea from "./TextArea";
import SelectInput from "./SelectInput";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
const yearOfStudy = ["L1/1CP", "L2/2CP", "L3/1CS", "M1/2CS", "M2/3CS"];
const schema01 = yup
  .object({
    firstName: yup.string().required("First Name is a required field"),
    familyName: yup.string().required("Family Name is a required field"),
    email: yup
      .string()
      .email("Email must be a valid email address")
      .required("Email is a required field"),
    phoneNumber: yup
      .string()
      .matches(/^0[5-7][0-9]{8}$/, "Phone number must be valid")
      .required("Phone number is a required field"),
  })
  .required();

const schema02 = yup.object({
  universityName: yup.string().required("University Name is a required field"),
  discordId: yup.string().required("Discord username is a required field"),
  studyYear: yup
    .string()
    .oneOf(yearOfStudy, "Study Year must be a valid selection")
    .required("Study Year is a required field"),
  insuranceNumber: yup
    .string()
    .test(
      "insurance-or-na",
      "Insurance number must be a valid 13-digit number or 'N/A'", // Custom test message
      (value) =>
        value === "N/A" ||
        /^[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{3}$/.test(value)
    )
    .required("Insurance number is a required field"),
});

const schema03 = yup.object({
  motivation: yup.string().required("Motivation is a required field"),
  other: yup.string(),
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
      phoneNumber: "",
      discordId: "",
      universityName: "",
      studyYear: "L1/1CP",
      insuranceNumber: "",
      motivation: "",
      other: "",
    },
  });

  const onsubmit = async (data) => {
    // Manually constructing the JSON payload
    const payload = {
      firstName: data.firstName,
      familyName: data.familyName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      discordId: data.discordId,
      universityName: data.universityName,
      studyYear: data.studyYear,
      insuranceNumber: data.insuranceNumber,
      motivation: data.motivation,
      other: data.other,
    };

    console.log("Payload to be sent:", payload);
    Swal.fire({
      title: "⏳ Almost there...",
      text: "Wait a moment, your submission is on its way !",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch(
        "https://sec-website-24-backend.onrender.com/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // Checking if the status code is within the success range (200-299)
      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully", result);
        Swal.fire({
          title: "🎉 Congrats! you’re all set!",
          text: "You’ve successfully registered for SEC!💜Keep an eye on your inbox 📧👀 you’ll be hearing some good news soon!",
          icon: "success",
          confirmButtonText: "Let's Go!",
          backdrop: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then(() => {
          window.innerWidth < 1024
            ? (window.location.href = "/")
            : window.close();
        });
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        Swal.fire({
          title: "Oops.. There was an error",
          text: "There was a problem sending processing your registeration. Please try again later.",
          icon: "error",
          confirmButtonText: "Close",
          backdrop: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then(() => {
          window.innerWidth < 1024
            ? (window.location.href = "/")
            : window.close();
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    console.log("step:", step);
    console.log("is valid:", isValid);
  }, [step, isValid]);
  return (
    <div className="px-5 lg:px-32 xl:px-48 relative h-[100vh] lg:h-[90vh] w-full grid grid-rows-[7vh,9vh,70vh,10vh] lg:flex lg:flex-col gap-[0px] lg:gap-[30px]  justify-center items-center xl:max-w-[1300px]">
      <>
        <h1 className="lg:h-[10vh] font-montserrat font-bold text-purple text-title-mobile lg:text-[48px] xl:text-title-desktop text-center transition-all duration-500">
          Join us
        </h1>
        <Stepper activeStep={step} className="transition-all duration-500" />
      </>

      <form
        action=""
        className="lg:h-[64vh] gap-3 grid grid-cols-2 grid-rows-3 lg:gap-2 xl:gap-6 w-full">
        {step === 0 && (
          <>
            <TextInput
              control={control}
              name={"firstName"}
              placeHolder={"Enter your first name"}
              label={"first name"}
              isReqiured={true}
              className=" col-span-2 lg:col-span-1 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"familyName"}
              placeHolder={"Enter your family name"}
              label={"Family Name"}
              isReqiured={true}
              className=" col-span-2 lg:col-span-1 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"email"}
              placeHolder={"example@gmail.com"}
              label={"Email"}
              isReqiured={true}
              className=" col-span-2 w-full"
              type={"email"}
            />
            <TextInput
              control={control}
              name={"phoneNumber"}
              placeHolder={"0555555555"}
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
              placeHolder={"Enter your discord username"}
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
              className="col-span-2 lg:col-span-1 w-full"
              type={"text"}
            />
            <SelectInput
              control={control}
              name={"studyYear"}
              placeHolder={"--Select Year--"}
              label={"Year of Study"}
              isReqiured={true}
              className=" col-span-2 lg:col-span-1 w-full text-sm"
              options={[
                { value: "L1/1CP", label: "L1/1CP" },
                { value: "L2/2CP", label: "L2/2CP" },
                { value: "L3/1CS", label: "L3/1CS" },
                { value: "M1/2CS", label: "M1/2CS" },
                { value: "M2/3CS", label: "M2/3CS" },
              ]}
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
              placeHolder={"Why would you like to join us ?"}
              label={"Show us your motivation"}
              isReqiured={true}
              className=" col-span-2 row-span-2 w-full"
              type={"text"}
            />
            <TextInput
              control={control}
              name={"other"}
              placeHolder={""}
              label={"Anything to add ?"}
              isReqiured={false}
              className=" col-span-2 row-span-1 w-full"
              type={"text"}
            />
          </>
        )}
      </form>
      <div className="lg:h-[6vh] p w-full flex flex-row-reverse justify-between ">
        {step === 0 && (
          <Button disable={!isValid} onClick={incrementStep}>
            <p className="lg:text-lg text-sm text-white font-poppins font-semibold">
              Next
            </p>
            <FaPlay className="w-2 lg:w-5 text-xl text-white" />
          </Button>
        )}
        {step === 1 && (
          <>
            <Button disable={!isValid} onClick={incrementStep}>
              <p className="lg:text-lg text-sm text-white font-poppins font-semibold">
                Next
              </p>
              <FaPlay className="w-2 lg:w-5 text-xl text-white" />
            </Button>
            <Button disable={false} onClick={decrementStep}>
              <FaPlay className="w-2 lg:w-5 text-xl text-white rotate-180" />
              <p className="lg:text-lg text-sm text-white font-poppins font-semibold">
                Back
              </p>
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Button disable={!isValid} onClick={handleSubmit(onsubmit)}>
              <p className="lg:text-lg text-sm text-white font-poppins font-semibold">
                Submit
              </p>
            </Button>
            <Button disable={false} onClick={decrementStep}>
              <FaPlay className="w-2 lg:w-5 text-xl text-white rotate-180" />
              <p className="lg:text-lg text-sm text-white font-poppins font-semibold">
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
