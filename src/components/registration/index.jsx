import Form from "./Form";

const Registration = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen text-base py-6 space-y-6">
      <h1 className=" font-montserrat font-bold text-purple text-3xl md:text-6xl ">
        Join Us
      </h1>
      <Form />
    </div>
  );
};

export default Registration;
