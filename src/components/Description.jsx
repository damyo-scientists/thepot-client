import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Conversion from "../components/Conversion";

@inject("userInput")
@observer
class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userInput } = this.props;
    let gb = new Conversion(userInput.price);
    return (
      <div>
        <h2>당신의 돈 국밥으로 환산해보셨습니까?</h2>
        <h3>당신이 알고싶은 국밥 갯수 : {gb.ToGookbab()}</h3>
        <h3>
          고것은{" "}
          <font size="40" color="yellow">
            {" "}
            {gb.ToChicken()}
          </font>{" "}
          치킨이구연
        </h3>
      </div>
    );
  }
}

export default Description;
