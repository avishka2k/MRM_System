import React from "react";

function Navbar(props) {
  return (
    <div className="bg-white w-full h-20 flex">
      <div className="container m-auto justify-between flex">
        <div className="font-bold text-xl">LOGO</div>
        <div className="">{props.navItem}</div>
      </div>
    </div>
  );
}

export default Navbar;
