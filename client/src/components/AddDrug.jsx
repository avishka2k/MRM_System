import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import jwtDecode from 'jwt-decode'

function AddDrug({ isOpen, onClose }) {
  const [drugname, setDrugname] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [supplier, setSupplier] = useState("");
  const [ndc, setNDC] = useState("");
  const [exDate, setExDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [drugdatapy, setDrugdatapy] = useState([]);


  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  const addToList = () => {
    if (drugname.length === 0) {
      toast.error("Select drug name");
      return;
    } else if (
      manufacturer.length === 0 ||
      supplier.length === 0 ||
      ndc.length === 0 ||
      exDate.length === 0 ||
      quantity.length === 0 ||
      price.length === 0
    ) {
      toast.error("All fields are required!");
      return;
    }
    try {
      axios.post(`${process.env.REACT_APP_API_URL}/insert`, {
        drugname,
        manufacturer,
        supplier,
        ndc,
        exDate,
        quantity,
        price,
        pharmacy: user.email
      });
      toast.success("Successfully Added drug!");
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    axios.get(`https://blog-apis-blue.vercel.app/products`).then((res) => {
      setDrugdatapy(res.data);
    });
  }, []);

  return (
    <div className={`fixed inset-0 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center place-content-center h-screen bg-black bg-opacity-50">
        <div>
          <div className="p-10 bg-white w-[60rem]">
            <div className="flex mb-10">
              <p className="font-bold text-2xl">Add new drug</p>
            </div>
            <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
              <div className="flex flex-col gap-3">
                <label>Drug name</label>
                <select
                  id="drug"
                  name="drug"
                  onChange={(e) => {
                    setDrugname(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
                >
                  <option value="" selected="true" disabled>
                    Select drug name
                  </option>
                  {drugdatapy.map((drugpy, index) => {
                    return (
                      <option key={index} value={drugpy.drug_item}>
                        {drugpy.drug_item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label>Manufacturer</label>
                <input
                  placeholder="Manufacturer"
                  type="text"
                  onChange={(e) => {
                    setManufacturer(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Supplier</label>
                <input
                  type="text"
                  placeholder="Supplier"
                  onChange={(e) => {
                    setSupplier(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>National drug code</label>
                <input
                  type="text"
                  placeholder="NDC"
                  onChange={(e) => {
                    setNDC(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Expiration date</label>
                <input
                  type="date"
                  placeholder="Select Expiration date"
                  onChange={(e) => {
                    setExDate(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Quantity on hand</label>
                <input
                  type="number"
                  placeholder="Quantity on hand"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Unit price</label>
                <input
                  type="number"
                  placeholder="Unit price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="border-black border h-[50px] text-xl px-5 placeholder:text-black focus:border-none"
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
                onClick={addToList}
                className="bg-gray-400 w-full text-black text-xl h-[4rem]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDrug;
