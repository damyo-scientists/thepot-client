import Axios from "axios";

export default class Conversion {
  constructor(price) {
    this.price = price;
    this.chickenPrice = 16000;
    this.gookbabPrice = 5000;
  }

  async gookbabPlace(place) {
    console.log(place);

    const response = await Axios.get(
      "https://thepot-dbserver.herokuapp.com/gookbabPlace"
    );

    let index = response.data.findIndex(function(item) {
      if (item.name === place) {
        return item;
      }
    });

    console.log(response.data[index]);
  }

  toConsoleLog() {
    this.gookbabPlace("이세카이");
  }

  toGookbab() {
    let gb = this.price / this.gookbabPrice;
    return gb;
  }

  toChicken() {
    let ck = this.price / this.chickenPrice;
    return ck;
  }
}
