import React, { useState, useCallback } from 'react';
import ChildComponent from './useCallbackCompent1';

const ParentComponent = () => {
const [count, setCount] = useState(0);

const handleClickMemoized = useCallback(() => {
    console.log('Button clicked!');
    setCount(count + 1);
  }, [count]); 

return (
    <div>
    <p>Count: {count}</p>

    <ChildComponent onClick={handleClickMemoized} />
    </div>
);
};

export default ParentComponent;
