import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
    <Navbar title = "My React App" abouttext ="This is an professional App"/>
    <div className="container">
      <TextForm submit = "submit" heading = "Enter the text to analyze"/>
    </div>
    
    </>
  );
}

export default App;
