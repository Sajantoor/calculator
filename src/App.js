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
      calculated: false,
    }
  }

  render() {
    return(
      <div className="App">
        <h1 className="display"> {this.state.content} </h1>

        <div className="keys">
          <div className="numbers">
            <button onClick={(e) => this.handleClick(e)}> 7 </button>
            <button onClick={(e) => this.handleClick(e)}> 8 </button>
            <button onClick={(e) => this.handleClick(e)}> 9 </button>
            <button onClick={(e) => this.handleClick(e)}> 4 </button>
            <button onClick={(e) => this.handleClick(e)}> 5 </button>
            <button onClick={(e) => this.handleClick(e)}> 6 </button>
            <button onClick={(e) => this.handleClick(e)}> 1 </button>
            <button onClick={(e) => this.handleClick(e)}> 2 </button>
            <button onClick={(e) => this.handleClick(e)}> 3 </button>
            <button onClick={(e) => this.handleClick(e)}> . </button>
            <button onClick={(e) => this.handleClick(e)}> 0 </button>
            <button onClick={this.clear}> AC </button>
          </div>

          <div className="operations">
            <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> + </button>
            <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> - </button>
            <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> x </button>
            <button className="operatorKeys" onClick={(e) => this.handleClick(e)}> ÷ </button>
            <button className="operatorKeys" onClick={this.calculate}> = </button>
          </div>
        </div>
      </div>
    )
  }

  handleClick(e) {
    let num = e.currentTarget.innerHTML.trim();
    let content = this.state.content;
    let operations = /[+÷x-]/;

    // multiple decimal check
    if (num === "." && content.includes('.')) {
      return;
    }

    let lastCharacter = content[content.length -1];

    if (lastCharacter.match(operations) && num.match(operations)) {
      return;
    }

    if (content === "0") {
      if (num === ".") {
        this.setState({content: "0" + num});
      } else {
        this.setState({content: num});
      }

    } else {
      this.setState({content: content + num});
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
      calc = calc.toString();
    } catch (error) {
      calc = "Error";
    }

    this.setState({content: calc, calculated: true});
  }
}

export default App;
