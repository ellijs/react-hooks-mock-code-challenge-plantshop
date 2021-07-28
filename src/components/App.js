import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [ plants, setPlants ] = useState([])
  const [ userInput, setUserInput ] = useState("")
  const [ newPrice, setNewPrice ] = useState("")

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

  function deleteItem(id) {
    
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    
    setPlants(plants.filter(plant=> plant.id !== id))
  }

  function upliftingPrice(id, formData) {
    console.log(id, formData)

    fetch(`http://localhost:6001/plants/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    }).then(resp => resp.json())
    .then(data => {
      const updatedPriceList = [...plants]
      setPlants(updatedPriceList.map(plant=> {
        if(plant.id === data.id){
          plant.price = data.price
          return plant
        } else {
          return plant
        }
      })
      )
    })
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredSearchItems()} handleSubmittedData={handleSubmittedData} handleSearch={handleSearch} deleteItem={deleteItem} upliftingPrice={upliftingPrice}/>
    </div>
  );
}

export default App;
