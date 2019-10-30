import {observable, action} from "mobx";

export default class UserInput {
  @observable price = '';

  @action setPrice(price) {
    this.price = price;
  }
}
