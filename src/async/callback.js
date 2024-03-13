import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  // Callback function to handle asynchronous operation
  const fetchData = (callback) => {
      const result = 'Data from asynchronous operation!';
      callback(result); // Callback to handle the result
  };

  // Function to be executed when the button is clicked
  const handleButtonClick = () => {
    fetchData((result) => {
      setData(result); // Update state with the result using the callback
    });
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleButtonClick}>Fetch Data</button>
      {data && <p>Data: {data}</p>}
    </div>
  );
};

export default MyComponent;
