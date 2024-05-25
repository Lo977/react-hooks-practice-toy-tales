import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isToys, setIsToys] = useState([]);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => setIsToys(toys));
  }, []);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

  function handleAddNewToys(newToy) {
    setIsToys([...isToys, newToy]);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleDelete(selectedToy) {
    const deletedToy = isToys.filter((toy) => toy.id !== selectedToy.id);
    setIsToys(deletedToy);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleLike(likedToy) {
    const updatedLike = isToys.map((toy) =>
      toy.id === likedToy.id ? likedToy : toy
    );
    setIsToys(updatedLike);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

  return (
    <>
      <Header />
      {showForm ? <ToyForm OnAddNewToys={handleAddNewToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={isToys}
        onDelete={handleDelete}
        onToyLike={handleLike}
      />
    </>
  );
}

export default App;
