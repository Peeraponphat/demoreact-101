import SignIn from "./SignIn";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function Home() {
  const [email, setEmail] = useState("");

  const [password, setPassWord] = useState("");

  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //window.localStorage.clear();
      } else {
        //window.localStorage.
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const handleSignup = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((response) => {
        navigate("/profile");
        window.localStorage.setItem("user", response.user.email);
        setEmail(response.user.email);
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((response) => {
        navigate("/profile");
        window.localStorage.setItem("user", response.user.email);
        setEmail(response.user.email);
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Container
      className="shadow p-4 mb-5 bg-white rounded"
      style={{ width: "550px" }}
    >
      {hasAccount ? (
        <SignIn
          email={email}
          password={password}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignIn={handleSignIn}
        />
      ) : (
        <Signup
          email={email}
          password={password}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignup={handleSignup}
        />
      )}
    </Container>
  );
}

export default Home;
