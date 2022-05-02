import React from "react";
import msd from "../image/MS_Dhonji_PTI.avif";

function ImageDisp() {
  return (
    <>
      <div className="my--image">
        <img src={msd} alt="logo" />
      </div>
      <div className="my--info common--padding">
        <h2>MS Dhoni </h2>
        <h4>Indian Cricketer</h4>
      </div>
      <div className="my--btns common--padding">
        <button className="lin">Linkedin</button>
        <button className="goo">Google</button>
      </div>
    </>
  );
}

export default ImageDisp;
