import React from "react";

const Sidebar = () => {
  const sideNav = [
    "Cricket",
    "FootBall",
    "Tennis",
    "Grey Hound",
    "Horse Race",
    "Casino",
    "Casino Bet History",
    "Change Password"
  ];

  return (
    <div className="w-94 h-screen border border-[#E6D39B] text-white">
      <div className="text-white w-full p-1 bg-linear-to-b from-[#E6D39B] to-[#593A1E]">
        <h1 className="text-center text-4xl font-bold">Monty7</h1>
      </div>
      <div className="p-4"> 
      {sideNav.map((item)=>(
      <div className="mb-4 flex gap-4 items-center">
        <div className="w-5 h-5 bg-linear-to-b from-[#E6D39B] to-[#593A1E] rounded-4xl">
          <img src="" alt="" />
        </div>
        <a className="text-sm">{item}</a>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Sidebar;
