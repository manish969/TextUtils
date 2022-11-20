import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        //console.log("UpperCase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerercase", "success");
    }
    const handleClearClick = () => {
        //console.log("UpperCase was clicked" + text)
        let newText = "";
        setText(newText)
        props.showAlert("Text clear", "success");
    }
    const handleOnChange = (event) => {
        //console.log("OnChange");
        setText(event.target.value)
        
    }

    const [text, setText] = useState
        ();
    //text = "new text";  //Wrong way to change the state
    //setText = ("new text"); //Correct way to change the state
  return (
    
      <div className="container" style={ { color: props.mode === 'dark' ? 'white' : 'black' } }>
          <h1>{props.heading}</h1>
        <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={ { backgroundColor: props.mode === 'dark' ? 'grey' : 'white' } } id="myBox" rows="8"></textarea>
              
              <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
              <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
              <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          </div>
          <div className="container my-3" style={ { color: props.mode === 'dark' ? 'white' : 'black' } }>
              <h1>Your text summary</h1>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
          </div>
    </div>
  )
}
