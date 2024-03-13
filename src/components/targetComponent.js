// TargetComponent.js

import React from 'react';
import { useLocation,useParams } from 'react-router-dom';
import Navbar from './navbar';

const TargetComponent = () => {

const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const param1 = queryParams.get('fname');
const param2 = queryParams.get('lname');

const { id } = useParams();
  
  return (
    <div>
    <Navbar/>
      <h2>Target Component</h2>
      <p>ID: {id}</p>
      <p>Param1: {param1}</p>
      <p>Param2: {param2}</p>
    </div>
  );
};

export default TargetComponent;

