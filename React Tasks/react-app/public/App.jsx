import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Log from "./Log";

function App() {
  const [count, setCount] = useState(0);

  // runs ONLY when count changes
  useEffect(() => {
    if (count === 10) {
      alert("Count reached 10!");
      console.log("🎯 Count reached exactly 10");
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center",marginLeft:"150px", marginTop: "50px" }}>
      <h1>React Counter App</h1>

      <Counter count={count} setCount={setCount} />

      <Log count={count} />
    </div>
  );
}

export default App;