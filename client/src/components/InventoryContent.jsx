import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import AddDrug from "./AddDrug";
import Axios from "axios";
import DeleteDrug from "./DeleteDrug";

function InventoryContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [listOfDrug, setListOfDrug] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Axios.get(`http://localhost:${process.env.REACT_APP_PORT}/getdrug`).then(
      (res) => {
        setListOfDrug(res.data);
      }
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(listOfDrug.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <div className="w-full text-black">
        <div className="mx-20">
          <div className="flex justify-between mb-10">
            <p className="font-bold text-2xl">Inventory</p>
            <button
              onClick={() => setIsOpen(true)}
              className="border border-black bg-gray-300 py-4 px-8"
            >
              Add New drug
            </button>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs h-16 uppercase bg-gray-300  text-black">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Drug name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Manufacturer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Supplier
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NDC
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Expiration date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfDrug.length !== 0 ? (
                  listOfDrug &&
                  listOfDrug.length > 0 &&
                  listOfDrug.slice(startIndex, endIndex).map((drug, index) => (
                    // <li key={userObj.id}>{userObj.drugname}</li>
                    <tr key={drug._id} className="bg-white text-black border-b">
                      <td className="px-6 py-4">{startIndex + index + 1}</td>
                      <td className="px-6 py-4">{drug.drugname}</td>
                      <td className="px-6 py-4">{drug.manufacturer}</td>
                      <td className="px-6 py-4">{drug.supplier}</td>
                      <td className="px-6 py-4">{drug.ndc}</td>
                      <td className="px-6 py-4">{drug.exDate}</td>
                      <td className="px-6 py-4">{drug.quantity}</td>
                      <td className="px-6 py-4">
                        <span>$</span>
                        {drug.price}
                      </td>
                      <td className="px-6 py-4  flex gap-10 items-center">
                        <FiEdit className="text-blue-600 text-xl cursor-pointer" />
                        <DeleteDrug id={drug._id} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className=" text-gray-600">
                    <td className="pl-5 py-5">No Drugs item inserted</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="flex justify-end my-5 gap-3">
              <button
                disabled={currentPage === 1}
                onClick={handlePrevPage}
                className={`bg-gray-400 px-4 py-2 ${
                  currentPage === 1 ? "opacity-30" : ""
                }`}
              >
                {"<"}
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
                className={`bg-gray-400 px-4 py-2 ${
                  currentPage === totalPages ? "opacity-30" : ""
                }`}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddDrug isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

export default InventoryContent;
