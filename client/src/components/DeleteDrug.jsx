import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Popup from "reactjs-popup";

function DeleteDrug() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <FiEdit
        onClick={() => setShowPopup(true)}
        className="text-blue-600 text-xl cursor-pointer"
      />
      <Popup
        position="right center"
        open={showPopup}
        onClose={() => setShowPopup(false)}
      >
        <div className=" bg-black w-screen items-center flex flex-col h-screen bg-opacity-40">
          <div className=" bg-white w-[30rem] p-5 items-center m-auto">
            <p className=" font-bold text-2xl text-center">Are you sure ?</p>
            <p className=" text-center my-8">
              This item will be permanently deleted
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 w-full text-black text-xl h-[4rem]"
              >
                Cancel
              </button>
              <button className=" bg-red-500 w-full text-white text-xl h-[4rem]">
                Delete
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default DeleteDrug;
