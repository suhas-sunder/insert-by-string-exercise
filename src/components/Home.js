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

  // Add rectangles or update text within rectangle
  const handleUpdate = (id, direction, text) => {
    let newArr = [];

    const updateArr = (obj, dir) => {
      if (obj.id === id && direction === dir)
        newArr.push({ id: generateID(), btnText: obj.btnText });
    };

    btnText.forEach((obj) => {
      updateArr(obj, "left");
      obj.id === id
        ? newArr.push({ id: id, btnText: text })
        : newArr.push(obj);
      updateArr(obj, "right");      
    });
    setBtnText(newArr);
  };

  return (
    <div className={Styles.buttons}>
      {btnText.map((text, index) => (
        <Button
          key={text.id}
          text={text.btnText}
          id={text.id}
          addSquare={handleUpdate}
          textChange={handleUpdate}
        />
      ))}
    </div>
  );
};

export default Home;
