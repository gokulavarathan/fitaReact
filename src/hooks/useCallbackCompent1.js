import React, { useState, useCallback } from 'react';

// Child Component
const ChildComponent = ({ onClick }) => {
  console.log('Child Component rendered');

  return (
    <button onClick={onClick}>Click me</button>
  );
};

export default ChildComponent;