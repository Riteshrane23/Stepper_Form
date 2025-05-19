import { useEffect, useState } from "react";

const initialErrors = {
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
};

export default function Step1UserInfo({
  formData,
  setFormData,
  validateStep,
  setStepValid,
  onNext,
  step1Valid
}) {
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  const validateNumeric = (value) => {
    return !isNaN(value) && value.trim() !== '';
  };

  const validate = () => {
    const newErrors = { ...initialErrors };
    let isValid = true;
    console.log("inside");

    Object.keys(initialErrors).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1").toLowerCase()} is required`;
        isValid = false;
      }
    });

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.mobile && !validateMobile(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
      isValid = false;
    }

    if (formData.age) {
      if (!validateNumeric(formData.age)) {
        newErrors.age = "Age must be a number";
        isValid = false;
      } else if (parseInt(formData.age) < 0 || parseInt(formData.age) > 120) {
        newErrors.age = "Age must be between 0 and 120";
        isValid = false;
      }
    }

    if (formData.height) {
      if (!validateNumeric(formData.height)) {
        newErrors.height = "Height must be a number";
        isValid = false;
      } else if (parseFloat(formData.height) <= 0 || parseFloat(formData.height) > 300) {
        newErrors.height = "Height must be between 0 and 300 cm";
        isValid = false;
      }
    }

    if (formData.weight) {
      if (!validateNumeric(formData.weight)) {
        newErrors.weight = "Weight must be a number";
        isValid = false;
      } else if (parseFloat(formData.weight) <= 0 || parseFloat(formData.weight) > 500) {
        newErrors.weight = "Weight must be between 0 and 500 kg";
        isValid = false;
      }
    }

    setErrors(newErrors);
    setStepValid(isValid);
    return isValid;
  };

  useEffect(() => {
    if (validateStep) {
      const isValid = validate();
      setStepValid(isValid);
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
            className={`w-full border rounded p-2 ${errors.firstName ? "border-red-500" : ""}`}
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.middleName ? "border-red-500" : ""}`}
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
          />
          {errors.middleName && <p className="text-red-500 text-sm">{errors.middleName}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.lastName ? "border-red-500" : ""}`}
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.mobile ? "border-red-500" : ""}`}
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.email ? "border-red-500" : ""}`}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input
            type="date"
            className={`w-full border rounded p-2 ${errors.birthdate ? "border-red-500" : ""}`}
            name="birthdate"
            placeholder="dd-mm-yyyy"
            value={formData.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <p className="text-red-500 text-sm">{errors.birthdate}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.age ? "border-red-500" : ""}`}
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.bloodGroup ? "border-red-500" : ""}`}
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
          />
          {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.height ? "border-red-500" : ""}`}
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
          />
          {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
        </div>
        <div>
          <input
            className={`w-full border rounded p-2 ${errors.weight ? "border-red-500" : ""}`}
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
          />
          {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
        </div>
      </div>
      <div className="flex gap-8 mt-4">
        <div className="flex-1">
          <label className="block mb-1">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        <div className="flex-1">
          <label className="block mb-1">Marital Status</label>
          <div className="flex gap-4 flex-wrap">
            {["Single", "Married", "Divorced", "Widowed"].map((status) => (
              <label key={status}>
                <input
                  type="radio"
                  name="maritalStatus"
                  value={status}
                  checked={formData.maritalStatus === status}
                  onChange={handleChange}
                />{" "}
                {status}
              </label>
            ))}
          </div>
          {errors.maritalStatus && <p className="text-red-500 text-sm">{errors.maritalStatus}</p>}
        </div>
      </div>
    </form>
  );
}