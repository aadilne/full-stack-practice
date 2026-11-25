import { useState } from "react";

function B_WithOutUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const complexCalculatio = () => {
    let total = 0;
    for (let i = 0; i <= 100000000; i++) {
      total += i;
    }

    return total;
  };

  let result =  complexCalculatio()

  return (
    <div>
        <p className="text-[19px] text-red-500">Whitout useMemo HOOK</p>

      <p>count {result}</p>

      <input type="text" value={text} placeholder="Enter Name:"
      onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={() => setCount(count+1)}>increment</button>
      <p>count: {count}</p>

    </div>
  )
}

export default B_WithOutUseMemo;
