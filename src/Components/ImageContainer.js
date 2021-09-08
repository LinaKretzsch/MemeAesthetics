import React, { useEffect, useState } from "react";
import style from "./ImageContainer.module.css";

const ImageContainer = (props) => {
  // Img paths for liberal and conservative generated memes
  const liberalImgPath = "../Img/Liberal/";
  const conservativeImgPath = "../Img/Conservative/";

  // Limits the bound of the random image that can be opened
  let imgsInFolder = 15;

  let [imgPath, setImgPath] = useState("../Img/Liberal/0.png");
  let [userGuess, setUserGuess] = useState("");

  useEffect(() => {}, [imgPath, userGuess]);

  // Generate random image number to generate upon button click
  const generateRandomImagePath = () => {
    setImgPath(
      Math.floor(Math.random() * 2) === 0
        ? liberalImgPath + Math.floor(Math.random() * imgsInFolder) + ".png"
        : conservativeImgPath +
            Math.floor(Math.random() * imgsInFolder) +
            ".png"
    );
    console.log(imgPath);
    props.onGenerate();
  };

  const checkUserGuess = (e) => {
    // Preventing page to reload
    e.preventDefault();

    // Verify if user guessed correct or wrong and sets the userGuess state to Correct or Wrong for a few seconds to trigger the appearance of the popup
    if (
      imgPath.substring(7, 14) === e.target.value ||
      imgPath.substring(7, 19) === e.target.value
    ) {
      setUserGuess("Correct");
      setTimeout(() => {
        setUserGuess("");
      }, 1500);
    } else {
      setUserGuess("Wrong");
      setTimeout(() => {
        setUserGuess("");
      }, 1500);
    }

    // Pass value to App in order to change the gradient background
    // Background will change to blue if conservative meme is displayed
    // Background will change to red if liberal meme is displayed
    props.onGuess(
      imgPath.substring(0, 15) === liberalImgPath ? "liberal" : "conservative"
    );
  };

  return (
    <div>
      <div
        className={style.popupContainer}
        style={userGuess !== "" ? { display: "flex" } : { display: "none" }}
      >
        <div className={style.popup}>
          <h2
            className={
              userGuess === "Correct" ? style.correctGuess : style.wrongGuess
            }
          >
            {userGuess}
          </h2>
        </div>
      </div>
      <img className={style.img} src={imgPath} alt="" />
      <div className={style.btns}>
        <button
          className={style.leftBtn}
          onClick={checkUserGuess}
          value="Liberal"
        >
          Left-Wing
        </button>
        <button className={style.generateBtn} onClick={generateRandomImagePath}>
          Generate Meme
        </button>
        <button
          className={style.rightBtn}
          onClick={checkUserGuess}
          value="Conservative"
        >
          Right-Wing
        </button>
      </div>
    </div>
  );
};

export default ImageContainer;
