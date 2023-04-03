import { useState } from "react";
import FormUserDetails from "../FormUserDetails/FormUserDetails";
import Confirm from "../Confirm/Confirm";
import FormPersonalDetails from "../FormPersonalDetails/FormPersonalDetails";
import Success from "../Success/Success";
const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => setStep((prevState) => prevState + 1);

  const prevStep = () => setStep((prevState) => prevState - 1);

  const handleChange = (input) => (e) => {
    setFormFields({ ...formFields, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          values={formFields}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          values={formFields}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm values={formFields} nextStep={nextStep} prevStep={prevStep} />
      );
    case 4:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default UserForm;
