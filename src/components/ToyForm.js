import React, { useState } from "react";

function ToyForm({ OnAddNewToys }) {
  const [toyData, setToyData] = useState({
    name: "",
    image: "",
    likes: 0,
  });
  // console.log(toyData);
  function handleInput(e) {
    const key = e.target.name;
    setToyData({ ...toyData, [key]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toyData),
    })
      .then((r) => r.json())
      .then((data) => OnAddNewToys(data));
    setToyData({ name: "", image: "" });
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyData.name}
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyData.image}
          onChange={handleInput}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
