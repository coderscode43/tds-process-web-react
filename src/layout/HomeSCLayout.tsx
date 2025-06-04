import { Outlet } from "react-router-dom";
import TopBar from "@/components/navigation/TopBar";

const HomeSClayout = () => {
  return (
    <>
      <TopBar />
      <main>
        {/* Child routes will render here */}
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
