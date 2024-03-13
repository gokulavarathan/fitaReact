// import React from 'react';

// const MyComponent = ({ condition }) => (
//   <div>
//     {condition && <Component1 />}
//     {!condition && <Component2 />}
//   </div>
// );

// const Component1 = () => <div>Component 1</div>;
// const Component2 = () => <div>Component 2</div>;

// export default MyComponent;


import React from 'react';

const MyComponent = ({ condition }) => (
  condition ? <Component1 /> : <Component2 />
);

const Component1 = () => <div>Component 1</div>;
const Component2 = () => <div>Component 2</div>;

export default MyComponent;
