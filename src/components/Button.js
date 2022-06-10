import React from "react";

function Button({ onclick, className, sideImage, text,disabled}) {
  return (
    <button
      className={`${className} font-bold  text-white p-2  rounded text-center text-base cursor-pointer `}
    >
      {text}
    </button>
  );
}

export default Button;