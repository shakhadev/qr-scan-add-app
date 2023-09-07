import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", width:"80%", margin:"0 auto", alignItems:"center"}}>
      <NavLink to={"/scanner"}>
        <button>Scan QR Code</button>
      </NavLink>
      <NavLink to={"/generator"}>
        <button>Generate QR Code</button>
      </NavLink>
    </div>
  );
};

export default Home;
