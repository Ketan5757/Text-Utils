import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const myfunc =()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const lowerCase =() =>{
      console.log("convert the text to lower case" + text);
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleonChange =(event)=>{
        console.log("on change");
        setText(event.target.value);

    }

    const[text, setText] = useState("");
  return (
    <>
    
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className='form-control' value ={text} onChange ={handleonChange}id='myBox' rows='8' columns ='8'></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick = {myfunc}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick ={lowerCase}>Convert to LowerCase</button>
  <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
    <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
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
