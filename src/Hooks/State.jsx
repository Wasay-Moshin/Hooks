import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
function State() {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    setCount(count + 1);
  };
  const decermentHandle = () => {
    // setCount(count - 1);
    // if (count === 0) {
    //   setCount(0);
    // } else {
    //   setCount(count - 1);
    // }
    return count === 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    <div className="mt-4">
        <div className="text-center">
            <h1>By using useState</h1> 
        </div>
        <div className="state mt-3">
      <button onClick={incrementHandle}>
        <FaPlusSquare size={"40px"} />
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        <h1>{count}</h1>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={decermentHandle}>
        <FaMinusSquare size={"40px"} />
      </button>
      </div>
    </div>
  );
}

export default State;
