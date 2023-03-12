
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdOutlineInventory2 } from "react-icons/md";
import InventoryContent from "../components/InventoryContent";
import ProfileContent from "../components/ProfileContent";
import { CgProfile } from "react-icons/cg";
import LogOut from "../components/LogOut";
import jwtDecode from 'jwt-decode'

function PhamacyDashboard() {
  const tabs = [
    {
      icon: <MdOutlineInventory2 />,
      label: "Inventory",
      content: <InventoryContent />,
    },
    { icon: <CgProfile />, label: "Profile", content: <ProfileContent /> },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

const Tab = ({ icon, label, isActive, onClick }) => {
  return (
    <li
      className={`cursor-pointer flex p-2 items-center gap-3 ${
        isActive ? "active bg-blue-100 text-blue-800" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </li>
  );
};

const TabContent = ({ content }) => {
  return (
    <div className=" w-full h-screen pb-20 overflow-y-scroll scrollbar-hide">
      {content}
    </div>
  );
};

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  return (
    <>
      <div className="">
        <Navbar navItem={user.email} />
        <div className="flex fixed w-full">
          <ul className="w-[15rem] h-screen text-lg">
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                icon={tab.icon}
                isActive={tab === activeTab}
                onClick={() => handleTabClick(tab)}
              />
            ))}
            <LogOut/>
          </ul>
          
          <TabContent content={activeTab.content} />
        </div>
      </div>
    </>
  );
};

export default PhamacyDashboard;
