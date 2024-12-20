import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleLowerCase=(inputValue)=>{
    setInputValue(inputValue.toLowerCase())
  }
  const handleUpperCase=(inputValue)=>{
    setInputValue(inputValue.toUpperCase())
  }
  const handleTrim=(inputValue)=>{
    setInputValue(inputValue.trim())
  }
  return (
    <>
      <textarea
        placeholder="Enter a sentence..."
        value={inputValue}
        onChange={handleInput}
      />
      <br/>
      <button onClick={()=>handleLowerCase(inputValue)}>Lowercase</button>
      <button onClick={()=>handleUpperCase(inputValue)}>Uppercase</button>
      <button onClick={()=>handleTrim(inputValue)}>Trim</button>
      <br/>
      <p>Transformed String: {inputValue}</p>
    </>
  );
}

export default App;
