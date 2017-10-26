import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      calcresult: 0,
      n1: 0,
      n2:0
    }
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    // SE EJECUTA CUANDO SE HA CARGADO EL COMPONENTE
  }
  handleInputChange(e) {
    switch (e.target.id) {
      case "n1":
          this.setState({
            n1:Number(e.target.value)
          })
        break;
      case "n2":
          this.setState({
            n2:Number(e.target.value)
          })
      break;
    }
  }
  handleResultClick(e) {
    switch (e.target.id) {
      case "sum":
          this.setState({
            calcresult:this.state.n1 + this.state.n2
          })
        break;

      default:
          this.setState({
            calcresult: 0
          })
      }
  }

  handleCountClick(e) {
    switch (e.target.id) {
      case "add":
          this.setState({
            count:this.state.count + 1
          })
        break;
      case "subs":
        if(this.state.count > 0)
        {
          this.setState({
            count:this.state.count - 1
          })
        }
        break;
      default:
        this.setState({
          count: 0
        })
    }
  }
  render() {
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>

        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subs" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2>Calculadora</h2>
        <p>
          <input id="n1" type="number" value={this.state.n1} onChange={this.handleInputChange}/>
          +
          <input id="n2" type="number" value={this.state.n2} onChange={this.handleInputChange} />
          <button id="sum" onClick={this.handleResultClick}>=</button>
          <button id="resetcalc" onClick={this.handleResultClick}>Reset</button>
        </p>

        <h2>Result: {this.state.calcresult}</h2>
      </div>
    );
  }
}

export default Content;
