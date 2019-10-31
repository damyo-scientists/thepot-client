import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("userInput")
@observer
class Description extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { userInput } = this.props;
    let gookbab = userInput.price / 5000;
    let chicken = userInput.price / 16000;
    return (
      <div>
        <h2>당신의 돈 국밥으로 환산해보셨습니까?</h2>
        <h3>당신이 알고싶은 국밥가 : {gookbab}</h3>
        <h3>
          고것은{" "}
          <font size="40" color="yellow">
            {" "}
            {chicken}{" "}
          </font>{" "}
          치킨이구연{" "}
        </h3>
      </div>
    );
  }
}

export default Description;
