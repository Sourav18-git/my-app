import React ,{useState}from 'react'


export default function TextForm(props) {
    const[text,setText]=useState("Enter text here")

    const handleUpClick=()=>{
        console.log("upeer clicked");
      let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("onchange clicked");
        setText(event.target.value);
    }
  return (
    <>
    <h1>{props.heading}</h1>
  <div className="mb-3">
 
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
  </>
  )
}
