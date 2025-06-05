import { Outlet } from "react-router-dom";
import TopBar from "@/components/navigation/TopBar";
import SCSideBar from "@/components/navigation/SCSideBar";
import { useState } from "react";
import type { FC } from "react";

const HomeSClayout: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <TopBar toggleSidebar={toggleSidebar} />
      <SCSideBar isOpen={isOpen} />
      <main>
        {/* Child routes will render here */}
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
