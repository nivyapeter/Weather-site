import React from "react";

function Button({text}) {
  return (
    <div className="p-3">
    <button
      className="inline-block  rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {text}
    </button>
    </div>
  );
}

export default Button;