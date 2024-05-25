import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onToyLike }) {
  const toysDiplay = toys.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        onDelete={onDelete}
        onToyLike={onToyLike}
      />
    );
  });
  return <div id="toy-collection">{toysDiplay}</div>;
}

export default ToyContainer;
