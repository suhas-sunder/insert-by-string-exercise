import Styles from "./Button.module.css";

const Button = ({ text, id, addSquare, textChange }) => {
  // Add new rectangle
  const handleClick = (targetID) => {
    const dir = targetID.split("_")[0];
    const id = targetID.split("_")[1];
    addSquare(id, dir, text);
  };

  // Update rectangle value
  const handleChange = (id, value) => {
    const dir = null;
    // Only allow 6 chars per input
    if(value.length <= 6) addSquare(id, dir, value);
  };

  return (
    <div className={Styles.wrapper}>
      <button
        id={`left_${id}`}
        className={`${Styles.btn} ${Styles.right}`}
        onClick={(e) => handleClick(e.currentTarget.id)}
      ></button>
      <input
        id={id}
        className={Styles.input}
        onChange={(e) =>
          handleChange(e.currentTarget.id, e.currentTarget.value)
        }
        value={text}
      />
      <button
        id={`right_${id}`}
        className={`${Styles.btn} ${Styles.left}`}
        onClick={(e) => handleClick(e.currentTarget.id)}
      ></button>
    </div>
  );
};

export default Button;
