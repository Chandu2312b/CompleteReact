// -------------hooks----------------
// -------------useEffect---------------

//  in useEffect 
//   useEffect(()=>{...});   componentDidMount - runs on every render 
// useEffect(()=>{...},[]);  componentDidMount - runs only on first render
//   useEffect(()=>{...},[state]); // componentDidUpdate - runs on first render and when state changes
//   useEffect(()=>{ return ()=>{...} },[]); // componentWillUnmount - runs on unmount 

import React, { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect to update the clock every second
  useEffect(() => {
    console.log("useEffect ran → setting interval");

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); 
      // updates state every second
    }, 1000);

    // Cleanup function → runs when component unmounts
    return () => {
      console.log("Cleanup → clearing interval");
      clearInterval(timer);
    };
  }, []); 
  // [] means run only once when component loads

  return (
    <div>
      <h1>🕒 Live Clock</h1>
      <p>Current Time: {time}</p>
    </div>
  );
}
// just updated the live  mode 

export default LiveClock;
