import React, { Component } from 'react';
import './Animals.css';
class Animals extends Component {
  state = {
    animals: []
  };

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
  }

  removeAnimal = e => {
    const toDelete = {
      method: 'DELETE',
      body: JSON.stringify({
        id: e.target.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(
      `http://localhost:3001/api/v1/animals/${e.target.value}`,
      toDelete
    ).catch(error => console.log(error));
    this.render();
  };

  render() {
    return (
      <section className="animals-section">
        {this.state.animals.map(animal => (
          <article className="animal-card">
            <h2>{animal.name}</h2>
            <p>They eat {animal.diet}</p>
            <p>Fun Fact! {animal.fun_fact}</p>
            <button value={animal.id} onClick={this.removeAnimal}>
              Delete!?
            </button>
          </article>
        ))}
      </section>
    );
  }
}
export default Animals;
