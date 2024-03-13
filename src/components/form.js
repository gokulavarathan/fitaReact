import React, { useState } from 'react';

const MyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted with data:', { firstName, lastName, email });
  };

  // function handleSubmit(){
  // }
  // handleSubmit();

  return (
    // <form onSubmit={handleSubmit}>
    <form onSubmit={()=>{handleSubmit("test")}}>

      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) =>{console.log(e); setFirstName(e.target.value)}}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
