import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Optional: for a nice check icon

const fieldLabels = {
  firstName: "First Name",
  middleName: "Middle Name",
  lastName: "Last Name",
  mobile: "Mobile No",
  email: "Email",
  birthdate: "Birthdate",
  age: "Age",
  bloodGroup: "Blood Group",
  height: "Height",
  weight: "Weight",
  gender: "Gender",
  maritalStatus: "Marital Status",
  address1: "Address Line 1",
  address2: "Address Line 2",
  city: "City",
  state: "State",
  country: "Country",
  pincode: "Pincode",
};

export default function Step3Review({ formData, isSubmitted }) {
  return (
    <div className="flex flex-col items-center">
      {isSubmitted ? (
        <div className="flex flex-col items-center mb-6">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mb-2" />
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Thank You!</h3>
          <p className="text-gray-500 text-lg">Your information has been submitted successfully.</p>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8">
          <h4 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">Review Your Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {Object.entries(fieldLabels).map(([key, label]) => (
              <div key={key} className="flex flex-col mb-2">
                <span className="text-gray-500 font-medium">{label}</span>
                <span
                  className="text-gray-900 text-lg font-semibold bg-blue-100 rounded px-2 py-1 mt-1 overflow-hidden text-ellipsis whitespace-nowrap"
                  title={formData[key]}
                >
                  {formData[key] || <span className="text-gray-400">-</span>}
                </span>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
