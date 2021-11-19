import React from "react";
import Bg from "../img/bg.jpg";
const Banner = () => {
  const bannerBg = {
    background: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const bannerInfo = {
    padding: "160px",
    background: "#007bff",
    opacity: "0.9",
    fontFamily: "Yuji Boku",
  };
  return (
    <div style={bannerBg}>
      <div className="banner-info text-white" style={bannerInfo}>
        <h2 style={{ fontSize: "60px" }}>
          {" "}
          Save Your Self <br /> Save The World
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
          numquam.
        </p>
        <button
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "5px",
            border: "none",
            color: "#007bff",
          }}
        >
          {" "}
          Book Appiontment{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
