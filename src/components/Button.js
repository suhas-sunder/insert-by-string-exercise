import Styles from "./Button.module.css";

const Button = ({ text, id, updateArr }) => {
  const handleClick = (e) => {
    const dir = e.target.id.split("_")[0];
    const id = e.target.id.split("_")[1];
    updateArr(id, dir);
  };

  return (
    <div  className={Styles.wrapper}>
      <button      
        id={`left_${id}`}  
        className={Styles.btn}
        onClick={(e) => handleClick(e)}
      ></button>
      <span id={`middle_${id}`} onClick={(e) => handleClick(e)}>{text}</span>
      <button
        id={`right_${id}`}
        className={Styles.btn}
        onClick={(e) => handleClick(e)}
      ></button>
    </div>
  );
};

export default Button;
