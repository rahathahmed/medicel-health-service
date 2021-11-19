import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch("https://rahathahmed.github.io/servieJson/Data/services.json")
      .then((res) => res.json())
      .then((data) => {
            const ele = data.find((e) => e.id == id);
            setServiceDetails(ele);  
      })
  }, [id]);
  console.log(serviceDetails);

  return (
    <div>
     
      <div className="p-5">
        <div class="card" style={{width:'300px'}}>
          <img class="card-img-top" src={serviceDetails.img} alt="" />
          <div class="card-body">
            <h5 class="card-title">{serviceDetails.name}</h5>
            <p class="card-text">{serviceDetails.dsc}</p>
            <h5 class="card-title">{serviceDetails.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
