import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Form1 from "./components/Form1.js";
import "./css/styles.css";

function App() {
  return (
    <div className="App">
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <Form1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
