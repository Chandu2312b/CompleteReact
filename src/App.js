import React from 'react'
import Greeting from './practice/funclassGreeting'
import Usingprops from './practice/6props'
import Statebutton from './practice/statebutton';

import Eventhandlers from './practice/7eventHandlers';
import Greet from './practice/7eventHandlers';
import ConditionalRendering from './practice/9conditionalRendering';

function App() {
  const users = [
  { id: 1, name: "Chandu", age: 21 },
  { id: 2, name: "Sai", age: 22 },
  { id: 3, name: "Venkata", age: 23 },
];
  return (
    
    <div>
      {/* {users.map((user)=>(
        <Usingprops key ={user.id} name={user.name} age={user.age} />
      ))} */}
      

  
    {/* <Greeting /> */}
    {/* <Usingprops name ="chandu" age = {20} /> */}
    {/* <Statebutton /> */}
    {/* <Eventhandlers /> */}
    <ConditionalRendering/>
  
      </div>
    
  )
}

export default App
