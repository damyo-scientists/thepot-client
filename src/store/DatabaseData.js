import { action, observable } from "mobx";

export default class DatabaseData {
  @observable data = "";

  @action setData(data) {
    this.data = data;
  }
}
