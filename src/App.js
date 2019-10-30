import React, {Component} from "react";
import Description from "./components/Description";
import PriceForm from "./components/PriceForm";
import "./App.css";
import {userInput} from "./store";
import {observer, Provider} from "mobx-react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Provider>
          <PriceForm userInput={userInput}/>
          <Description userInput={userInput}/>
        </Provider>
      </div>
    );
  }
}

export default App;
