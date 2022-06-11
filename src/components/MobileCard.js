import React from 'react'
import Button from './Button';

function MobileCard({className,mobileCardItems,mobileCardTwoItems}) {
  return (
    <div>
        <div className={`bg-white w-11/12 m-auto rounded-lg md:hidden block ${className}`}>
        <h2 className="text-[#2b2b2b] text-xl font-bold p-2">Top Stories</h2>
        <div className="md:grid md:gap-12 flex flex-row gap-1 overflow-auto overflow-y-hidden scrollbar-hide scroll-smooth">
          {mobileCardItems?.map((mobileCardItem)=>{
              return(
                <div class="rounded-lg  max-w-2xl p-3">
                <div className="md:min-w-[0] min-w-[72vw]">
                  <div>
                    <img
                      className="md:h-[15vh] w-[100%] rounded-lg"
                      src={mobileCardItem.image}
                      alt="man-with-umbrella"
                    />
                  </div>
                  <div className="mt-2 hover:text-blue-500 cursor-pointer md:text-[14px] text-[16px] text-[#2b2b2b] leading-[1.4] ">
                    <p>
                     {mobileCardItem.title}
                    </p>
                  </div>
                </div>
              </div>
              )
          })}
        </div>
        {/*  */}
        <div className="md:grid md:gap-12 flex flex-row gap-1 mt:2 md:mt-0 overflow-auto overflow-y-hidden scrollbar-hide scroll-smooth">
            {mobileCardTwoItems?.map((mobileCardTwoItem)=>{
                return (
                    <div class="rounded-lg  max-w-2xl p-3">
                    <div className="md:min-w-[0] min-w-[35vw]">
                      <div>
                        <img
                          className="md:h-[15vh] w-[100%] rounded-lg"
                          src={mobileCardTwoItem.image}
                          alt="man"
                        />
                      </div>
                      <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[15px] text-[#2b2b2b] leading-[1.2]">
                        <p>
                          {mobileCardTwoItem.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            })}
          
        </div>
       <Button text="Sea more"/>
      </div>
    </div>
  );
}


export default MobileCard