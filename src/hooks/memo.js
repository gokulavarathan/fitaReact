import React, { useMemo, useState } from "react";

const App = () => {
const [count, setCount] = useState(5);

  // Simulate automatic count increment every second
//   setTimeout(() => {
//     setCount(count + 1);
//   }, 1000);

const expensiveResult = useMemo(() => {
    // Perform expensive calculations here based on the 'count' state
    console.log("from memo")
    return count * 2; 
}, [count]);

return (
    <div>
    <p>Count: {count}</p>
    <p>Expensive Result: {expensiveResult}</p>
    <button onClick={() => setCount(count + 1)}>UseMemo Render </button>
    <button onClick={() => setCount(6)}>Usememo notRender</button>

    </div>
);
};

export default App;
