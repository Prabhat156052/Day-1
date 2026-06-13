import React, { useState } from "react";

function Data() {
  const [number, setNumber] = useState();
  const [even, setEven] = useState(true);
  const handleClick = () => {
    if (number % 2 === 0) {
      setEven(true);
      setNumber('');
    }
    else{
      setEven(false);
      setNumber('');
    }
  };
  return (
    <div className="main" style={{padding:'10px', color:'red', display:'flow',}}>
      <div style={{margin:'50px', color:'yellow',}}>
        <label>Enter any number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Click me
        </button>
      </div>
      <div>
        <p>{even?'Entered number is Even':'Entered number is  Odd'}</p>
      </div>
    </div>
  );
}

export default Data;
