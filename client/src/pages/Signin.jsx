import React, { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="flex items-center place-content-center h-screen">
      <form className="flex flex-col w-[30rem] gap-5">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        />
        <button type="submit" className="bg-black text-white text-xl h-[4rem]">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signin;
