import React from 'react';

const Animals = () => {
  fetch('http://localhost:3001/api/v1/animals')
    .then(response => response.json())
    .then(data => animalElements(data));

  const animalElements = animals => {
    animals.map(animal => (
      <article>
        <h2>{animal.name}</h2>
      </article>
    ));
  };

  return <section className="animals-section">{animalElements}</section>;
};

export default Animals;
