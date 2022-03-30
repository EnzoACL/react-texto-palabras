import { Component, useEffect, useState } from 'react';
import './App.css';
import ComponentLetras from './components/Letras/Letras'
import ComponentPalabras from './components/Palabras/Palabras';

function App() {
  const [text, setText] = useState("")
  function writingInTextBoxHandler(event) {
    setText(event.target.value)    
  }
  
return (
    <>
      <h1>Texto</h1>
      <textarea onChange={writingInTextBoxHandler} value={text}></textarea>
      <ComponentLetras letras={text}/>
      <ComponentPalabras palabras={text}/>
      <input type="button" value="Console logs" ></input>
    </>
  );
}
export default App
