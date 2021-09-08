import './App.css';
import React, {useEffect, useState} from 'react';
import ImageContainer from './Components/ImageContainer.js';

// Gradient code taken from https://codepen.io/JanickFischr/pen/BYvVqP


// App - background gradient --> Button passes state to App to change background gradient to change
// Title - here
// Component - Image container --> Button triggers Image to change
// Component - Buttons
// Component - modal overlay
// Component triggering error message to generate new meme if left or right is already clicked

function App(props) {

  let [className, setClassName] = useState("App gradient");

  useEffect(() => {console.log('Classname: ', className)}, [className]); 

  const changeGradient = (props) => {
    setClassName("App gradient " + props);
  }

  const resetGradient = () => {
    setClassName("App gradient");
  }

  return (
    <div className={className}>
      <h1>Meme Aesthetics</h1>
      <ImageContainer onGuess={changeGradient} onGenerate={resetGradient}/>
    </div>
  );
}

export default App;
