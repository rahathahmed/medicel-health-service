import React, { useState } from "react";
import useAuth from "../../Hook/UseAuth";

const Register = () => {

  const [loginData, setLoginData] = useState([]);

  const {registerUser} = useAuth();

  const handleOnChnage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};

    newLoginData[field] = value;

    setLoginData(newLoginData);

    console.log(loginData);
  };

  const handleOnSubmit = (e) => {
    registerUser(loginData.email,loginData.password )

    e.preventDefault();
  };

  return (
    <div className="w-50 mx-auto p-3">
      <h2> Register </h2>
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

        <button type="submit" class="btn btn-primary mt-3">
          Register
        </button>


      </form>
    </div>
  );
};

export default Register;
