import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { debounce } from "lodash";

function App() {
  const handleChangeText = debounce(text => {
    setText(text);
  }, 300);

  const [text, setText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={e => handleChangeText(e.target.value)} />
        <h4> Debouncing Effect Output</h4>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
