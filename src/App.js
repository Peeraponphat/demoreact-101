//import './App.css';
//import op from "./assets/dog.png";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
function App() {
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
    </Routes>
    <Routes>
    <Route path="/Signup"element={<Signup/>}></Route>
    </Routes>
    <Routes>
    <Route path="/SignIn"element={<SignIn/>}></Route>
    </Routes>
    <Routes>
    <Route path="/Profile"element={<Profile/>}></Route>
    </Routes>
    </>
  )


 /* return (
    <div className="App">
      <header className="App-header">
        <img src={op} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload eiei.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/MOnimpossi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
