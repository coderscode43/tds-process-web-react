import NavBar from "@/components/navigation/NavBar";
import { Outlet } from "react-router-dom";

const HomeSClayout = () => {
  return (
    <>
      <NavBar />
      <main>
        {/* Child routes will render here */}
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
