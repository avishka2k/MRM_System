import React, { useEffect, useState } from "react";
import axios from "axios";

function Verification() {
  const [getuser, setgetuser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/getuser`)
      .then((res) => {
        setgetuser(res.data);
      });
  });

  return <div>Verification</div>;
}

export default Verification;
