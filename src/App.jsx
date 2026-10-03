import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>React Counter App</h1>
      <h2 style={{ fontSize: '64px', margin: '20px 0' }}>{count}</h2>
      
      {count === 0 && (
        <p style={{ color: 'red', fontSize: '14px' }}>Minimum value 0 tak hi ho sakti hai!</p>
      )}

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button 
          onClick={decrement} 
          disabled={count === 0}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: count === 0 ? 'not-allowed' : 'pointer' }}
        >
          - Decrement
        </button>
        
        <button 
          onClick={reset} 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Reset
        </button>
        
        <button 
          onClick={increment} 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          + Increment
        </button>
      </div>
    </div>
  );
}

export default App;