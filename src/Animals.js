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

  render() {
    return (
      <section className="animals-section">
        {this.state.animals.map(animal => (
          <article className="animal-card">
            <h2>{animal.name}</h2>
            <p>They eat {animal.diet}</p>
            <p>Fun Fact! {animal.fun_fact}</p>
          </article>
        ))}
      </section>
    );
  }
}
export default Animals;
