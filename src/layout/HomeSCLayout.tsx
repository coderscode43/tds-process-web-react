import { Outlet } from "react-router-dom";
import TopBar from "@/components/navigation/TopBar";
// import SCSideBar from "@/components/navigation/SCSidebar";

const HomeSClayout = () => {
  return (
    <>
      <TopBar />
      {/* <SCSideBar /> */}
      <main>
        {/* Child routes will render here */}
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
