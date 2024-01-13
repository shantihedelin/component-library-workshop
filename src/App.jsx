import React from "react";
import "./App.css";
import { SlCheck, SlMagicWand, SlBell } from "react-icons/sl";
import { WiCloud, WiDaySunny, WiDayRain } from "react-icons/wi";
import CustomButton from "./Button.jsx";
import CustomAlert from "./Alerts.jsx";
import CustomBadges from "./Badges.jsx";
import CustomCard from "./Cards.jsx";

export default function App() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-3xl">Button</h2>
        <div className="flex justify-center">
          <CustomButton color="pink" height={40} width={90} disabled={false} />
          <CustomButton color="grey" height={50} width={100}disabled={true} />
          <CustomButton color="darkred" height={60} width={110} disabled={false} />
        </div>
        <h2 className="text-3xl">Alert</h2>
        <div className="flex justify-center">
          <CustomAlert bgColor="#C4C4FC" textColor="#483D8B" icon={SlCheck} text={"Info Alert!"} />
          <CustomAlert bgColor="#C7B0C3" textColor="#A41051" icon={SlMagicWand} text={"Info Alert!"} />
          <CustomAlert bgColor="lightblue" textColor="#2800cc" icon={SlBell} text={"Info Alert!"}/>
        </div>
        <h2 className="text-3xl">Badge</h2>
        <div className="flex justify-center">
          <CustomBadges color={"#ffc0cb"} height={60} width={110} icon={WiCloud} iconColor={"#CB214E"} />
          <CustomBadges color={"#F88CAE"} height={50} width={100} icon={WiDaySunny} iconColor={"#7F1734"} />
          <CustomBadges color={"#997379"} height={40} width={90} icon={WiDayRain} iconColor={"#3a2300"}/>
        </div>
        <h2 className="text-3xl">Cards</h2>
        <div className="flex justify-center">
          <CustomCard
            color={"#b2d582"}
            size={100}
            imgSrc="https://resizing.flixster.com/gaXtT_qAbIG9wmB-VAaKtnLcOp8=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/286896_v9_bc.jpg"
            imgAlt="Image of Zac Efron "
            href="https://www.google.com/"
            className="m-2 mt-8 mb-10"
          >
            <p>Zac Efron</p>
          </CustomCard>
          <CustomCard
            color={"#b2d582"}
            size={100}
            imgSrc="https://www1.wdr.de/radio/1live/musik/neu-fuer-den-sektor/selena-gomez-174~_v-gseagaleriexl.jpg"
            imgAlt="Image of Selena Gomez"
            href="https://www.apple.com"
            className="m-2 mt-8 mb-10"
          >
            <p>Selena Gomez</p>
          </CustomCard>
          <CustomCard
            color={"#b2d582"}
            size={100}
            imgSrc="https://assets.teenvogue.com/photos/60b6775c2b29681ed91ba613/16:9/w_2560%2Cc_limit/img_4830.jpeg"
            imgAlt="Image of Olivia Ponton"
            href="https://chasacademy.se"
            className="m-2 mt-8 mb-10"
          >
            <p>Olivia Ponton</p>
          </CustomCard>
        </div>
      </div>
    </>
  );
}
