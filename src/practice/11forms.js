// import React, {useState} from 'react'

// function Arrowfunction(){
//     const [name,setName] = useState('');

//     const handleChange = (event) => {
//         event.preventDefault();
//         alert(`Hello, ${name}`);
//     }
//     return(
//         <form onSubmit={handleChange}>
//             <input type = "text" value={name} onChange={(e) => setName(e.target.value)} />
//             <button onSubmit={handleChange}>submit</button>
//             </form>


//     )
// }
// export default Arrowfunction;


// --------------------Multiple Inputs--------------------
import React, { useState } from "react";

function Arrowfunction() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // Update form state dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData, // keep other fields same
      [e.target.name]: e.target.value, // update only the changed field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formData.username}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Arrowfunction;


