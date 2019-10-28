import React, { Component } from "react";
import logo from "./logo.svg";
import Description from "./components/Description";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let gookbabCount = parseInt(this.state.value, 10);

    let converted = gookbabCount / 5000;
    alert("고것은 " + converted + " 국밥이네요.");

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            가격:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" class="btnClass" value="확인" />
        </form>
        <Description />
      </div>
    );
  }
}

export default App;
