import React, { useState } from "react";

function AddDrug({ isOpen, onClose }) {
  const [drugname, setDrugname] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [supplier, setSupplier] = useState("");
  const [NDC, setNDC] = useState("");
  const [exDate, setExDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const ddd = () => {
    console.log(
      drugname + manufacturer + supplier + NDC + exDate + quantity + price
    );
  };

  return (
    <div className={`fixed  inset-0 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center place-content-center h-screen bg-black bg-opacity-50">
        <form onSubmit={ddd}>
          <div className="p-10 bg-white w-[60rem]">
            <div className="flex mb-10">
              <p className="font-bold text-2xl">Add new drug</p>
            </div>
            <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
              <div className="flex flex-col gap-3">
                <select
                  id="drug"
                  name="drug"
                  onChange={(e) => {
                    setDrugname(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl px-5 placeholder:text-black focus:border-none"
                >
                  <option value="">Select drug name</option>
                  <option value="drug1">Drug 1</option>
                  <option value="drug2">Drug 2</option>
                  <option value="drug3">Drug 3</option>
                  <option value="drug4">Drug 4</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Manufacturer"
                  onChange={(e) => {
                    setManufacturer(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Supplier"
                  onChange={(e) => {
                    setSupplier(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="NDC"
                  onChange={(e) => {
                    setNDC(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Select Expiration date"
                  onChange={(e) => {
                    setExDate(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="number"
                  placeholder="Quantity on hand"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="number"
                  placeholder="Unit price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
            </div>
            <div className="flex w-full mt-10 gap-[2rem]">
              <button
                onClick={() => onClose()}
                type="reset"
                className="bg-gray-200 w-full text-black text-xl h-[4rem] "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gray-400 w-full text-black text-xl h-[4rem]"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDrug;
