import darkModeStore from "../darkModeStore";

const MyFirstComponent = () => {
  return (
    <div>
      <button onClick={darkModeStore.changeTheme}>Switch Style</button>
      <h1>Hello Abdulrahman</h1>
    </div>
  );
};
export default MyFirstComponent;
