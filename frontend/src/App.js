import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Start from './components/Start';
//import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = "My React App" abouttext ="This is an professional App"/>
    <About/>
    <div className="container">
     {/*<TextForm submit = "submit" heading = "Enter the text to analyze"/>*/}
     {/*<Start heading ="Hi I am the one"/>*/}
    </div>
    
    </>
  );
}

export default App;
