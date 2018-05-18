import React, { Component } from 'react';
import PropTypes from 'prop-types';
import me3zieh from './Me3zieh';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';

class App extends Component {

  handleChange = (ev)=>{
   const v = ev.target.value;
   this.setState((prevState, props)=>{
     console.log(prevState) ; 
     console.log(props) ; 
     return {
        spanValue:v,
        inputValue:v
      }
    
    }
    )
    }
  state={
    inputValue :'boume3zah',
    spanValue:'span'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <span >{this.state.spanValue}</span>
        <br />
        <input
        ref={ (inp) => this.inputRef=inp}
        type="text"
        onChange={this.handleChange}
        value={this.state.inputValue}
        >
        </input>
      </div>
    );
  }
}

App.propTypes ={
  title:PropTypes.string
}

export default me3zieh(App);
