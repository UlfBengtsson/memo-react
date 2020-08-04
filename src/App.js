import React, { Component } from "react";
import NameList from "./NameList";
import "./App.css";

class App extends Component {
  state = {
    memoList: ["Java", "C#", "Basic"],
    newMemo: "Type new Memo here",
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <NameList listNames={this.state.memoList} />
        </div>
        <div>
          <input
            id="newMemo"
            name="newMemo"
            type="text"
            placeholder="Type new Memo here"
            value={this.state.newMemo}
            onChange={this.changeText}
          />
          <button onClick={this.saveMemo}>Save memo</button>
        </div>
      </div>
    );
  }

  changeText = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  saveMemo = () => {
    let orginal = this.state.memoList;
    orginal.push(this.state.newMemo);
    this.setState({
      memoList: orginal,
      newMemo: "Type new Memo here",
    });
  };
}

export default App;
