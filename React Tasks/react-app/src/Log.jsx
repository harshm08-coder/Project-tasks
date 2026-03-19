function Log({ count }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Log Component</h3>
      <p>Current Count from Parent : {count}</p>
    </div>
  );
}

export default Log;