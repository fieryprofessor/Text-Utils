import React from 'react';

export default function About(props) {
  const themeStyle = {
    color: props.mode === "dark" ? "white" : "#333",
    backgroundColor: props.mode === "dark" ? "#222" : "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    padding: "8px 0",
    fontSize: "16px",
  };

  return (
    <div className="container" style={themeStyle}>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>About TextUtils</h1>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Welcome to <b>TextUtilsApp</b>, your all-in-one text processing tool designed to make text manipulation effortless! 
        Whether you’re a student, writer, developer, or anyone who works with text, <b>TextUtilsApp</b> provides a variety of 
        features to help you manage and optimize your text efficiently.
      </p>

      <h3 style={{ marginTop: "20px", textDecoration: "underline" }}>✨ Features:</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}><b>🔠 Text Transformation</b> – Convert text to uppercase, lowercase, or capitalize words instantly.</li>
        <li style={listItemStyle}><b>📊 Word & Character Count</b> – Get real-time statistics on word and character count.</li>
        <li style={listItemStyle}><b>⏳ Reading Time Estimator</b> – Know how long it will take to read your text.</li>
        <li style={listItemStyle}><b>📋 Clear & Copy Text</b> – Easily clear or copy text with a single click.</li>
        <li style={listItemStyle}><b>🌗 Dark & Light Mode</b> – Switch themes for a comfortable reading experience.</li>
      </ul>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        With an intuitive interface and powerful features, <b>TextUtilsApp</b> makes text processing simple, fast, and efficient. 
        Try it now and enhance your productivity! 
      </p>

      <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}>
        <b>TextUtilsApp</b> was proudly created by <span style={{ color: "#007bff" }}>Om Singh</span>, a passionate developer dedicated to building efficient and user-friendly applications.
      </p>
    </div>
  );
}
