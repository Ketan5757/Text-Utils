import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  
    //convert the text to upper case
    const myfunc =()=>{
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    //convert the text to lower case
    const lowerCase =() =>{
      console.log("convert the text to lower case" + text);
      let newText = text.toLowerCase();
      setText(newText);
    }
    //sorting the text into ascending order
    const sortText =() =>{
      let newText = text.split("").sort().join("");
      setText(newText);
    }

    //reverse the text when click on button
    const reverseText =()=>{
      let newText = text.split("").reverse().join("");
      setText(newText);
    }
    //to clear the text 
    const clearText =()=>{
      setText("");
    }

    const handleonChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const[text, setText] = useState("");
  return (
    <>
    <div className="container" >
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className='form-control' value ={text} onChange ={handleonChange} style = {{backgroundColor: props.mode === 'light'?"white":"grey"}} id='myBox' rows='8' columns ='8'></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick = {myfunc}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick ={lowerCase}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick ={sortText}>sort the text into ascending order</button>
  <button className="btn btn-primary mx-2" onClick ={reverseText}>reverse the text</button>
  <button className="btn btn-primary mx-2" onClick ={clearText}>Clear Text</button>
  <div className="container my-3" style = {{backgroundColor: props.mode === 'light'?"white":"grey"}}>
    <h1>Your Text Summary</h1>
    <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
    <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length >0 ? text: 'Enter Something to preview here'}</p>
  </div>
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
