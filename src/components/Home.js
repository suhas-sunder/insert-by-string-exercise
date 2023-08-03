import { useState } from "react";
import Button from "./Button";
import Styles from "./Home.module.css";
import { v1 as generateID } from "uuid";

const Home = () => {
  const [btnText, setBtnText] = useState([
    {
      id: generateID(),
      btnText: "A",
    },
    {
      id: generateID(),
      btnText: "B",
    },
    {
      id: generateID(),
      btnText: "C",
    },
  ]);

  const handleUpdate = (id, direction) => {
    let newArr = [];

    const updateArr = (obj, dir) => {
      if (obj.id === id && direction.includes(dir))
        newArr.push({ id: generateID(), btnText: obj.btnText });
    };

    if (!direction.includes("middle")) {
      btnText.forEach((obj) => {
        updateArr(obj, "left");
        newArr.push(obj);
        updateArr(obj, "right");

        setBtnText(newArr);
      });
    } else {
      console.log(id);
    }
  };

  return (
    <div className={Styles.buttons}>
      {btnText.map((text, index) => (
        <Button
          key={text.id}
          text={text.btnText}
          id={text.id}
          updateArr={handleUpdate}
        />
      ))}
    </div>
  );
};

export default Home;
