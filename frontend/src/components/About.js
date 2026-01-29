//import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })

    let myStyle ={
      color: props.mode === 'dark'? '#f1ecec' : '#12376e',
      backgroundColor: props.mode === 'dark'? '#12376e' : '#f1ecec',
      border: '2px solid',
      borderColor: props.mode === 'dark'? '#f1ecec' : '#12376e'
    }

   
  return (
    <>
    <div className="container" style ={{color: myStyle.color}}>
        <h1 className='my-2'><center>About us</center></h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the first item’s accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the second item’s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Responsive Design</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is the third item’s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
      </div>
    </div>
  </div>
</div> 
</div>
    </>
  )
}
