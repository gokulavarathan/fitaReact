// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  // Accessing the data passed from the parent component via props
  console.log(props.handleClick)
  const receivedData = props.handleClick;

  return (
    <div>
      <h3>Child Component</h3>
      <p>Data received from parent: {receivedData}</p>
    </div>
  );
};

export default ChildComponent;
