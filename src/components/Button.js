import Styles from "./Button.module.css";

const Button = ({ text }) => {
  const handleClick = (direction) => {
    console.log(direction);
  };

  return (
    <div className={Styles.wrapper}>
      <button
        className={Styles.btn}
        onClick={() => handleClick("left")}
      ></button>
      <span>{text}</span>
      <button
        className={Styles.btn}
        onClick={() => handleClick("right")}
      ></button>
    </div>
  );
};

export default Button;
