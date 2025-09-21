// -------------context api----------------
// Context API is a way to pass data through the component tree without having to pass props down manually at every level.
// It is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

// import React, {createContext, useContext} from "react";

// const Usercontext = createContext();

// function Contextusage(){
//     const user = "Chandu";
//     return(
//         <Usercontext.Provider value={user}>
//             <ComponentA/>
//         </Usercontext.Provider>
//     )
// }

// function ComponentA(){
//     return(
//         <div>
//             <h1>Component A</h1>
//             <ComponentB/>
//         </div>
//     )
// }
// function ComponentB(){
//     return(
//         <div>
//             <h1>Component B</h1>
//             <ComponentC/>
//         </div>
//     )
// }       
// function ComponentC(){          
//     const user = useContext(Usercontext);
//     return(
//         <div>
//             <h1>Component C - Hello {user}</h1>
            
//         </div>
//     )
// }
// export default Contextusage;

// Another example

import React, { useState, createContext, useContext } from "react";

// 1️⃣ Create context
const UserContext = createContext();

function Contextusage() {
  // State to hold current user name
  const [user, setUser] = useState("Chandu Sai");

  return (
    // 2️⃣ Provider supplies the dynamic user value
    <UserContext.Provider value={user}>
      <div style={{ margin: "20px" }}>
        <h1>Main App</h1>

        {/* Input to change user name */}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter new user name"
        />

        {/* Nested components */}
        <ComponentA />
      </div>
    </UserContext.Provider>
  );
}

function ComponentA() {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h2>Component B</h2>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  // 3️⃣ Consume context directly
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <h3>Component C → Hello, {user}!</h3>
    </div>
  );
}

export default Contextusage;


// we will not use props drilling to pass data from parent to child to grandchild
// Instead we will use context api to pass data directly from parent to grandchild
// without passing it through child component , because child component may not need that data 
//  in props drilling we have to pass data through every component in between
// Context api is used to share data that can be considered global for a tree of react components
// such as current authenticated user , theme or preferred language
// Context api is used to avoid props drilling

// props drilling example

// import React from "react";

// function Contextusage() {
//   const user = "Chandu Sai"; // data at top level
//   return <ComponentA user={user} />;
// }

// function ComponentA({ user }) {
//   return (
//     <div>
//       <h2>Component A</h2>
//       <ComponentB user={user} /> {/* passing down */}
//     </div>
//   );
// }

// function ComponentB({ user }) {
//   return (
//     <div>
//       <h2>Component B</h2>
//       <ComponentC user={user} /> {/* passing down */}
//     </div>
//   );
// }

// function ComponentC({ user }) {
//   return <h3>Component C → Hello, {user}!</h3>;
// }

// export default Contextusage;

