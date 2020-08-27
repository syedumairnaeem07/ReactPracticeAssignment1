import React from 'react';
import './App.css';
import Table from './Table';

function App({year}) {
  return (
    <div className="App">
      <h1>React Practice Assignment 1</h1><br/>
      <p><strong>Hello from Umair! Let's Build something great!</strong></p>
      <br/>
      <ul>
        <li >JS {year}</li>
        <li>JSX {year}</li>
        <li>React Hooks {year}</li>
        <li>React Router {year}</li>
      </ul>
      <Table/>
      </div>
  );
}

export default App;
