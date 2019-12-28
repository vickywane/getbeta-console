import { action, observable, decorate } from "mobx";

class AuthStore {
  authenticated = false;

  AuthUser = () => {
    this.authenticated = true;
  };

  UnAuthUser = () => {
    this.authenticated = false;
  };
}

const DecoratedAuthStore = decorate(AuthStore, {
  //observables
  authenticated: observable,

  //actions
  AuthUser: action,
  UnAuthUser: action
});

const store = new DecoratedAuthStore();

export default store;
