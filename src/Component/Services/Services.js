import React, { useEffect, useState } from 'react';

import Servicedetails from '../Servicedetails/Servicedetails';


const Services = () => {
  const [services,setServices] =  useState([]);
  useEffect( ()=> {
    fetch("https://rahathahmed.github.io/servieJson/Data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[])
    return (
      <div className=" container p-4">
        <h2 className="text-center" style={{ fontFamily: "Yuji Boku" }}>
          Our Service
        </h2>
        <div className="row g-2">
          {services.map((service) => (
            <div className="col-md-4">
              <Servicedetails
                key={service.id}
                service={service}
              ></Servicedetails>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Services;

