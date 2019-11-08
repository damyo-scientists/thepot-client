import { observable, action } from "mobx";

export default class UserInput {
  @observable price = "";
  @observable place = "";

  @action setPrice(price) {
    this.price = price;
  }

  @action setPlace(place) {
    this.place = place;
  }
}
