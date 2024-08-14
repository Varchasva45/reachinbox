import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoEllipse } from "react-icons/io5";

const HorizontalNavbar = ({setIsDarkMode, isDarkMode}) => {
  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log(isDarkMode);
  };

  return (
    <div className="w-[1384px] h-[68px] absolute left-[56px] p-[24px_24px_24px_24px] gap-[24px] border border-navBorder border-l-0 bg-navbackground flex items-center justify-between">
      {/* Frame */}
      <div className="w-[127px] h-[22px] gap-[32px] flex items-center">
        {/* Text */}
        <div className="w-[127px] h-[22px] text-navText text-[16px] font-[700] leading-[21.79px] flex items-center">
          Onebox
        </div>
      </div>

      {/* Additional Component */}
      <div className="w-[196px] h-[24px] gap-[8px] flex items-center">
        
        {/* First Inner Component */}
        <div className="w-[51px] h-[24px] p-[3px_5px] gap-[7px] rounded-full border border-[#DADEE1] bg-[#E9EAEC] flex items-center justify-center relative cursor-pointer" onClick={handleClick}>
          {isDarkMode ? (
          <>
            <IoEllipse className="w-[16px] h-[16px] text-navText" />
            <MdOutlineDarkMode className="w-[13.5px] h-[13.5px] text-[#E8C364]" />
          </>
        ) : (
          <>
            <MdOutlineDarkMode className="w-[13.5px] h-[13.5px] text-[#E8C364]" />
            <IoEllipse className="w-[16px] h-[16px] text-navText" />
          </>
        )}
        </div>
        
        {/* Second Inner Component */}
        <div className="w-[113px] h-[22px] gap-[8px] flex items-center">
          {/* Content here (e.g., text or icon) */}
          <div className="w-[113px] h-[22px] text-[14px] font-[600px] leading-[21.79px] text-navText flex items-center">
            Tim's Workspace
          </div>
        </div>
        <IoIosArrowDown className="w-[16px] h-[16px] text-navText" />
      </div>
    </div>
  );
};

export default HorizontalNavbar;

