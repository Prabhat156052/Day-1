import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>

      <div className="counter-value">{count}</div>

      <div className="button-container">
        <button className="btn increment" onClick={increment}>
          +
        </button>

        <button
          className="btn decrement"
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </button>

        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;