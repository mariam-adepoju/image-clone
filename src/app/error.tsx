"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
      <p className="text-red-500 font-medium">Oops! Failed to load images</p>
      <p className="text-sm text-gray-400">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
