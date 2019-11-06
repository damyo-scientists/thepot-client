export default class Conversion {
  constructor(price) {
    this.price = price;
    this.chickenPrice = 16000;
    this.gookbabPrice = 5000;
  }

  ToGookbab() {
    let gb = this.price / this.gookbabPrice;
    return gb;
  }

  ToChicken() {
    let ck = this.price / this.chickenPrice;
    return ck;
  }
}
