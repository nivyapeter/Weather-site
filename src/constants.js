import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { CgPlayButtonO } from "react-icons/cg";
import card1Img from "./images/card1.webp";
import card2Img from "./images/card2.webp";
import card3Img from "./images/card3.webp";
import card4Img from "./images/card4.webp";
import card5Img from "./images/card5.webp";
import card6Img from "./images/card6.webp";
import card7Img from "./images/card7.webp";
 
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


 export {navItems,cardDataItems,secondCardDataItems}
