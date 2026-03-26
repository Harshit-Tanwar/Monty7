import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Slider from "../components/SliderSection";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar />
      <div className="overflow-hidden">
        <Navbar />
        <Banner />
        <Slider />
        <div className="flex justify-center my-6">
          <div className="bg-white px-10 py-8 rounded-xl">
            <h1 className="text-center text-2xl font-bold">
              100 % Safe and Secure platform
            </h1>
          </div>
        </div>
        <div className="text-white font-light p-4 text-sm">
            <p className="">
            Monty7 delivers a fast, secure, and skill-focused gaming experience
            across casino challenges and sports contests. With a wide range of
            trusted payment options, our platform ensures</p>
           <p> quick, smooth deposits
            and withdrawals—so you can stay focused on strategy, competition,
            and winning.
            </p>
            <p>Seamless transactions. Real competition. Pure
            performance.
          </p>
        </div>
        <h3 className="text-white p-4">© Copyright 2024. All Rights Reserved. Powered by Monty7.</h3>
      </div>
    </div>
  );
};

export default Home;
