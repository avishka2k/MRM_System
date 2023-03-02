import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios  from "axios";

function UserFront(getdata) {
  const [search, setSearch] = useState("");
  const [listOfDrugs, setListOfDrugs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_PORT}/getdrug`).then((res) => {
      setListOfDrugs(res.data);
    });
  });
  return (
    <div>
      <div className="bg-white fixed w-full h-20 flex">
        <div className="container m-auto justify-between flex">
          <div className="font-bold text-xl">LOGO</div>
          <div className="">Show all pharmacies</div>
        </div>
      </div>
      <div className="w-full h-screen pt-[10rem] px-[30rem] bg-slate-100  text-black">
        <div className="container  m-auto">
          <div className="flex">
            <select
              id="drug"
              name="drug"
              onChange={(e) => {
                //setDrugname(e.target.value);
              }}
              className="border-black border-l border-y h-[4rem] text-xl px-5 placeholder:text-black focus:border-none"
            >
              <option value="">All item</option>
              <option value="drug1">Drug 1</option>
              <option value="drug2">Drug 2</option>
              <option value="drug3">Drug 3</option>
              <option value="drug4">Drug 4</option>
            </select>
            <input
              type="text"
              placeholder="Search your medicine here"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border-black border h-[4rem] w-full text-xl p-5 placeholder:text-black focus:border-none"
              required
            />
            <button className="border-r border-y border-black w-[10rem] bg-gray-300">
              Search
            </button>
          </div>
        </div>
        <div className="grid-cols-2 mt-10 grid gap-5">
          {listOfDrugs.length !== 0 ? (
            listOfDrugs &&
            listOfDrugs.length > 0 &&
            listOfDrugs.map((drug, index) => (
              <div
                key={drug._id}
                className="flex-col flex p-5 gap-3 bg-gray-300"
              >
                <p className="">Drug name: {drug.drugname}</p>
                <p className="">Price: {drug.price}</p>
                <p className="">Location: {drug.price}</p>
              </div>
            ))
          ) : (
            <div className=" text-gray-600">
              <p className="pl-5 py-5">No Drugs item inserted</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserFront;
