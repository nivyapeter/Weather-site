import React from "react";
import CardMainData from "./CardMainData";
import SmallCardData from "./SmallCardData";
import {
  cardDataItems,
  secondCardDataItems,
  thirdCardDataItems,
  videoCardDataItems,
  mobileTopStoryCardDataItems,
  mobileTopStoryCardTwoDataItems,
} from "../constants";
import Button from "./Button";
import storyImg from "../images/story.png";
import secondStoryImg from "../images/secondstory.webp";
import Footer from "./Footer";
import MobileCard from "./MobileCard";
import VideoCard from "./VideoCard";

function MainBody() {
  return (
    <div className="bg-gradient-to-r from-[#003550] to-blue-200  mx-auto w-4/   ">
      <div class="flex flex-col">
        <div>
          <div className="md:flex-row md:w-5/6 2xl:w-[69%] m-auto py-2 gap-3 w-[93%] hidden md:flex">
            <div class="pt-3 max-w-2xl 2xl:max-w-4xl m-auto flex flex-row bg-white rounded-lg mt-20 md:mt-0">
              <div className="hidden md:block">
                <CardMainData
                  title="Top Stories"
                  img={storyImg}
                  subTitle="Heavy Rains to Lash Kerala, Karnataka, Tamil Nadu This Weekend;
          Heatwaves Likely over Coastal Andhra Pradesh, Telangana"
                  smallTitle="With thunderstorms and lightning also on the horizon, the IMD has
          issued a yellow watch over the region."
                  sideText="Read More"
                />
                <Button
                  text="Sea more"
                  Link="https://weather.com/en-IN/india/news"
                />
              </div>
              <div class="shadow-lg  p-3 mt-6 max-w-[22%] hidden md:block">
                <SmallCardData cardDataItems={cardDataItems} />
              </div>
            </div>
            {/* side data card */}
            <div className="bg-white rounded-lg w-3/5  h-[15%] hidden md:block">
              <div className="p-5">
                <span className="font-bold text-lg mb-0 mt-4 mr-4">
                  Stay Safe
                </span>
                <img src="https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60" />
              </div>
            </div>
          </div>

          {/* mobile view */}
          <MobileCard
            text="Top Stories"
            mobileCardItems={mobileTopStoryCardDataItems}
            mobileCardTwoItems={mobileTopStoryCardTwoDataItems}
            className="mt-28 "
          />
        </div>

        {/* weather section */}
        <div className="block md:flex flex-row md:w-5/6 w-11/12  2xl:w-[69%] m-auto py-2 gap-3">
          <div class="pt-3 max-w-2xl 2xl:max-w-4xl m-auto flex flex-col bg-white rounded-lg">
            <div>
              <CardMainData
                title="Weather Across India"
                img={secondStoryImg}
                subTitle="Weather Today (June 10): Heavy Rains to Lash Arunachal, Assam, Meghalaya; Heatwaves to Scorch Delhi, Haryana, Punjab"
                sideText="Read More"
                className="2xl-max-w-0"
              />

              <div class="p-3 mt-6 hidden md:block">
                <SmallCardData
                  cardDataItems={secondCardDataItems}
                  className="flex flex-row  justify-between gap-7"
                />
              </div>
              {/* <MobileCard /> */}
              <div className="hidden md:block">
                <Button
                  text="Sea more"
                  Link="https://weather.com/en-IN/india/news"
                />
              </div>
            </div>
            <MobileCard
              className="mt-1"
              mobileCardTwoItems={mobileTopStoryCardTwoDataItems}
            />
          </div>
          <div className="bg-white rounded-lg w-3/5  2xl:w-3/4  h-[15%]"></div>
        </div>

        {/* don't miss container */}
        <div className="flex-row w-5/6 m-auto py-2 gap-3 hidden md:flex 2xl:w-[69%]">
          <div class="pt-3 max-w-2xl 2xl:max-w-4xl m-auto flex flex-col bg-white rounded-lg">
            <div>
              <div class="p-3">
                <h2 className="mb-5 text-black text-xl font-bold">
                  Don't Miss
                </h2>
                <div>
                  <SmallCardData
                    cardDataItems={thirdCardDataItems}
                    className="flex flex-row  justify-between gap-5"
                  />
                </div>
              </div>
              <Button
                text="Sea more"
                Link="https://weather.com/en-IN/india/news"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg w-3/5 2xl:w-3/4  h-[15%]"></div>
        </div>
        {/*trends mobile view */}
        <MobileCard
          mobileCardTwoItems={mobileTopStoryCardTwoDataItems}
          text="Trending"
        />

        {/* video container */}
        <div className="flex-row w-5/6  py-2 gap-3 hidden md:flex 2xl:w-[69%] m-auto">
          <div class="bg-white pt-3 max-w-2xl 2xl:max-w-4xl flex flex-col rounded-lg m-auto">
            <div>
              <div class="p-3">
                <h2 className="text-xl mb-5 text-black font-bold">Top Video</h2>
                <SmallCardData
                  cardDataItems={videoCardDataItems}
                  className="flex flex-row  justify-between gap-5"
                />
              </div>
              <Button
                text="Sea more"
                Link="https://weather.com/en-IN/india/videos"
              />
            </div>
          </div>
          <div className="h-[15%] bg-white rounded-lg w-3/5  "></div>
        </div>
        <VideoCard text="Top Video" />
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
