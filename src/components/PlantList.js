import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, deleteItem, upliftingPrice }) {
  const renderPlants = plants.map((plant) => <PlantCard key={plant.id} plant={plant} deleteItem={deleteItem} upliftingPrice={upliftingPrice}/>)
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
