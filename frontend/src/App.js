import './App.css';


let name = prompt("enter your name:");
function App() {
  return (
    <>
    <div className="blank">nice to meet you</div>
    <header>
      <nav>
        <h1>home</h1>
        <h1>about</h1>
        <h1>contact</h1>
      </nav>
    </header>
    <div className="container">My name is Ketan</div>
    <h3>My name is {name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aut consequuntur, accusamus omnis fugiat dicta repellendus dolorum nesciunt impedit suscipit consectetur, delectus voluptate similique quas nihil, eum autem? Soluta, rerum?
    </p>
    </>
  );
}

export default App;
