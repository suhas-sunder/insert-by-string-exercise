import { useState } from "react";
import Button from "./Button";
import Styles from "./Home.module.css";

const Home = () => {
  const [btnText, setBtnText] = useState(["A", "B", "C"]);

  return (
    <div className={Styles.buttons}>
      {btnText.map((text) => (
        <Button text={text} />
      ))}
    </div>
  );
};

export default Home;
