import React, { useState } from "react";

function NewPlantForm({ handleSubmittedData }) {
  const [ formData, setFormData ] = useState({
      id: "",
      name : "",
      image: "",
      price: ""
  })

  function handleChange (e) {
      const key = e.target.name
      const value = e.target.value

      setFormData({
        ...formData, [key]: value
      })
  }

  function onSubmitData(e) {
      e.preventDefault();
      handleSubmittedData(formData)

  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmitData}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
