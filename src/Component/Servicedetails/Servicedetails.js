import React from "react";
import { Link } from "react-router-dom";

const Servicedetails = ({ service }) => {
  
  const { id, name, dsc, img, price } = service;
  return (
    <div>
      <div className="card text-center">
        <img
          className="card-img-top"
          src={img}
          style={{ width: "100%", height: "220px" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{dsc}</p>
          <h5 className="card-title text-primary"> $ {price}</h5>
          <Link to={`/details/${id}`} className="btn btn-primary">
            Booking{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Servicedetails;
