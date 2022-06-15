import React from "react";

function Button({text,Link}) {
  return (
    <div className="p-3">
      <a href={Link}>
    <button
      className="rounded-full px-6 py-2.5 text-white font-medium text-xs leading-normal  hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-[#1B4DE4] "
    >
      {text} 
    </button>
    </a>
    </div>
  );
}

export default Button;