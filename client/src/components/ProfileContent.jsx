import React, { useState } from "react";

function ProfileContent() {
  const [pname, setPname] = useState();
  return (
    <div className="w-full max-w-[60rem] m-auto h-full text-black overflow-y-scroll">
      <form action="">
        <div className="mx-20 ">
          <div className="flex mb-10">
            <p className="font-bold text-2xl">Pharmacy Information</p>
          </div>
          <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
            <div className="flex flex-col gap-3">
              <label>Pharmacy's name</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Address</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Phone number</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Email</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Website</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Operating hours</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Pharmacy license</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
          </div>
        </div>
        <div className="mx-20 mt-10">
          <div className="flex mb-10">
            <p className="font-bold text-2xl">Owner Information</p>
          </div>
          <div className="gap-y-[2rem] gap-x-[2rem] grid-cols-2 grid">
            <div className="flex flex-col gap-3">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Address</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Owner phone number</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Owner email</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Owner NIC</label>
              <input
                type="text"
                onChange={(e) => {
                  setPname(e.target.value);
                }}
                className="border-black border h-[50px] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex mx-20 gap-x-[2rem] my-[2rem]">
          <button
            type="reset"
            className="bg-gray-200 w-full text-black text-xl h-[4rem] "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-400 w-full text-black text-xl h-[4rem] "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileContent;
