import React, { useState } from "react";

function ProfileContent() {
  const [pname, setPname] = useState();
  return (
    <div className="w-full h-full text-black">
      <form action="">
        <div className="mx-20">
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
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
                className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <button
            type="reset"
            className="bg-gray-200 w-full text-black text-xl h-[5rem] m-20"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-400 w-full text-black text-xl h-[5rem] m-20"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileContent;
