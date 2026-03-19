function Counter({ count, setCount }) {
  return (
    <div>
      <h2>Count: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      
      <button 
        onClick={() => setCount((prevCount) => Math.max(0, prevCount - 1))}
        style={{ margin: '10px' }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
