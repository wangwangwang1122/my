import React, { Component } from "react";
import Hello from './Hello'
export default class App extends Component {
    render() {
      return (
        <div>
          <h3>App</h3>
          <Hello name="tom"></Hello>
        </div>
      )
    }
  
  }