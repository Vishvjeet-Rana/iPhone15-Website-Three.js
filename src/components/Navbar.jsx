import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <div>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center ">
        <nav className=" flex w-full screen-max-width">
          <img src={appleImg} height={18} width={14} alt="Apple image" />

          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
              <div
                key={nav}
                className="px-5 cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            ))}
          </div>

          {/* search image div */}
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} height={18} width={18} alt="search image" />
            <img src={bagImg} height={18} width={18} alt="bag image" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
