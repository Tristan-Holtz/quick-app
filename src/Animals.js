import React from 'react';

const Animals = () => {
  const animalList = fetch('http://localhost:3001/api/v1/animals')
    .then(response => response.json())
    .then(animals =>
      animals.map(animal => {
        return (
          <article>
            <h2>{animal.name}</h2>
          </article>
        );
      })
    );
  return <section className="animals-section"></section>;
};

export default Animals;
