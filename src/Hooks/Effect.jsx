import React, { useEffect, useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
function Effect() {
  const [count, setCount] = useState(0);

  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return count === 0 ? setCount(0) : setCount(count - 1);
  };
  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      <div className="mt-4">
        <div className="text-center">
          <h1>By using useEffect</h1>
        </div>
        <div className="state mt-3">
          <button onClick={() => countUpdate("inc")}>
            <FaPlusSquare size={"40px"} />
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <h1>{count}</h1>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => countUpdate("dec")}>
            <FaMinusSquare size={"40px"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Effect;
