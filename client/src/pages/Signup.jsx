import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const verification = false;
  const [cpassword, setCPassword] = useState("");
  const [pname, setpname] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(0);
  const [license, setLicense] = useState(0);
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();

    if (email.length === 0) {
      setErrormsg("Email can't be empty");
      return;
    } else if (pname.length === 0) {
      setErrormsg("Name can't be empty");
      return;
    } else if (password !== cpassword) {
      setErrormsg("Passwords don't match");
      return;
    } else {
      setErrormsg("");
    }

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/pharmacies/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pname,
          email,
          password,
          address,
          number,
          license,
          verification,
        }),
      }
    );

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/pharmacy-login");
    }
  }

  return (
    <>
      <div className="bg-white fixed w-full h-20 flex">
        <div className="container m-auto justify-between flex">
          <div className="font-bold text-xl">LOGO</div>
          <Link className=" text-blue-700" to="/">Home</Link>
        </div>
      </div>
      <div className="flex items-center place-content-center h-screen">
        <div className="flex flex-col w-[30rem] gap-5">
          {errormsg}
          <input
            type="text"
            placeholder="Pharmacy name"
            onChange={(e) => {
              setpname(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <input
            type="number"
            placeholder="Phone number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <input
            type="number"
            placeholder="Pharmacy license number"
            onChange={(e) => {
              setLicense(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
            className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
            required
          />
          <div className="flex flex-row my-2 gap-5">
            <input type="checkbox" className="" />
            <p>I agree to Terms of Service and Privacy Policy.</p>
          </div>
          <button
            onClick={registerUser}
            type="submit"
            className="bg-black text-white text-xl h-[4rem]"
          >
            Sign Up
          </button>
          <div className="text-center mt-3">
            Already have an account?{" "}
            <Link className="cursor-pointer text-blue-700" to="/pharmacy-login">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
