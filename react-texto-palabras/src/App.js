import { Component, useState } from 'react';
import './App.css';
import ComponentLetras from './components/Letras/Letras'
import ComponentPalabras from './components/Palabras/Palabras';

function App() {
  const [text, setText] = useState("")
  function writingInTextBoxHandler(event) {
    setText(event.target.value)
    console.log({ text })
    //Palabras
    setSaveWords(text.split([" "]))
    console.log(saveWords)
  }
  const [saveWords, setSaveWords] = useState([])
 
  
  
return (
    <>
      <h1>Texto</h1>
      <textarea onChange={writingInTextBoxHandler} value={text}></textarea>
      <ComponentLetras letras={text}/>
      <ComponentPalabras palabras={saveWords}/>
    </>
  );
}
export default App
