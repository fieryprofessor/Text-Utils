import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared the Text", "success");
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied the Text", "success");
    };

    const handleRemoveExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Removed extra spaces", "success");
    };

    const handleCapitalizeWords = () => {
        let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
        props.showAlert("Capitalized each word", "success");
    };

    const handleReverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed the text", "success");
    };

    const handleSentenceCase = () => {
        let newText = text.toLowerCase().replace(/(^|[.!?]\s+)([a-z])/g, (match) => match.toUpperCase());
        setText(newText);
        props.showAlert("Converted to Sentence Case", "success");
    };

    const handleAlternatingCase = () => {
        let newText = text.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
        setText(newText);
        props.showAlert("Converted to Alternating Case", "success");
    };

    const handleTitleCase = () => {
        let newText = text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
        props.showAlert("Converted to Title Case", "success");
    };

    const handleRemoveNumbers = () => {
        let newText = text.replace(/[0-9]/g, '');
        setText(newText);
        props.showAlert("Removed all numbers", "success");
    };

    const handleRemovePunctuation = () => {
        let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        setText(newText);
        props.showAlert("Removed all punctuation", "success");
    };

    const handleSortWords = () => {
        let newText = text.split(/\s+/).sort().join(' ');
        setText(newText);
        props.showAlert("Sorted words alphabetically", "success");
    };

    const handleShuffleWords = () => {
        let words = text.split(/\s+/);
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }
        setText(words.join(' '));
        props.showAlert("Shuffled words randomly", "success");
    };

    const handleonChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    const containerStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    };

    const textAreaStyle = {
        backgroundColor: props.mode === "dark" ? "#1b3969" : "white",
        color: props.mode === "dark" ? "white" : "black",
        border: "1px solid #ced4da",
        borderRadius: "5px",
        padding: "10px",
        width: "100%",
        resize: "none"
    };

    const buttonContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "10px",
        marginTop: "10px"
    };

    const buttonStyle = {
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
        fontWeight:"500"
    };

    return (
        <>
            <div className="container" style={containerStyle}>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8" placeholder="Enter Your Text Here" style={textAreaStyle}></textarea>
                </div>
                <div style={buttonContainerStyle}>
                <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#007bff", color:"white" }} onClick={handleUpClick}>UpperCase</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#007bff", color: "white" }} onClick={handleLowClick}>LowerCase</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }} onClick={handleCopyClick}>Copy</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }} onClick={handleClearClick}>Clear</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#ffc107", color: "white" }} onClick={handleCapitalizeWords}>Capitalize</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#17a2b8", color: "white" }} onClick={handleRemoveExtraSpaces}>Trim Spaces</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#6f42c1", color: "white" }} onClick={handleReverseText}>Reverse</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#20c997", color: "white" }} onClick={handleSortWords}>Sort Words</button>
                    <button disabled={text.length === 0} style={{ ...buttonStyle, backgroundColor: "#fd7e14", color: "white" }} onClick={handleShuffleWords}>Shuffle Words</button>
                </div>
            </div>
          <div className="container my-3" style={containerStyle}>
                <h2>Your Text Summary:</h2>
                <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p>{text.trim().length === 0 ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} minutes read time.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview."}</p>
            </div>
        </>
    );
}
