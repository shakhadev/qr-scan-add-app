import React from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

import { useState, useEffect } from "react";
const Qrcode = () => {
  const [count, setCount] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("render", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, erroR);
    function success(result) {
      scanner.clear();
      setCount(result);
    }
    function erroR(err) {
      console.error(err);
    }
  }, []);
  return (
    <div className="bg-red-950 w-[200px]">
        <p className="text-4xl">salom</p>
      {count ? (
        <div>
          the result{" "}
          <a style={{ color: "red" }} href={"https://" + count}>
            {count}
          </a>
        </div>
      ) : (
        <div id="render"></div>
      )}
    </div>
  );
};

export default Qrcode;
