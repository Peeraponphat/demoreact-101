import React from "react";
import dog from "../assets/dog.png";
import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={dog} alt="logo" width="3%"></img>
        <button
          className="navbar-toggler"type="button"data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"aria-controls="navbarSupportedContent" 
          aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="navbar-nav">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link active" href="/Signup">Sign-up</a>
            <a className="nav-link active" href="/SignIn">Sign-in</a>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Header;
