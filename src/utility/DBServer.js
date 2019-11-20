import Axios from "axios";

let instance;
export default class DBServer {
  constructor() {
    if (instance) return instance;

    this.data = [];
    instance = this;
  }

  async recieveInfo() {
    let response = await Axios.get(
      "https://thepot-dbserver.herokuapp.com/gookbabPlace"
    );

    this.data = response.data;

    console.log(this.data);
    return this.data;
  }
}
