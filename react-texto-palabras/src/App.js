import { Component, useState } from 'react';
import './App.css';
import ComponentLetras from './components/Letras/Letras'

function App() {
  const [text, setText] = useState("")
  function writingInTextBoxHandler(event) {
    setText(event.target.value)
    console.log({ text })
  }
  
return (
    <>
      <h1>Texto</h1>
      <textarea onChange={writingInTextBoxHandler} value={text}></textarea>
      <ComponentLetras letras={text}/>
    
    </>
  );
}
export default App
