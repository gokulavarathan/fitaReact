import React, { useRef, useState } from 'react';

// useState is for managing state that triggers re-renders, while useRef is for mutable values that don't trigger re-renders. 
// useRef is often used for accessing and persisting values across renders, especially when dealing with non-render-related logic, 
// such as managing focus, storing mutable data, or interacting with imperative APIs
const Counter = () => {
    const countRef = useRef(0); // Initialize the ref with 0
    const [renderCount, setRenderCount] = useState(0);

const incrementCount = () => {
    countRef.current = countRef.current + 1;
    setRenderCount(6);
};

return (
    <div>
    <p>Render Count: {renderCount}</p>
    <p>Current Count (not causing re-renders): {countRef.current}</p>
    <button onClick={incrementCount}>Increment Count</button>
    </div>
);
};

export default Counter;
