import "./App.css";
import React,{useState} from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try
    {
    setResult(eval(result).toString());
    }
    catch{
      console.log("Error");
    }
  };
  return (
    <div className="container">
      <div className="output">
        <form>
          <input type="text" value={result} />
        </form>
      </div>
      <button className="clear" onClick={clear} id="clear">clear</button>
      <button className="operatand" onClick={handleClick} name="/">%</button>

      <button onClick={handleClick} name="7">7</button>
      <button onClick={handleClick} name="8">8</button>
      <button onClick={handleClick} name="9">9</button>
      <button className="operatand" onClick={handleClick} name="-">-</button>

      <button onClick={handleClick} name="4">4</button>
      <button onClick={handleClick} name="5">5</button>
      <button onClick={handleClick} name="6">6</button>
      <button className="operatand" onClick={handleClick} name="+">+</button>

      <button onClick={handleClick} name="1">1</button>
      <button onClick={handleClick} name="2">2</button>
      <button onClick={handleClick} name="3">3</button>
      <button className="operatand" onClick={calculate} id="result">=</button>
    </div>
  );
}

export default App;
