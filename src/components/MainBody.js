import React from "react";
import CardMainData from "./CardMainData";
import SmallCardData from "./SmallCardData";
import { cardDataItems, secondCardDataItems } from "../constants";
import Button from "./Button";
import storyImg from "../images/story.png";
import secondStoryImg from "../images/secondstory.webp";

function MainBody() {
  return (
    <div className=" bg-slate-500 mx-auto w-4/   ">
      <div class="flex flex-col">
        <div>
          <div className="flex flex-row w-3/4 m-auto py-2 gap-3">
            <div class="pt-3 max-w-2xl m-auto flex flex-row bg-white rounded-lg">
              <div>
                <CardMainData
                  title="Top Stories"
                  img={storyImg}
                  subTitle="Heavy Rains to Lash Kerala, Karnataka, Tamil Nadu This Weekend;
          Heatwaves Likely over Coastal Andhra Pradesh, Telangana"
                  smallTitle="With thunderstorms and lightning also on the horizon, the IMD has
          issued a yellow watch over the region."
                  sideText="Read More"
                />
                <Button text="Sea more" />
              </div>
              <div class="shadow-lg  p-3 mt-6 max-w-[22%]">
                <SmallCardData cardDataItems={cardDataItems} />
              </div>
            </div>
            <div className="bg-white rounded-lg w-3/5  h-[15%]">
              <div className="p-5">
                <span className="font-bold text-lg mb-0 mt-4 mr-4">
                  Stay Safe
                </span>
                <img src="https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-3/4 m-auto py-2 gap-3">
          <div class="pt-3 max-w-2xl m-auto flex flex-col bg-white rounded-lg">
            <div>
              <CardMainData
                title="Weather Across India"
                img={secondStoryImg}
                subTitle="Weather Today (June 10): Heavy Rains to Lash Arunachal, Assam, Meghalaya; Heatwaves to Scorch Delhi, Haryana, Punjab"
                sideText="Read More"
              />

              <div class="p-3 mt-6">
                <SmallCardData
                  cardDataItems={secondCardDataItems}
                  className="flex flex-row  justify-between gap-7"
                />
              </div>
              <Button text="Sea more" /> 
            </div>
            {/* <div class="shadow-lg  p-3 mt-6 max-w-[22%]">
            <SmallCardData cardDataItems={secondCardDataItems} className="flex flex-col"/>
          </div> */}
          </div>
          <div className="bg-white rounded-lg w-3/5  h-[15%]"></div>
        </div>
        <div className="flex flex-row w-3/4 m-auto py-2 gap-3">
          <div class="pt-3 max-w-2xl m-auto flex flex-col bg-white rounded-lg">
            <div>
           <div class="p-3 mt-6">
               <h2>Don't Miss</h2>
                <SmallCardData
                  cardDataItems={secondCardDataItems}
                  className="flex flex-row  justify-between gap-7"
                />
              </div>
              <Button text="Sea more" /> 
            </div>
          </div>
          <div className="bg-white rounded-lg w-3/5  h-[15%]"></div>
        </div>
        <div className="flex flex-row w-3/4 m-auto py-2 gap-3">
          <div class="pt-3 max-w-2xl m-auto flex flex-col bg-white rounded-lg">
            <div>
           <div class="p-3 mt-6">
               <h2>Top Video</h2>
                <SmallCardData
                  cardDataItems={secondCardDataItems}
                  className="flex flex-row  justify-between gap-7"
                />
              </div>
              <Button text="Sea more" /> 
            </div>
          </div>
          <div className="bg-white rounded-lg w-3/5  h-[15%]"></div>
        </div>
        
      </div>
    </div>
  );
}

export default MainBody;
