import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leocassio from './Leocassio'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Leocassio",
            email: "leocassiosilva1234@gmail.com"
        }
        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
        this.changeInput = this.changeInput.bind(this)

    }
    changeState() {
        this.setState({
            name: "Leocassio Silva"
        })
    }
    resetState(event) {
        let target = event.target
        let index = target.name
        this.setState({
            [index]:target.value
        })
    }

    changeInput() {
        this.setState({
            name: "Leocassio Silva"
        })
    }
  render (){
      return (
          <div className="App">
              <div>
              <form>
            <label>Nome</label>
            <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
             <label>Email</label>
            <input type="email" name="email" value= {this.state.email} onChange={this.changeInput}></input>
        </form>
        {this.state.name} - {this.state.email}
              </div>
            <button onClick = { this.changeState } > Mudar Estado </button> 
            <button onClick = { this.resetState } > Resetar Estado </button> 
          </div>
      );
  }
}

export default App;