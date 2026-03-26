import React, { useRef, useState } from "react";

import GameCarousel from "./GameCarousel";
import Image1 from "../assets/casinoImages/live_01.png";
import Image2 from "../assets/casinoImages/live_02.png";
import Image3 from "../assets/casinoImages/live_03.jpg";
import Image4 from "../assets/casinoImages/live_04.png";
import Image5 from "../assets/casinoImages/live_05.jpg";
import Image6 from "../assets/casinoImages/live_06.png";
import Image7 from "../assets/casinoImages/live_07.png";
import Image8 from "../assets/casinoImages/live_08.png";

import Crash1 from "../assets/casinoImages/crash_01.png";
import Crash2 from "../assets/casinoImages/crash_02.png";
import Crash3 from "../assets/casinoImages/crash_03.png";
import Crash4 from "../assets/casinoImages/crash_04.png";
import Crash5 from "../assets/casinoImages/crash_05.png";
import Crash6 from "../assets/casinoImages/crash_06.png";

import Logo1 from "../assets/gameLogos/logo_1.png";
import Logo2 from "../assets/gameLogos/logo_2.png";
import Logo3 from "../assets/gameLogos/logo_3.png";
import Logo4 from "../assets/gameLogos/logo_4.png";
import Logo5 from "../assets/gameLogos/logo_5.png";
import Logo6 from "../assets/gameLogos/logo_6.png";
import Logo7 from "../assets/gameLogos/logo_7.png";
import Logo8 from "../assets/gameLogos/logo_8.png";
import Logo9 from "../assets/gameLogos/logo_9.png";

const Section = () => {
  const liveCasino = [
    { name: "Baccarat", pic: Image1 },
    { name: "Teen Patti", pic: Image2 },
    { name: "32 Cards", pic: Image3 },
    { name: "Crazy Time", pic: Image4 },
    { name: "Andar Bahar", pic: Image5 },
    { name: "Dragon Tiger", pic: Image6 },
    { name: "Roulette", pic: Image7 },
    { name: "Blackjack", pic: Image8 },
  ];

  const indianCasino = [
    { name: "Taj Treasure", pic: Image2 },
    { name: "Trio", pic: Image8 },
    { name: "24 Baccarat", pic: Image1 },
    { name: "Best Roulette", pic: Image7 },
    { name: "Bollywood Casino", pic: Image6 },
    { name: "Muflis Royale", pic: Image4 },
  ];
  
  const crashGames = [
     { pic : Crash1 },
     { pic : Crash2 },
     { pic : Crash3 },
     { pic : Crash4 },
     { pic : Crash5 },
     { pic : Crash6 },
  ]

  const logos = [
    {logo : Logo1},
    {logo : Logo2},
    {logo : Logo3},
    {logo : Logo4},
    {logo : Logo5},
    {logo : Logo6},
    {logo : Logo7},
    {logo : Logo8},
    {logo : Logo9},
  ]
  return (
    <div className="text-white min-h-screen my-4">
      <GameCarousel title={"Live Casino"} items={liveCasino} />
      <GameCarousel title={"Indian Casino"} items={indianCasino} />
      <GameCarousel title={"Crash Games"} items={crashGames} />
      <div className="mx-4 pb-4">
        <h1 className="mb-6 text-3xl font-bold">Game Provider</h1>
        <div className="flex flex-wrap gap-8">
          {logos.map((l)=>(
          <div className="w-64 h-20 p-3 bg-linear-to-b from-[#E6D39B] to-[#593A1E]  flex items-center justify-center">
            <img className="" src={l.logo} alt="" />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
