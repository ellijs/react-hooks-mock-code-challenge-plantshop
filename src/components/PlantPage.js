import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleSubmittedData, handleSearch, deleteItem, upliftingPrice }) {
  return (
    <main>
      <NewPlantForm handleSubmittedData={handleSubmittedData}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants} deleteItem={deleteItem} upliftingPrice={upliftingPrice}/>
    </main>
  );
}

export default PlantPage;
