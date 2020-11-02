import React, { useState } from "react";
import "./App.css";
import  CounterInput  from "./Components/CounterInput";
import  CounterOutput  from "./Components/CounterOutput";

function App() {
  const [counter, setCounter] = useState(0);

  return <div className="App">
    <CounterOutput counter={counter} />
    <CounterInput counter={counter} setCounter={setCounter}/>
  </div>;
}

export default App;
