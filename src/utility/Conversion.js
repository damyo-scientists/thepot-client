import DBServer from "../utility/DBServer";

let instance;
export default class Conversion {
  constructor(price, place = "강남") {
    if (instance) return instance;

    this.price = "";
    this.place = place;
    this.gookbabPrice = 5000;
    this.chickenPrice = 16000;
    this.data = "";
    this.getInitialData();

    instance = this;
  }

  async getInitialData(place = "강남") {
    let data = new DBServer();
    data = await data.recieveInfo();

    let index = data.findIndex(function(item) {
      if (item.name === place) {
        return item;
      }
    });

    this.gookbabPrice = data[index].lowprice;
    this.chickenPrice = data[index].highprice;
  }

  //////////////////////////
  // Render visualization //
  //////////////////////////

  setPrice(price) {
    this.price = price;
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
