import React from 'react';
import './App.css';
import Form from './Form.js';
import Animals from './Animals.js';

const App = () => {
  return (
    <div className="App">
      <h1>Enter A New Animal!</h1>
      <Form />
      <Animals />
    </div>
  );
};

export default App;
