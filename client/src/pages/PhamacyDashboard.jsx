import React from "react";
import Navbar from "../components/Navbar";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import InventoryContent from "../components/InventoryContent";
import ProfileContent from "../components/ProfileContent";

function PhamacyDashboard() {
  const navigate = useNavigate();

  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Menu
          className="w-[15rem] mt-20 text-lg"
          onClick={({ key }) => {
            if (key === "SS") {
            } else {
              navigate(key);
            }
          }}
          items={[
            { label: "Inventory", icon: <MdLogout />, key: "/inventory" },
            {
              label: "Profile",
              icon: <MdOutlineInventory2 />,
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
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="w-full h-full pt-[8rem] bg-slate-100">
      <Routes>
        <Route path="/inventory" element={<InventoryContent />} />
        <Route path="/profile" element={<ProfileContent />} />
        <Route path="/logout" element={<div>Logout</div>} />
      </Routes>
    </div>
  );
}

export default PhamacyDashboard;
