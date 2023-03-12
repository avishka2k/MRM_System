import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:${process.env.REACT_APP_PORT}/pharmacies/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      setTimeout(() => {
        window.location.href = "/pd";
      }, 2000);
      toast.success("Login successful");
    } else {
      toast.error("Please check your username and password");
    }
  }

  return (
    <>
      <div className="bg-white fixed w-full h-20 flex">
        <div className="container m-auto justify-between flex">
          <div className="font-bold text-xl">LOGO</div>
          <Link className=" text-blue-700" to="/">
            Home
          </Link>
        </div>
      </div>
      <div className="flex items-center place-content-center h-screen">
        <form onSubmit={loginUser} className="flex flex-col w-[30rem] gap-5">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
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
          <div className="">
            Not a member?{" "}
            <Link
              className="cursor-pointer text-blue-700"
              to="/pharmacy-register"
            >
              Sign up
            </Link>
          </div>
          <button
            type="submit"
            className="bg-black text-white text-xl h-[4rem]"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
