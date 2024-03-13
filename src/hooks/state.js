
// In React, hooks are functions that enable functional components to use state and other React features without having to write a class.

// useState
// const [count, setCount] = useState(0);


// Lifecycle Hooks in Class Components:
// In class components, you have several lifecycle methods that are called at different stages of the component's life:

// componentDidMount: Called after the component is inserted into the DOM.
// componentDidUpdate: Called after the component is updated in the DOM.
// componentWillUnmount: Called before the component is removed from the DOM.
// These lifecycle methods allow you to perform actions at different stages of a component's life, such as fetching data, subscribing to external events, or cleaning up resources.

// useEffect Hook in Functional Components:
// In functional components, the useEffect hook serves a similar purpose by allowing you to perform side effects in a functional component. The useEffect hook combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

// componentDidMount

// useEffect(() => {
//     console.log('Component is mounted');
//     // Perform actions after component is inserted into the DOM
//   }, []);

  
//   componentDidUpdate
// useEffect(() => {
//         console.log('Component is mounted');
//         // Perform actions after component is inserted into the DOM
//       }, [dependency]);

//     componentWillUnmount
//     useEffect(() => {
//         return () => {
//           console.log('Component is about to unmount');
//           // Perform cleanup before component is removed from the DOM
//         };
//       }, []);
      
//   useCallback
//   const memoizedCallback = useCallback(() => {
//     // Memoized callback
//   }, [dependencyArray]);
  
// useMemo
//   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// useRef
//   const myRef = useRef(initialValue);
