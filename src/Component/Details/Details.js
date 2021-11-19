import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
const Details = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    let {id } = useParams();

    useEffect(() => {
      fetch("https://rahathahmed.github.io/servieJson/Data/services.json")
        .then((res) => res.json())
        .then((data) => {
          const p = data.find((p) => p.id === id);
          console.log("this is details", p);
          setServiceDetails(p);
        });
    }, [id]);

    console.log(serviceDetails);

    return (
      <div>
        <h2> {id}</h2>
        <div className="div"></div>
      </div>
    );
};

export default Details;