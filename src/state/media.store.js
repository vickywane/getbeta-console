import { action, observable, decorate } from "mobx";

class MediaStore {
  Empty = true;
  items = [
    {
      id: 1,
      name: "",
      url: ""
    }
  ];

  itemsNo = null;

  AddItem = () => {
    this.empty = false;
  };

  DeleteItem = () => {};
}

const DecoratedMediaStore = decorate(MediaStore, {
  //observables
  Empty: observable,
  itemsNo: observable,
  items: observable,

  //actions
  AddItems: action,
  DeleteItems: action
});

const store = new DecoratedMediaStore();

export default store;
