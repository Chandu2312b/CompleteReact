// conditional rendering
// Ternary operator

import React, {useState} from "react";

const ConditionalRendering = () =>{
    const [login, setlogin] = useState(false);
    // in this false indicates user is not logged in
    // if true indicates user is logged in

    return (
        <div>
            <h1> Conditional Rendering</h1>
            {login ? (<h2>welcome user</h2> ): (<h2>please login for free </h2>)}
            <button onClick={() => setlogin(!login)}>{login ? "Logout" : "Login"}</button>
        </div>
    )
}
export default ConditionalRendering;

//-------------conditional rendering using if else-----------------

// just uncomment the below code and comment the above code to use this component   

// import React, { useState } from "react";

// function LoginExampleIfElse() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Step 1: Decide what to render using if/else BEFORE return
//   let message;
//   let notification;

//   if (isLoggedIn) {
//     message = <h1>Welcome back, Chandu!</h1>;
//     notification = <p>You have 3 new notifications!</p>;
//   } else {
//     message = <h1>Please log in</h1>;
//     notification = <p>Please sign up for free.</p>;
//   }

//   // Step 2: Use variables inside JSX
//   return (
//     <div>
//       {message}
//       {notification}

//       {/* Button toggles login state */}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// }

// export default LoginExampleIfElse;



// ------------------using && operator for conditional rendering------------------


// import React, { useState } from "react";

// function LoginExampleAnd() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {/* Show only if true */}
//       {isLoggedIn && <h1>Welcome back, Chandu!</h1>}

//       {/* Show only if false (use !isLoggedIn) */}
//       {!isLoggedIn && <h1>Please log in</h1>}

//       {/* Notifications */}
//       {isLoggedIn && <p>You have 3 new notifications!</p>}
//       {!isLoggedIn && <p>Please sign up for free.</p>}

//       {/* Button */}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// }

// export default LoginExampleAnd;

