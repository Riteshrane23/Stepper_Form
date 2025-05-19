import React, { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import Step1UserInfo from "./components/Step1UserInfo";
import Step2Address from "./components/Step2Address";
import Step3Review from "./components/Step3Review";
import FormNavigation from "./components/FormNavigation";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  mobile: "",
  email: "",
  birthdate: "",
  age: "",
  bloodGroup: "",
  height: "",
  weight: "",
  gender: "",
  maritalStatus: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};

export default function StepperForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validateStep, setValidateStep] = useState(false);
  const [step1Valid, setStep1Valid] = useState(false);
  const [step2Valid, setStep2Valid] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      setValidateStep(prev => !prev); if (step1Valid) {
        setStep(2);
        setValidateStep(false);
      }
    } else if (step === 2) {
      setValidateStep(prev => !prev); if (step2Valid) {
        setStep(3);
        setValidateStep(false);
      }
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setStep((s) => Math.max(1, s - 1));
    setValidateStep(false);

  };


  return (
    <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl
  transition-shadow duration-300 ease-in-out
  hover:shadow-2xl
">
      <h2 className="text-3xl font-bold text-center mb-6">Step Form</h2>
      <StepIndicator step={step} />
      <div className="mt-8">
        {step === 1 && (
          <Step1UserInfo
            formData={formData}
            setFormData={setFormData}
            validateStep={validateStep}
            setStepValid={setStep1Valid}
            onNext={handleNext}
            step1Valid={step1Valid}
          />
        )}
        {step === 2 && (
          <Step2Address
            formData={formData}
            setFormData={setFormData}
            validateStep={validateStep}
            setStepValid={setStep2Valid}
            onNext={handleNext}
          />
        )}
        {step === 3 && <Step3Review formData={formData} isSubmitted={isSubmitted} />}
      </div>
      <FormNavigation
        step={step}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}