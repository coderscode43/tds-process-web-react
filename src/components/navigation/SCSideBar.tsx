import { Link } from "react-router-dom";
import React from "react";

interface SCSidebarProps {
  isOpen: boolean;
}

interface SidebarItem {
  label: string;
  path: string;
  iconClass: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "TDS/TCS",
    path: "/selectCompany",
    iconClass: "fa-solid fa-indian-rupee-sign",
  },
  {
    label: "Add Token Number",
    path: "/addTokenNumber",
    iconClass: "fa-brands fa-medrt",
  },
  {
    label: "Bulk Import Detector",
    path: "/bulkImportDeductor",
    iconClass: "fa-solid fa-cloud-arrow-down",
  },
  {
    label: "15G/15H Status",
    path: "/15GHStatus",
    iconClass: "fa-solid fa-file-waveform",
  },
  {
    label: "Process Challan",
    path: "/processChallan",
    iconClass: "fa-solid fa-ticket",
  },
  {
    label: "Bulk PAN Verification",
    path: "/bulkPanVerification",
    iconClass: "fa-solid fa-square-check",
  },
  {
    label: "Utilities",
    path: "/utilities",
    iconClass: "fa-solid fa-share-nodes",
  },
  {
    label: "Calculator",
    path: "/calculator",
    iconClass: "fa-solid fa-calculator",
  },
  {
    label: "Process Detail",
    path: "/tdsProcess",
    iconClass: "fa-solid fa-file",
  },
  { label: "Logs", path: "/logs", iconClass: "fa-solid fa-clock-rotate-left" },
  { label: "Setting", path: "/setting", iconClass: "fa-solid fa-gear" },
];

const SCSideBar: React.FC<SCSidebarProps> = ({ isOpen }) => {
  return (
    <aside
      aria-label="Sidebar Navigation"
      className={`absolute top-16 z-10 transition-all duration-400 ease-in-out ${
        isOpen ? "left-0" : "-left-48"
      }`}
    >
      <nav className="h-screen w-60 rounded-r-md border border-gray-200 bg-gray-50 shadow">
        <ul className="mx-3 my-5 flex flex-col gap-5 overflow-hidden">
          {sidebarItems.map(({ label, path, iconClass }) => (
            <li key={path}>
              <Link
                to={path}
                className="flex w-full items-center justify-between rounded-sm p-2 transition-colors hover:bg-gray-200"
              >
                <span>{label}</span>
                <i className={iconClass} aria-hidden="true"></i>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SCSideBar;
