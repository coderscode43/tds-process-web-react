import React, { useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  page: string;
}

const menuItems: MenuItem[] = [
  {
    id: "selectCompany",
    label: "Home",
    icon: "fas fa-id-card",
    page: "selectCompany",
  },
  {
    id: "gstVerification",
    label: "GSTIN Verification",
    icon: "fas fa-check-circle",
    page: "validateGSTIN",
  },
  {
    id: "filingStatus",
    label: "Filing Status",
    icon: "fas fa-file-alt",
    page: "filingStatus",
  },
  {
    id: "utilities",
    label: "Utilities",
    icon: "fas fa-share-alt",
    page: "utilities",
  },
  {
    id: "importMasterData",
    label: "Import Master Data",
    icon: "fas fa-cloud-upload-alt",
    page: "importMasterData",
  },
  {
    id: "GSTProcess",
    label: "Process Details",
    icon: "far fa-file",
    page: "GSTProcess",
  },
  { id: "logs", label: "Logs", icon: "fas fa-history", page: "logs" },
  { id: "setting", label: "Setting", icon: "far fa-sun", page: "setting" },
];

const SCSideBar: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("selectCompany");
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMenuClick = (pageId: string) => {
    setActivePage(pageId);
    // Handle routing or logic here
    console.log(`Navigating to ${pageId}`);
  };

  return (
    <div
      className={`left-sidenav fixed top-5 left-0 z-[1000] h-[90%] overflow-hidden rounded-r-lg bg-[#edf2fa] transition-all duration-300 ${hovered ? "w-[240px] shadow-lg" : "w-16"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mt-3 px-2 text-lg font-medium">
        <ul className="left-sidenav-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex cursor-pointer items-center rounded-md p-3 transition-colors duration-200 ${
                activePage === item.id ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
              onClick={() => handleMenuClick(item.id)}
            >
              <div className="flex w-full items-center space-x-3">
                {hovered && <span>{item.label}</span>}
                <i className={`${item.icon} w-6 text-center text-xl`}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SCSideBar;
