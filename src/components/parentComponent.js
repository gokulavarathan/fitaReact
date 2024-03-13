// ParentComponent.js
import React from 'react';
import ChildComponent from './childComponent';

const ParentComponent = () => {
  const parentData = 'Hello from Parent!';

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Passing data to the child component using the 'data' prop */}
      <ChildComponent data={parentData} />
    </div>
  );
};

export default ParentComponent;
