import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
//import Start from './components/Start';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  const[alert, setAlert] = useState('null');

  const showAlert =(message, type)=>{
    setAlert ({
      msg: message,
      type: type
    });

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor ="grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "My React App" abouttext ="This is an professional App" mode ={mode} toggleMode ={toggleMode}/>
    {/*<About/>*/}
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path ="/about" element ={<About mode = {mode}/>}>
        </Route>
        <Route exact path ="/" element ={<TextForm showAlert ={showAlert} submit = "submit" heading = "Enter the text to analyze"  mode = {mode}/>}>
        </Route>
      </Routes>
     {/*<Start heading ="Hi I am the one"/>*/}
     {/*<About/>*/}
     {/*<Footer/>*/ }
    </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
