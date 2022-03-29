import { Component, useState } from 'react';
import './App.css';
import ComponentLetras from './components/Letras/Letras'

function App() {
  let counter=0
  function writingInTextBoxHandler() {
    setContadorLetras(counter + 1)
  }
  const [contadorLetras, setContadorLetras]=useState()
   
  
return (
<>
  <h1>Texto</h1>
    <textarea onChange={writingInTextBoxHandler}></textarea>
    <ComponentLetras letras={contadorLetras}></ComponentLetras>
  
  
</>
);
}
export default App
