import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
//import Start from './components/Start';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
    
  }
  return (
    <>
    <Navbar title = "My React App" abouttext ="This is an professional App" mode ={mode} toggleMode ={toggleMode}/>
    {/*<About/>*/}
    <Alert alert={alert}/>
    <div className="container">
     <TextForm showAlert ={showAlert} submit = "submit" heading = "Enter the text to analyze"  mode = {mode}/>
     {/*<Start heading ="Hi I am the one"/>*/}
    </div>
    
    </>
  );
}

export default App;
