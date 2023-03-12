import React, { useState } from "react";
import Popup from "reactjs-popup";
import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";

function LogOut() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    
    toast.success("Successfully logged out");
  };

  return (
    <div>
      <li
        onClick={() => setShowPopup(true)}
        className="cursor-pointer flex p-2 items-center gap-3"
      >
        <MdLogout /> <p>Logout</p>
      </li>

      <Popup
        position="right center"
        open={showPopup}
        onClose={() => setShowPopup(false)}
      >
        <div className=" bg-black w-screen items-center flex flex-col h-screen bg-opacity-40">
          <div className=" bg-white w-[30rem] p-5 items-center m-auto">
            <p className=" font-bold text-2xl text-center">Are you sure?</p>
            <p className=" text-center my-8">
              Are you sure want to sign out?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 w-full text-black text-xl h-[4rem]"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 w-full text-white text-xl h-[4rem]"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default LogOut;
