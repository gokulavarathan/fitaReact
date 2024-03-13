import React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import Navbar from './navbar';

const AboutComponent = () => {
  const { id } = useParams();
  console.log("id",id)

  let navigate = useNavigate();

  const butonClick = () => {
    // navigate("/contact")
    console.log("check")
    butonClick2()
  }
  // <button onClick={funcName}> click here to contact page</button>

  // <button onClick={()=>{funcName();funcName2()}}> click here to contact page</button>
  
  //   <button onClick={()=>{navigate("/contact")}}> click here to contact page</button>
  
  // <button onClick={()=>{navigate("/contact");console.log("/about")}}> click here to contact page</button>

  const butonClick2 = () => {
    // navigate("/contact")
    console.log("check")
  }

  return(
  <div>
  <Navbar/> 
  <h1>Hello, from About Component!</h1>
  <button onClick={()=>navigate("/contact")}> click here to contact page</button>
  <button onClick={()=>navigate("/targetroute/5?fname=gokul&lname=varathan")}> click here to query page</button>


  <button onClick={butonClick}> click here to contact page</button>

  <button onClick={()=>{butonClick();}}> click here to contact page</button>


  </div>
  ) 
};

export default AboutComponent
