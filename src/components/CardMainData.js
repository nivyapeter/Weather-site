import React from "react";

function CardMainData({title,subTitle,smallTitle,sideText,img}) {
  return (
    <div class="rounded-lg   max-w-2xl p-3">
      <h2 className="text-black text-xl font-bold">{title}</h2>
        <img
          className="rounded-lg"
          src={img}
        />
      <div class="mt-3">
        <p class="text-[#2B2B2B] text-2xl font-bold mb-4 cursor-pointer hover:text-blue-500">
          {subTitle}
        </p>
        <p className="mx-w-1lg text-[#393F40]">
          {smallTitle}
          <a className="text-blue-500" href="">
           {sideText}
          </a>
        </p>
        {/* <Button text="Sea more" /> */}
      </div>
  
    </div>
  );
}

export default CardMainData;
