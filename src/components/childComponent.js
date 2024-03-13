// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  // Accessing the data passed from the parent component via props
  const data = props.data;

  
  return (
    <div>
      <h3>Child Component</h3>
      <p>Data received from parent: {data}</p>
    </div>
  );
};

export default ChildComponent;
