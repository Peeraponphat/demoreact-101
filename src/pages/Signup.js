import React from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  console.log("props", props);

  return (
    <div>
      <h1>Sign-up</h1>
      <div>
        <p> Username </p>
        <input
          className="form-control w-100"
          type="text"
          placeholder="Demo@gmail.com"
          value={props.email}
          onChange={(e) => props.handleEmail(e)}
          autoFocus
          required
        />
      </div>
      <div>
        <p> Password </p>
        <input
          className="form-control "
          type="password"
          placeholder="demo012"
          value={props.password}
          onChange={(e) => props.handlePassword(e)}
          required
        />
      </div>

      <div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary mt-2 w-50"
            onClick={() => props.handleSignup()}
          >
            Sign-up
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-center mt-3 mr-1">Have an Account?</p>
          <button
            className="btn btn-link px-0"
            onClick={() => props.setHasAccount(!props.hasAccount)}
          >
            Sign-In
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
