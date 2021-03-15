import Button from "./Button";

const MySecondComponent = (props) => {
  return (
    <div>
      <Button setIsDarkMode={props.setIsDarkMode} />
      <h2>Abdulghaphor likes a restaurant called Sirhan in Abu Hulaifa</h2>
    </div>
  );
};
export default MySecondComponent;
