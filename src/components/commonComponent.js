// Handling Events
// onLoad and onError
// onFocus and onBlur
// onKeyDown, onKeyPress, and onKeyUp
// onMouseOver and onMouseOut
// onSubmit
// onChange

// import React, { useState } from 'react';

// const EventHandlingExample = () => {
//   const [message, setMessage] = useState('');

//   const handleClick = () => {
//     setMessage('Button clicked!');
//   };

//   return (
//     <div>
//       <h2>Event Handling Example</h2>
//       <button onClick={handleClick}>Click Me</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default EventHandlingExample;


// import React, { useState } from 'react';

// const ConditionalRenderingExample = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <h2>Conditional Rendering Example</h2>
//       {isLoggedIn ? (
//         <p>Welcome, User!</p>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>Log In</button>
//       )}
//     </div>
//   );
// };

// export default ConditionalRenderingExample;



// import React from 'react';

// const ListsAndKeysExample = () => {
//   const items = ['Item 1', 'Item 2', 'Item 3'];

//   return (
//     <div>
//       <h2>List and Keys Example</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListsAndKeysExample;
