import React, { useState } from "react";
import PlantList from "./PlantList";

function PlantCard({ plant, deleteItem, upliftingPrice }) {
  const { name, image, price } = plant
  const [ soldOut, setSoldOut ] = useState(true)
  const [ editClicked, setEditClicked ] = useState(false)
 

  function updatePrice() {
    setEditClicked(!editClicked)
    console.log(plant.price)
  }
  
  function handleSoldOut() {
     setSoldOut(!soldOut)
  }

 
  
  function EditCard({ upliftingPrice }) {
    const [ newPrice, setNewPrice ] = useState(price)
    const [ inputPriceData, setInputPriceData ] = useState({
    price: ""
    })

    function handleUpdatePrice (e) {
      console.log(e.target.value)
      setNewPrice(e.target.value)
      const key = e.target.name
      const value = e.target.value
  
      setInputPriceData({
        ...inputPriceData, [key]:value
      }) 
    }

    function onSubmitPrice (e) {
      e.preventDefault()
      upliftingPrice(plant.id, inputPriceData)
      setEditClicked(!editClicked)
    }

    return(
      <>
        <input onChange={handleUpdatePrice} style={{border: "1px solid black"}} name="price" value={newPrice}></input>
        <button onClick={onSubmitPrice} className="primary">Update Price</button>
      </>)
  }

  function handleDelete() {
    deleteItem(plant.id)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      { editClicked? <EditCard upliftingPrice={upliftingPrice} plant={plant} /> :
      <>
      <p>Price: {price}</p><button onClick={updatePrice} className="primary">Edit Price</button><br/>
      {soldOut ? (
        <button onClick={handleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick={handleSoldOut} >Out of Stock</button>
      )}
      <button style={{margin: "10px"}} onClick={handleDelete} className="primary">Delete</button>
      </>
      }
    </li>
  );
}

export default PlantCard;
