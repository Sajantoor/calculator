import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);

    this.state = {
      content: "0",
    }
  }

  render() {
    return(
      <div className="App">
        <h1 className="display"> {this.state.content} </h1>

        <div className="keys">
          <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> ÷ </button>
          <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> x </button>
          <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> - </button>
          <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> + </button>

          <button onClick={(e) => this.handleClick(e)}> 7 </button>
          <button onClick={(e) => this.handleClick(e)}> 8 </button>
          <button onClick={(e) => this.handleClick(e)}> 9 </button>

          <button className="operatorKeys" onClick={this.calculate}> = </button>

          <button onClick={(e) => this.handleClick(e)}> 4 </button>
          <button onClick={(e) => this.handleClick(e)}> 5 </button>
          <button onClick={(e) => this.handleClick(e)}> 6 </button>
          <button onClick={(e) => this.handleClick(e)}> 1 </button>
          <button onClick={(e) => this.handleClick(e)}> 2 </button>
          <button onClick={(e) => this.handleClick(e)}> 3 </button>
          <button onClick={(e) => this.handleClick(e)}> 0 </button>
          <button onClick={(e) => this.handleClick(e)}> . </button>
          <button onClick={this.clear}> AC </button>

        </div>
      </div>
    )
  }

  handleClick(e) {
    let num = e.currentTarget.innerHTML.trim();
    // multiple decimal check
    if (num === "." && this.state.content.includes('.')) {
      return;
    }

    if (this.state.content === "0") {
      if (num === ".") {
        this.setState({content: "0" + num});
      } else {
        this.setState({content: num});
      }

    } else {
      this.setState({content: this.state.content + num});
    }
  }

  clear() {
    this.setState({content: "0"});
  }

  calculate() {
    let str = this.state.content;
    if (str.includes('x')) {
      str = str.replace(/x/g, '*');
    }

    if (str.includes('÷')) {
      str = str.replace(/÷/g, '/');
    }

    let calc;

    try {
      calc = eval(str)
    } catch (error) {
      calc = "Error";
    }

    this.setState({content: calc});
  }
}

export default App;
