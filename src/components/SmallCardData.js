import React from "react";
// import { cardDataItems } from "../constants";

function SmallCardData({cardDataItems,className,title}) {
  console.log(cardDataItems);
  return (
    <div className={className}>
      {cardDataItems?.map((cardDataItem) => {
        return (
          <div>
          
           <div>
              <img
                className="rounded-lg"
                src={cardDataItem.image}
              />
            </div>
            <div className="mt-2 mb-4">
              <p class="text-black text-[14px] cursor-pointer hover:text-blue-500">
               {cardDataItem.title}
              </p>
            </div>
            </div>

      )})}
    </div>
  );
}

export default SmallCardData;
