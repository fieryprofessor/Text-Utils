import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick = ()=>{
        let newtext = "";
        setText(newtext)
        props.showAlert("Cleared the Text","success");
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the Text","success");
    }
    const handleonChange = (event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control border border-dark" value={text} onChange={handleonChange} id="mybox" rows="12" placeholder="Enter Your Text Here" style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-success mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summary:</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p> {text.trim().length === 0 ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} minutes read time.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textarea to preview it."}</p>
    </div>
    </>
  );
}


