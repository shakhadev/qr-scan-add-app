import React from "react";
import { useState } from "react";
import QRCode from "qrcode.react";
import { Wrapper } from "./style";
const Creator = () => {
  const [text, setText] = useState(false);
  const [link, setLink] = useState();
  const handleText = (e) => {
    setLink(e.target.value);
  };

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        if (link) {
          setText(true);
        }
      }}
    >
      <input type="text" onChange={handleText} />

      {text && <QRCode value={link} />}
      <button type="submit">Get Qr Code</button>
    </Wrapper>
  );
};

export default Creator;
