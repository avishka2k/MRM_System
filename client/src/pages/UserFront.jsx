import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserFront() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/getdrug`)
      .then((response) => {
        setAPIData(response.data);
      });
  });

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  const showall = () => {
    setSearchInput("");
  };

  return (
    <div>
      <div className="bg-white fixed w-full h-20 flex">
        <div className="container m-auto justify-between flex items-center">
          <div className="font-bold text-xl">LOGO</div>
          <div className="flex gap-5 items-center">
            <div onClick={showall} className="cursor-pointer">
              Show all pharmacies
            </div>
            <Link
              className="border-black border text-xl px-5 py-2 placeholder:text-black focus:border-none"
              to="/pharmacy-login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full pb-20 pt-[10rem] px-[30rem] bg-slate-100  text-black">
        <div className="container  m-auto">
          <div className="flex">
            <select
              id="drug"
              name="drug"
              className="border-black border-l border-y h-[4rem] text-xl px-5 placeholder:text-black focus:border-none"
            >
              <option value="">All item</option>
              {/* {searchInput.length > 1
                ? filteredResults.map((drug) => {
                    return <option value="drug1">{drug.drugname}</option>;
                  })
                : APIData.map((drug) => {
                    return <option value="drug1">{drug.drugname}</option>;
                  })} */}
            </select>
            <input
              type="text"
              placeholder="Search your medicine here"
              onChange={(e) => searchItems(e.target.value)}
              className="border-black border h-[4rem] w-full text-xl p-5 placeholder:text-black focus:border-none"
              required
            />
          </div>
        </div>
        <div className="grid-cols-2 mt-10 grid gap-5">
          {searchInput.length > 1 ? (
            filteredResults.length > 0 ? (
              filteredResults.map((drug) => {
                return (
                  <div
                    key={drug._id}
                    className="flex-col flex p-5 gap-3 bg-gray-300"
                  >
                    <p className="">Drug name: {drug.drugname}</p>
                    <p className="">Price: {drug.price}</p>
                    <p className="">Location: {drug.manufacturer}</p>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-row text-center">No results found.</div>
            )
          ) : (
            APIData.map((drug) => {
              return (
                <div
                  key={drug._id}
                  className="flex-col flex p-5 gap-3 bg-gray-300"
                >
                  <p className="">Drug name: {drug.drugname}</p>
                  <p className="">Price: {drug.price}</p>
                  <p className="">Location: {drug.manufacturer}</p>
                </div>
              );
            })
          )}

          {/* {listOfDrugs.length !== 0 ? (
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
          )} */}
        </div>
      </div>
    </div>
  );
}

export default UserFront;
