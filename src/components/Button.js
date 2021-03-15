import darkModeStore from "../darkModeStore";

const Button = () => {
  return <button onClick={darkModeStore.changeTheme}>Switch Style #2</button>;
};
export default Button;
