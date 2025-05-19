import React from "react";

const steps = [
  { label: "User Information" },
  { label: "Address Details" },
  { label: "Thank You" },
];

export default function StepIndicator({ step }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="absolute top-5 left-[16.66%] right-[16.66%] h-1 bg-gray-300 z-0" />
      <div className="flex justify-between items-center relative z-10">
        {steps.map((s, idx) => (
          <div key={s.label} className="flex flex-col items-center w-1/3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${step === idx + 1 ? "bg-blue-600" : "bg-gray-400"
                }`}
            >
              {idx + 1}
            </div>
            <div className="text-center text-sm mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
