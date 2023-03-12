import React, { useEffect, useState } from "react";
import axios from "axios";

function Verification() {
  const [getuser, setgetuser] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/getuser`)
      .then((res) => {
        setgetuser(res.data);
      });
  });

  return <div>Verification</div>;
}

export default Verification;
