import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import logo from "../img/logo.png";
const Login = () => {

    const [loginData,setLoginData] = useState([]);

    const { logInUser,googleSignIn } = useAuth();
    
    const handleOnChnage = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        logInUser(loginData.email, loginData.password);
        e.preventDefault()
    }
    return (
      <div className="w-50 mx-auto">
        <h2>Login</h2>
        <img
          className="card-img-top"
          src={logo}
          style={{ width: "50px", height: "50px" ,borderRadius:'50%'}}
          alt=""
        />
        <form onSubmit={handleOnSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={handleOnChnage}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleOnChnage}
            />
          </div>

          <button type="submit" class="btn btn-primary my-3">
            Log in
          </button>
        </form>

        <button onClick={googleSignIn} className="btn btn-primary my-3">
          {" "}
          Google Sign In
        </button>

        <p>Are Your New User Please <Link to="/register">Register </Link></p>
      </div>
    );
};

export default Login;