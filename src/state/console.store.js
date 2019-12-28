import { action, observable, decorate } from "mobx";

class ConsoleStore {
  ProfilePane = false;

  showProfilePane = () => {
    this.ProfilePane = true;
  };

  closeProfilePane = () => {
    this.ProfilePane = false;
  };
}

const DecoratedConsoleStore = decorate(ConsoleStore, {
  //observables
  ProfilePane: observable,

  //actions
  showProfilePane: action,
  closeProfilePane: action
});

const store = new DecoratedConsoleStore();

export default store;
