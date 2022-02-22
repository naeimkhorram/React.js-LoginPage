import React from "react";
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="loginDiv">
        <form>
          <h3 className="loginH3">Login :</h3>
          <input placeholder="Enter Email" required/>
          <input placeholder="Enter your password" required/>
          <button className="loginButton"> Submit</button>
          <br/>
          <Link style={{textDecoration: 'none' , color : 'rgba(192, 192, 192, 0.664)'}} to = './signup'>Create an account</Link>
          <br/>
          <br/>
          <Link style={{textDecoration: 'none' , color : 'rgba(192, 192, 192, 0.664)'}} to = '/' >Forget your password?</Link>
        </form>
        
      </div>
    </>
  );
};

export default Login;
