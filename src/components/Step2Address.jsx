import { useEffect, useState } from "react";

const initialErrors = {
  address1: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};

export default function Step2Address({
  formData,
  setFormData,
  validateStep,
  setStepValid,
  onNext,
}) {
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(initialErrors).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1").toLowerCase()} is required`;
      }
    });

    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }

    if (formData.city && !/^[A-Za-z\s]+$/.test(formData.city)) {
      newErrors.city = "City must contain only letters and spaces";
    }
    if (formData.state && !/^[A-Za-z\s]+$/.test(formData.state)) {
      newErrors.state = "State must contain only letters and spaces";
    }
    if (formData.country && !/^[A-Za-z\s]+$/.test(formData.country)) {
      newErrors.country = "Country must contain only letters and spaces";
    }

    setErrors(newErrors);
    setStepValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (validateStep) {
      if (validate()) {
        setStepValid(true);
        onNext();
      } else {
        setStepValid(false);
      }
    }
  }, [validateStep]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validate()) onNext();
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.address1 ? "border-red-500" : ""}`}
            name="address1"
            placeholder="Address Line 1"
            value={formData.address1}
            onChange={handleChange}
          />
          {errors.address1 && <p className="text-red-500 text-sm">{errors.address1}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 `}
            name="address2"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.city ? "border-red-500" : ""}`}
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.state ? "border-red-500" : ""}`}
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.country ? "border-red-500" : ""}`}
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.pincode ? "border-red-500" : ""}`}
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
        </div>
      </div>
    </form>
  );
}