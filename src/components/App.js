import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [ plants, setPlants ] = useState([])
  const [ userInput, setUserInput ] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(setPlants)
  }, [])

  function handleSubmittedData (formData) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })

    console.log(formData)
    const newPlantList = [...plants, formData]
    setPlants(newPlantList)
  }

  function handleSearch (value) {
      setUserInput(value)
  }

  function filteredSearchItems () {
    if(!userInput) {
      return plants
    } else {
      return plants.filter(plant => plant.name.toLowerCase().includes(userInput.toLowerCase()))
    }
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredSearchItems()} handleSubmittedData={handleSubmittedData} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
