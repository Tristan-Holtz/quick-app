import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      diet: '',
      fun_fact: ''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.fun_fact);
  };

  getNewAnimal = () => {
    const animal = {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        diet: this.state.diet,
        fun_fact: this.state.fun_fact
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3001/api/v1/animals', animal)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <form>
        <label>ID</label>
        <input
          onChange={this.handleChange}
          name="id"
          placeholder="Enter number..."
        ></input>
        <label>Animal Name</label>
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="Enter animal name..."
        ></input>
        <label>Animal Diet</label>
        <input
          onChange={this.handleChange}
          name="diet"
          placeholder="Enter animal diet..."
        ></input>
        <label>Fun Fact</label>
        <input
          onChange={this.handleChange}
          name="fun_fact"
          placeholder="Enter animal fun fact..."
        ></input>
        <button onClick={this.getNewAnimal}>Submit</button>
      </form>
    );
  }
}

export default Form;
