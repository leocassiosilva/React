import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leocassio from './Leocassio'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Leocassio"
        }
        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    changeState() {
        this.setState({
            name: "Leocassio Silva"
        })
    }
    resetState() {
        this.setState({
            name: "Leocassio"
        })
    }

    render() {
        return ( < div className = "App" >
            <
            div > { this.state.name } <
            /div>  <
            div >
            <
            button onClick = { this.changeState } > Mudar Estado < /button> </div >
            <
            div >
            <
            button onClick = { this.resetState } > Resetar Estado < /button> </div >

            <
            /div>
        );
    }
}

export default App;