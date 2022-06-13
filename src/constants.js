import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { CgPlayButtonO } from "react-icons/cg";
// import { BsCalendarDate } from "react-icons/bs";
// import { GiRadarSweep } from "react-icons/gi";
// import { AiFillPlayCircle, AiOutlineClockCircle } from "react-icons/ai";
// import { MdCalendarToday } from "react-icons/md";

import card1Img from "./images/card1.webp";
import card2Img from "./images/card2.webp";
import card3Img from "./images/card3.webp";
import card4Img from "./images/card4.webp";
import card5Img from "./images/card5.webp";
import card6Img from "./images/card6.webp";
import card7Img from "./images/card7.webp";
import card8Img from "./images/card8.webp";
import card9Img from "./images/card9.webp";
import card10Img from "./images/card10.webp";
import card11Img from "./images/card11.webp";
import video1Img from "./images/video1.webp";
import video2Img from "./images/video2.webp";
import video3Img from "./images/video3.webp";
import video4Img from "./images/video4.webp";
import secondstory from "./images/secondstory.webp";

const navItems = [{ name: "Today" }, { name: "Hourly" },{ name: "10 Day" },{ name: "Weekend" },{ name: "Monthly" },{ name: "Radar" },{ name: "Video","icon": <CgPlayButtonO />},{ name: "More Forcats","icon":<BiDownArrow />,reverse:true }];
const cardDataItems = [{
     title:"When Will Monsoon Arrive Over Mumbai and Maharashtra This Year?",
     image:card1Img
 },
 {
    title:"Weekly Wrap (June 6-10): Top Stories of the Week",
    image:card2Img
},
{
    title:"Comedy Pet Photo Awards 2022 Return! (PHOTOS)",
    image:card3Img
},
]

const secondCardDataItems = [{
    title:"Very Heavy Rains to Batter Assam, Meghalaya, Arunachal This Week",
    image:card4Img
},
{
   title:"When Will Monsoon Arrive Over Goa?",
   image:card5Img
},
{
   title:"IMD’s Updated Forecast Predicts An Even Wetter Monsoon 2022",
   image:card6Img
},
{
    title:"Monsoon Rains To Be Normal Across India, High Over NW States",
    image:card7Img
},
]

const thirdCardDataItems = [{
    title:"Very Heavy Rains to Batter Assam, Meghalaya, Arunachal This Week",
    image:card8Img
},
{
   title:"When Will Monsoon Arrive Over Goa?",
   image:card9Img
},
{
   title:"IMD’s Updated Forecast Predicts An Even Wetter Monsoon 2022",
   image:card10Img
},
{
    title:"Monsoon Rains To Be Normal Across India, High Over NW States",
    image:card11Img
},
]
const videoCardDataItems = [{
    title:"Very Heavy Rains to Batter Assam, Meghalaya, Arunachal This Week",
    image:video1Img,
    "icon":<CgPlayButtonO />
},
{
   title:"When Will Monsoon Arrive Over Goa?",
   image:video2Img,
   "icon":<CgPlayButtonO />
},
{
   title:"IMD’s Updated Forecast Predicts An Even Wetter Monsoon 2022",
   image:video3Img,
   "icon":<CgPlayButtonO />
},
{
    title:"Monsoon Rains To Be Normal Across India, High Over NW States",
    image:video4Img,
    "icon":<CgPlayButtonO />
},
]

const mobileTopStoryCardDataItems = [{
    title:"Weekend Weather (June 11-12): Maharashtra, Goa, Arunachal Pradesh, Assam, Meghalaya to Witness Heavy Monsoon Rains",
    image:secondstory
},
{
   title:"When Will Monsoon Arrive Over Goa?",
   image:card1Img
},
{
   title:"IMD’s Updated Forecast Predicts An Even Wetter Monsoon 2022",
   image:card3Img
},
]

const mobileTopStoryCardTwoDataItems = [{
    title:"Heatwaves to Hold on to North, Central India From June 7-9",
    image:card9Img
},
{
   title:"Heatwaves to Hold on to North, Central India From June 7-9",
   image:card6Img
},
{
   title:"IMD’s Updated Forecast Predicts An Even Wetter Monsoon 2022",
   image:card5Img
},
{
    title:"Heatwaves to Hold on to North, Central India From June 7-9",
    image:video4Img
 },
 
 {
    title:"Heatwaves to Hold on to North, Central India From June 7-9",
    image:video3Img
 },
 
]

// const mobileFooterItems = [{
//    title:"Today",
//    image:<BsCalendarDate />
// },
// {
//   title:"Hourly",
//   image:<AiOutlineClockCircle />
// },
// {
//   title:"10 Day",
//   image:<MdCalendarToday />
// },
// {
//    title:"Radar",
//    image:<GiRadarSweep />
// },
// {
//    title:"video",
//    image:<AiFillPlayCircle />
// },
// ]
 export {navItems,cardDataItems,secondCardDataItems,thirdCardDataItems,videoCardDataItems,mobileTopStoryCardDataItems,mobileTopStoryCardTwoDataItems}
