import { makeObservable, observable, action } from "mobx";
class DarkModeStore {
  isDarkMode = false;
  changeTheme = () => {
    this.isDarkMode = !this.isDarkMode;
  };

  constructor() {
    makeObservable(this, {
      isDarkMode: observable,
      changeTheme: action,
    });
  }
}
const darkModeStore = new DarkModeStore();
export default darkModeStore;
