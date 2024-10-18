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
import SelectInput from "./SelectInput";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
const yearOfStudy = ["L1/1CP", "L2/2CP", "L3/1CS", "M1/2CS", "M2/3CS"];
const schema01 = yup
  .object({
    firstName: yup.string().required(),
    familyName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup
      .string()
      .matches(/^0[5-7][0-9]{8}$/, "Phone number must be valid")
      .required("Phone number is required"),
  })
  .required();

const schema02 = yup.object({
  universityName: yup.string().required(),
  studyYear: yup.string().oneOf(yearOfStudy).required(),
  insuranceNumber: yup
    .string()
    .test(
      "insurance-or-na",
      "Insurance number must be a valid 13-digit number or 'N/A'",
      (value) =>
        value === "N/A" ||
        /^[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{3}$/.test(value)
    )
    .required("Insurance number is required"),
});

const schema03 = yup.object({
  motivation: yup.string().required(),
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
      studyYear: data.studyYear, // Ensuring studyYear is properly sent as string
      insuranceNumber: data.insuranceNumber,
      motivation: data.motivation,
      other: data.other,
    };

    console.log("Payload to be sent:", payload);

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
          title: "🎉 Welcome Aboard!",
          text: "Your inscription to SEC has been successfully added. Get ready for an awesome adventure with us!",
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
          title: "🎉 Welcome Aboard!",
          text: "There was a problem sending your form. Please try again later.",
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
    <div className="relative h-[80vh] lg:h-[90vh] w-full px-5 lg:px-32 xl:px-48 flex gap-[40px] lg:gap-0 flex-col justify-center items-center">
      <Stepper activeStep={step} />
      <ToastContainer />

      <form
        action=""
        className="gap-4 grid grid-cols-2 grid-rows-3 lg:gap-2 xl:gap-10 w-full">
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
              placeHolder={"Show us your motivation"}
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
              isReqiured={true}
              className=" col-span-2 row-span-1 w-full"
              type={"text"}
            />
          </>
        )}
      </form>
      <div className="px-5 lg:px-32 xl:px-48 absolute bottom-[20px] lg:bottom-[40px] w-full flex flex-row-reverse justify-between ">
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
