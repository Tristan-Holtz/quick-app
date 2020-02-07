import React, { Component } from 'react';
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
    console.log(this.state.animals);
    return (
      <section className="animals-section">
        {this.state.animals.map(animal => (
          <article>
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
