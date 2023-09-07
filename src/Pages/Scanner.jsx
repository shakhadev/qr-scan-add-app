import React from "react";
import Qrcode from "../components/Qrcode";
const Scanner = () => {
  return (
    <div style={{margin:"0 auto", width:"80%", justifyContent:"center", display:"flex"}}>
      <Qrcode />
    </div>
  );
};

export default Scanner;
