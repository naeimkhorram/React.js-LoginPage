import React from "react";

const Signup = () => {
  return (
    <>
      <div className="signupDiv">
        <form>
          <h3 className="loginH3">Signup :</h3>
          <input placeholder="Name" required/>
          <input placeholder="Enter your Email" required/>
          <input placeholder="Password" required/>
          <input placeholder="Phone" required/>
          <button className="loginButton">Sign Up</button>
        </form>       
      </div>
    </>
  );
};

export default Signup;
