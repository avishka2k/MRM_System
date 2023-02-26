import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [pname, setpname] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(0);
  const [license, setLicense] = useState(0);

  return (
    <div className="flex items-center place-content-center h-screen">
      <form className="flex flex-col w-[30rem] gap-5">
        <input
          type="text"
          placeholder="Pharmacy name"
          onChange={(e) => {
            setpname(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="number"
          placeholder="Phone number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="number"
          placeholder="Pharmacy license number"
          onChange={(e) => {
            setLicense(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <div className="flex flex-row my-2 gap-5">
          <input type="checkbox" className="" />
          <p>I agree to Terms of Service and Privacy Policy.</p>
        </div>
        <button type="submit" className="bg-black text-white text-xl h-[4rem]">
          Sign Up
        </button>
        <div className=" text-center mt-3">Already have an account? Sign in</div>
      </form>
    </div>
  );
}

export default Signup;
