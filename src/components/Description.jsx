import React, {Component} from "react";
import {inject, observer} from "mobx-react";

@inject('userInput')
@observer
class Description extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {userInput} = this.props;
    return (<div><h2>당신의 돈 국밥으로 환산해보셨습니까?</h2>
      <h3>당신이 알고싶은 국밥가 : {userInput.price}</h3></div>);
  }
}

export default Description;
