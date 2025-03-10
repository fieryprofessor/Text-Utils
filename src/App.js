
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
const [mode,setMode] = useState("light");
const [alert,setAlert] = useState(null);

const showAlert = (message, type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },1500)
}

const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#080a7c";
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
}



  return (
    <>
   <Router>
<Navbar title="TextUtils" AboutHome="Home" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
    <Routes>
      <Route exact path="/" element={<TextForm heading=" Try TextUtils - Enter your Text Below" mode={mode} showAlert={showAlert}/> } />
      <Route exact path="/about" element={<About mode={mode} />} />
    </Routes>
</div>
</Router>
    </>
  );
}

export default App;
