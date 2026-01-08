import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const myfunc =()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleonChange =(event)=>{
        console.log("on change");
        setText(event.target.value);

    }

    const[text, setText] = useState("Enter text here");
  return (
    <>
    
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className='form-control' value ={text} onChange ={handleonChange}id='myBox' rows='8'></textarea>
  </div>
  <button className="btn btn-primary" onClick = {myfunc}>Convert to uppercase</button>
  <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
  </div>
    </>
  )
}

TextForm.propTypes ={
    submit: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps ={
    submit: "finally submit it",
}
