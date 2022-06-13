import React from "react";

function SmallCardData({cardDataItems,className,title}) {
  console.log(cardDataItems);
  return (
    <div className={className}>
      {cardDataItems?.map((cardDataItem) => {
        return (
          <div>
          <div>
          
           <div>
             <div className="relative">
              <img
                className="rounded-lg"
                src={cardDataItem.image}
              />
             
              <div className="absolute top-[43%] left-[50%] right-[50%] text-white text-xl">
             <span>{cardDataItem.icon}</span>
              </div>
              </div>
            </div>
            <div className="mt-2 mb-4">
              <p class="text-black text-[14px] cursor-pointer hover:text-blue-500">
               {cardDataItem.title}
              </p>
            </div>
            </div>
</div>
      )})}
    </div>
  );
}

export default SmallCardData;
