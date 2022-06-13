import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import video1Img from "../images/video1.webp";
import Button from "./Button";

function VideoCard({text}) {
  return (
    <div>
      <div className="bg-white w-11/12 m-auto rounded-lg md:hidden block mt-4 px-4">
        <h2 className="text-[#2b2b2b] text-xl font-bold p-2">{text}</h2>
          <div>
            <div className="relative">
              <img className="rounded-lg" src={video1Img} />

              <div className="absolute top-[43%] left-[50%] right-[50%] text-white text-xl">
                <span className="text-2xl">
                  <CgPlayButtonO />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2 mb-4">
            <p class="text-black text-[14px] cursor-pointer hover:text-blue-500">
              Very Heavy Rains to Batter Assam, Meghalaya, Arunachal This Week
            </p>
          </div>
          <Button text="Read more" />
      </div>
     
    </div>
  );
}

export default VideoCard;
