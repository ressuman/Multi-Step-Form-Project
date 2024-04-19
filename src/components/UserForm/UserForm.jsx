import { useState } from "react";
import { Confirm } from "../Confirm/Confirm";
import { FormPersonalDetails } from "../FormPersonalDetails/FormPersonalDetails";
import { FormUserDetails } from "../FormUserDetails/FormUserDetails";
import { Success } from "../Success/Success";

export const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  //Proceed to next step
  const nextStep = () => setStep((step) => step + 1);
  //Go back to previous step
  const prevStep = () => setStep((step) => step - 1);

  //Handle field change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const { firstName, lastName, email, occupation, city, bio } = formData;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      return <div>This is a multi-step form built with React.</div>;
  }
};
