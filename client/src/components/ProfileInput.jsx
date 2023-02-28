import React, { useState } from "react";

function ProfileInput(props) {
  const [pname, setPname] = useState();

  return (
    <div className="flex flex-col gap-3">
      <label>{props.lable}</label>
      <input
        type="text"
        onChange={(e) => {
          setPname(e.target.value);
        }}
        className="border-black border h-[4rem] text-xl p-5 placeholder:text-black focus:border-none"
        {...props.rqe}
      />
    </div>
  );
}

export default ProfileInput;
