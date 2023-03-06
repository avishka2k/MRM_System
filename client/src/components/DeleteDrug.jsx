import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Popup from "reactjs-popup";
import Axios from "axios";
import { toast } from "react-hot-toast";

function DeleteDrug(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [listOfDrug, setListOfDrug] = useState([]);

  const handleDelete = async (id) => {
    Axios.delete(
      `http://localhost:${process.env.REACT_APP_PORT}/delete/${id}`
    ).then((res) => {
      // Update the list of drugs after successful deletion
      setListOfDrug(listOfDrug.filter((drug) => drug.id !== id));
      toast.success("Successfully Deleted drug!");
    });
  };
  return (
    <div>
      <MdDeleteForever
        onClick={() => setShowPopup(true)}
        className="text-red-600 text-2xl cursor-pointer"
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
              <button
                onClick={() => handleDelete(props.id)}
                className="bg-red-500 w-full text-white text-xl h-[4rem]"
              >
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
