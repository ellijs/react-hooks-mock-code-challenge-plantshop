import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [ soldOut, setSoldOut ] = useState(true)
  
  function handleSoldOut() {
     setSoldOut(!soldOut)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p><button className="primary">Edit Price</button><br/>
      {soldOut ? (
        <button onClick={handleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick={handleSoldOut} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
