import React from 'react'
import { useState } from 'react'

export default function Start(props) {
    const [startText,setStartText] = useState("");

    const handlesubmit =()=>{
            let newtext = startText.split("").sort().join("");
            setStartText(newtext);
        }
    

  return (
    <>
    <div className="container">
     <h1>{props.heading}</h1>
     <textarea name="box" id="1" value = {startText} onChange={(e) => setStartText(e.target.value)} rows='8' columns ='8'>Enter text here</textarea>
    <button  className="btn btn-primary mx-2" onClick ={handlesubmit}>click here to sort</button>
    </div>
    </>
  )
}
