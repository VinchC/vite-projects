import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </div>
    </>
  );
}
