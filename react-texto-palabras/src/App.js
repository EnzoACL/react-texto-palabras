import { useState } from 'react';
import './App.css';

function App() {
function writingInTextBoxHandler (){
console.log("Escribiendo")
}
return (
<>
  <h1>Texto</h1>
  <textarea onChange={writingInTextBoxHandler}></textarea>
</>
);
}
export default App
