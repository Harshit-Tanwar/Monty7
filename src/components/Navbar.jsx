import React from "react";
import { href } from "react-router-dom";

const nav = [
  { name: "Home", href: "#", current: true },
  { name: "Inplay", href: "#", current: false },
  { name: "Cricket", href: "#", current: false },
  { name: "Football", href: "#", current: false },
  { name: "Tennis", href: "#", current: false },
  { name: "GreyHound", href: "#", current: false },
  { name: "Horse Race", href: "#", current: false },
  { name: "Casino", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b-white border p-2 mb-4">
      <div className="flex space-x-4">
        {nav.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-linear-to-b from-[#E6D39B] to-[#593A1E] text-white"
                : "text-white hover:bg-linear-to-b from-[#E6D39B] to-[#593A1E] hover:text-white",
              "rounded-md px-3 py-1 text-sm font-medium",
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-sm rounded-2xl bg-white">
          Login
        </button>
        <button className="px-3 py-1 text-sm rounded-2xl bg-linear-to-b from-[#E6D39B] to-[#593A1E]">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
