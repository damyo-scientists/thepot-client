import {userInput} from "../store";
import {inject, observer} from "mobx-react/dist/mobx-react";
import React, {Component} from "react";

@inject('userInput')
@observer
class PriceForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {userInput} = this.props;
    userInput.setPrice(event.target.value);
  }

  handleSubmit(event) {
    const {userInput} = this.props;
    let gookbabCount = parseInt(this.userInput.price, 10);

    const converted = gookbabCount / 5000;
    alert("고것은 " + converted + " 국밥이네요.");

    event.preventDefault();
  }

  render() {
    const {userInput} = this.props;
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          가격:
          <input
            type="text"
            value={userInput.price}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" className="btnClass" value="확인"/>
      </form>
    </div>)
  }
}

export default PriceForm;