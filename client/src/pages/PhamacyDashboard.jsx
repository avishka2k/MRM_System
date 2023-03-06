import React from "react";
import Navbar from "../components/Navbar";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import InventoryContent from "../components/InventoryContent";
import ProfileContent from "../components/ProfileContent";
import { CgProfile } from "react-icons/cg";

function PhamacyDashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex w-full fixed">
        <Menu
          className="w-[15rem] text-lg"
          onClick={({ key }) => {
            if (key === "SS") {
            } else {
              navigate(key);
            }
          }}
          items={[
            { label: "Inventory", icon: <MdOutlineInventory2 />, key: "/" },
            {
              label: "Profile",
              icon: <CgProfile />,
              key: "/profile",
            },
            {
              label: "Logout",
              icon: <MdLogout />,
              danger: true,
              key: "/logout",
            },
          ]}
        ></Menu>
        <div className="overflow-y-scroll w-full h-screen">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="mb-20">
      <Routes>
        <Route path="/" element={<InventoryContent />} />
        <Route path="/profile" element={<ProfileContent />} />
        <Route path="/logout" element={<div>Logout</div>} />
      </Routes>
    </div>
  );
}

export default PhamacyDashboard;
