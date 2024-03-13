

//In React, state is a way for components to keep track of and 
//manage data that can change over time

// useState is a specific function in React used by functional components to declare and manage their state.

import React, { useState,useEffect } from 'react';

const CounterComponent = () => {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(5);

  useEffect(() => {
    console.log("first emit")
    if(count % 2 ==0){
      console.log("it is even")
    }
}, [count]);
  
  // Event handler for incrementing the count
  const handleIncrement = () => {
    console.log(count,"count")
    setCount(count + 1);
  };
  

  // Event handler for decrementing the count
  const handleDecrement = () => {
    // Ensure count doesn't go below 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
