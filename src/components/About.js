import React from 'react';

export default function About(props) {
  return (
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1><b>About TextUtils</b></h1>
      <p>
        Welcome to <b>TextUtilsApp</b>, your all-in-one text processing tool designed to make text manipulation effortless! 
        Whether you’re a student, writer, developer, or anyone who works with text, <b>TextUtilsApp</b> provides a variety of 
        features to help you manage and optimize your text efficiently.
      </p>

      <h3>✨ Features:</h3>
      <ul>
        <li><b>Text Transformation</b> – Convert text to uppercase, lowercase, or capitalize words instantly.</li>
        <li><b>Word & Character Count</b> – Get real-time statistics on word and character count.</li>
        <li><b>Reading Time Estimator</b> – Know how long it will take to read your text.</li>
        <li><b>Clear & Copy Text</b> – Easily clear or copy text with a single click.</li>
        <li><b>Dark & Light Mode</b> – Switch themes for a comfortable reading experience.</li>
      </ul>

      <p>
        With an intuitive interface and powerful features, <b>TextUtilsApp</b> makes text processing simple, fast, and efficient. 
        Try it now and enhance your productivity! 
      </p>

      <p><b>TextUtilsApp</b> was proudly created by <b>Om Singh</b>, a passionate developer dedicated to building efficient and user-friendly applications.</p>
    </div>
  );
}
