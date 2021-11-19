import React from "react";

const Freecampain = () => {
  const reg = () => {
    alert("Registration is closed ");
  };
  return (
    <div className="p-5">
      <img
        width="500px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfV6nIMYvsBtfnxalMgjEDw_1f3PM0b9JvzvG6Kgj5G9AalFj2grxOAPOOU-tGUzlF5k&usqp=CAU"
        alt=""
      />

      <button className="btn btn-primary" onClick={reg}>
        {" "}
        Click To Register{" "}
      </button>
    </div>
  );
};

export default Freecampain;
