import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [inputValue, setInputValue] = useState("hi");
  const [transformedValue, setTransformedValue] = useState(inputValue);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleLowerCase = () => {
    setTransformedValue(inputValue.toLowerCase());
  };
  const handleUpperCase = () => {
    setTransformedValue(inputValue.toUpperCase());
  };
  const handleCamelCase = () => {
    const words = inputValue.split(" ");
    const camelCase = words
      .map((word, i) => {
        if (i === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
    setTransformedValue(camelCase);
  };
  const handlePascalCase = () => {
    const words = inputValue.split(" ");
    const PascalCase = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setTransformedValue(PascalCase);
  };
  const handleSnakeCase = () => {
    const words = inputValue.split(" ");
    const snakeCase = words
      .map((word) => {
        return word;
      })
      .join("_");
    setTransformedValue(snakeCase);
  };
  const handleKebabCase = () => {
    const words = inputValue.split(" ");
    const kebabCase = words
      .map((word) => {
        return word;
      })
      .join("-");
    setTransformedValue(kebabCase);
  };

  const handleTrim = () => {
    setTransformedValue(inputValue.trim());
  };
  return (
    <>
      <textarea
        placeholder="Enter a sentence..."
        value={inputValue}
        onChange={handleInput}
      />
      <br />
      <div>
      <button onClick={handleLowerCase}>Lower Case</button>
      <button onClick={handleUpperCase}>Upper Case</button>
      <button onClick={handleCamelCase}>Camel Case</button>
      <button onClick={handlePascalCase}>Pascal Case</button>
      <button onClick={handleSnakeCase}>Snake Case</button>
      <button onClick={handleKebabCase}>Kebab Case</button>
      <button onClick={handleTrim}>Trim</button>
      </div>
      <br />
      <p>Transformed String: {transformedValue}</p>
    </>
  );
}

export default App;
