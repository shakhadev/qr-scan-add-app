import React from "react";
import { useState } from "react";
import QRCode from "qrcode.react";
const Creator = () => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleText} />
      {text && <QRCode value={text} />}
    </div>
  );
};

export default Creator;
