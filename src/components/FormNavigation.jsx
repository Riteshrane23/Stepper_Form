export default function FormNavigation({ step, onBack, onNext, onSubmit, isSubmitted }) {
  if (isSubmitted) {
    return null;
  }

  return (
    <div className="flex justify-between mt-8">
      {step > 1 ? (
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={onBack}
        >
          Back
        </button>
      ) : (
        <div />
      )}
      {step < 3 ? (
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={onNext}
        >
          Next
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={onSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}