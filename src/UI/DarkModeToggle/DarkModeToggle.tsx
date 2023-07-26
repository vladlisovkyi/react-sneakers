import React, { memo } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";
import { useDarkMode } from "usehooks-ts";
const DarkModeToggle = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <button
      className={`mode-toggle relative overflow-hidden  rounded-[50%] w-10 h-10 flex justify-center items-center transition-all duration-200`}
      onClick={toggle}
    >
      {isDarkMode ? (
        <PiSunFill size={24} className=" text-yellow-400 mix-blend-multiply" />
      ) : (
        <BsFillMoonFill
          size={20}
          className="mix-blend-difference text-gray-300"
        />
      )}
      <div
        className={`absolute rounded-[50%] bg-[#fefefe] -z-10 w-full h-full 
               ${
                 isDarkMode
                   ? "translate-x-0 translate-y-0 scale-105"
                   : "translate-x-10 translate-y-2 scale-0"
               }
         transition-all duration-1000`}
      ></div>
      <div
        className={`absolute rounded-[50%] bg-darkbg -z-10 w-full h-full 
               ${
                 isDarkMode
                   ? "  -translate-x-10 translate-y-2 scale-0"
                   : "translate-x-0 translate-y-0 scale-105"
               }
        
         transition-all duration-1000`}
      ></div>
    </button>
  );
};

export default memo(DarkModeToggle);
