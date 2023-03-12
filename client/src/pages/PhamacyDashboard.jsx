// import React from "react";
// import Navbar from "../components/Navbar";
// import { Menu } from "antd";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import { MdLogout } from "react-icons/md";
// import { MdOutlineInventory2 } from "react-icons/md";
// import InventoryContent from "../components/InventoryContent";
// import ProfileContent from "../components/ProfileContent";
// import { CgProfile } from "react-icons/cg";

// function PhamacyDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   return (
//     <div className="w-full">
//       <Navbar />
//       <div className="flex w-full fixed">
//         <Menu
//           className="w-[15rem] text-lg"
//           onClick={({ key }) => {
//             if (key === "SS") {
//             } else {
//               navigate(key);
//             }
//           }}
//           items={[
//             { label: "Inventory", icon: <MdOutlineInventory2 />, key: "/" },
//             {
//               label: "Profile",
//               icon: <CgProfile />,
//               key: "/profile",
//             },
//             {
//               label: "Logout",
//               icon: <MdLogout />,
//               danger: true,
//               onClick: handleLogout,
//             },
//           ]}
//         ></Menu>
//         <div className="overflow-y-scroll w-full h-screen">
//           <Content />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Content() {
//   return (
//     <div className="mb-20">
//       <Routes>
//         <Route path="/" element={<InventoryContent />} />
//         <Route path="/profile" element={<ProfileContent />} />
//       </Routes>
//     </div>
//   );
// }

// export default PhamacyDashboard;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import InventoryContent from "../components/InventoryContent";
import ProfileContent from "../components/ProfileContent";
import { CgProfile } from "react-icons/cg";
import LogOut from "../components/LogOut";

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

  return (
    <>
      <div className="">
        <Navbar navItem="Phamacy Name" />
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
