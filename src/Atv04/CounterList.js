import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Contador: {count}
    </button>
  );
}

export default function CounterList() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}
