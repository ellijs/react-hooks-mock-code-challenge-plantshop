import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleSubmittedData, handleSearch }) {
  return (
    <main>
      <NewPlantForm handleSubmittedData={handleSubmittedData}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
