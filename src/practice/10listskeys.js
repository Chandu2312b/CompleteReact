// ------------------- rendering array -------------------- 
// lists and keys in react
// keys help react identify which items have changed , are added or removed
// keys should be given to the elements inside the array to give the elements a stable identity

// import React from 'react'

// const Listskeys = () => {
//     const items = ['Apple', 'Banana', 'Orange'];
//   return (
//     <div>
//         <h1>Fruits List</h1>
//         <ol>
//             {items.map((item,index)=> (
//                 <li key={index} >{item} </li>
//             )
//             )  }
//         </ol>
      
//     </div>
//   )
// }

// export default Listskeys;


// ------------------- rendering objects --------------------

import React from 'react'

const Listskeys = () => {
    const items = [
       {id:1,name:'Apple',age:20},
       {id:2,name:'Banana',age:56},
       {id:3,name:'Orange',age:78 }
    ];
  return (
    <div>
        <h1>Fruits List</h1>
        <ol>
            {items.map((item)=> (
                <li key={item.id} >{item.name} </li>
            )
            )  }
        </ol>
      
    </div>
  )
}

export default Listskeys;

// ------------------- rendering objects with props --------------------
// import User from "./User"; // Step 1: Import the child component

// import React from "react";
// Step 3: Receive props in the child component
// function User(props) {
//   return (
//     <li>
//       {/* Step 4: Use props values */}
//       {props.name} - {props.age} years old
//     </li>
//   );
// }

// export default User;

// import React from "react";
// import User from "./User"; // Import the child component

// function UserList() {
//   // Step 1: Array of objects (users)
//   const users = [
//     { id: 1, name: "Chandu", age: 21 },
//     { id: 2, name: "Sai", age: 22 },
//     { id: 3, name: "Venkata", age: 23 }
//   ];

//   return (
//     <div>
//       <h2>User List with Props</h2>
//       <ul>
//         {/* Step 2: Pass each user as props to <User /> */}
//         {users.map((user) => (
//           <User key={user.id} name={user.name} age={user.age} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;


