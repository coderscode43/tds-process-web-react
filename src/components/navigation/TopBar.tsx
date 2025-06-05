import React from "react";
import SCButton from "../component/SCButton";

interface TopBarProps {
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="border-b border-gray-200 shadow shadow-gray-200">
      <div className="flex items-center justify-between px-12">
        <div className="flex items-center justify-center gap-8">
          <div onClick={toggleSidebar}>
            <i className="fa-solid fa-bars cursor-pointer"></i>
          </div>
          <div>
            <img className="h-14 w-56" src="/logo/TOS.png" alt="Logo" />
          </div>
        </div>
        <div>
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
            TDS-O-Smart
          </h2>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div>
            <SCButton
              btnName="TDS Mapper"
              btnAlt="TDS Mapper Button"
              imgSrc="/gificons/OpenFolder.gif"
            />
          </div>
          <div>
            <img className="h-8 w-8" src="/images/user.png" alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
