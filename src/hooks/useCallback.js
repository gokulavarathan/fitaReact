import React, { useState, useMemo, useRef, useEffect } from 'react';

const CombinedComponent = () => {
  const [count, setCount] = useState(1);
  const inputRef = useRef(null);

  // Use useMemo to memoize the result of an expensive computation
  const expensiveResult = useMemo(() => {
    console.log('Expensive computation happening...');
    return count * 2;
  }, [count]);

  const mutableRef = useRef('Initial Value');

  const handleClick = () => {
    // Changing the value of the mutableRef.current
    mutableRef.current = 'Updated Value';
    console.log('Updated value:', mutableRef.current);
  };
  
  // Use useEffect and useRef to focus on the input element when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Combined Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Expensive Result: {expensiveResult}</p>

      <div>
      <p>Value: {mutableRef.current}</p>
      <button onClick={handleClick}>Update Value</button>
    </div>
    </div>
  );
};

export default CombinedComponent;
