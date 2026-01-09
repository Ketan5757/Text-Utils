import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
//import Start from './components/Start';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor ="grey";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
    
  }
  return (
    <>
    <Navbar title = "My React App" abouttext ="This is an professional App" mode ={mode} toggleMode ={toggleMode}/>
    {/*<About/>*/}
    <div className="container">
     <TextForm submit = "submit" heading = "Enter the text to analyze" mode = {mode}/>
     {/*<Start heading ="Hi I am the one"/>*/}
    </div>
    
    </>
  );
}

export default App;
