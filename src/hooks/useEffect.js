import React,{ useEffect,useState } from "react"

const HooksComponent = () =>{

    const [dependency,setDependency] = useState(true)
// componentDidMount
useEffect(() => {
    console.log('Component is did mounted');
    // Perform actions after component is inserted into the DOM
}, []);

useEffect(()=>{
console.log("test")
},[])

//   componentDidUpdate
useEffect(() => {
    console.log('Component is did update mounted');
    // Perform actions after component is inserted into the DOM
}, [dependency]);

//     componentWillUnmount
    useEffect(() => {
        return () => {
        console.log('Component is about to unmount');
          // Perform cleanup before component is removed from the DOM
        };
    }, []);

    return(
        <>
        <h1>Use effect</h1>
        <button onClick={()=>{setDependency(!dependency)}}>Change dependency</button>
        </>
    )
}
export default HooksComponent