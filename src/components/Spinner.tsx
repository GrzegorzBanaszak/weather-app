import React from "react";

interface SpinnerProps {
  size?: string; // Rozmiar spinnera (np. "w-8 h-8")
  color?: string; // Kolor spinnera (np. "text-blue-500")
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-16 h-16",
  color = "text-blue-500",
}) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`${size} ${color} border-4 border-t-transparent border-solid rounded-full animate-spin`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
