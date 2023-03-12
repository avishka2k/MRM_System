import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="md:h-screen flex flex-col justify-between">
      <div className="m-auto  space-y-[-5rem]">
        <p className="text-white font-bold text-[2rem] text-center">
          Page NotFound!
        </p>
        <p className="text-white font-bold text-[20rem] text-center">404</p>
        <p className="text-white font-bold pb-[8rem] text-[25px] text-center">
          Sorry about that! Please visit our <br /> hompage to get where you
          need to go.
        </p>
        <Link
          to="/"
          className="max-w-[12rem] flex m-auto text-white text-xl bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 h-14 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <p className="flex fle-row m-auto">Go To Home</p>
        </Link>
      </div>
    </div>
  );
}

export default NotFound