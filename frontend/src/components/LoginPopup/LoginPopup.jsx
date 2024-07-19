import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Login");
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onchangeHandle = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/login`, {
        email: data.email,
        password: data.password
      });
      if (response.data.success) {
        toast.success("Login successful");
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token)
        setShowlogin(false);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Error logging in");
      console.error("Login error: ", error);
    }
  };

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/register`, {
        name: data.name,
        email: data.email,
        password: data.password
      });
      if (response.data.success) {
        toast.success("Registration successful");
        setCurrState("Login");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Error registering");
      console.error("Register error: ", error);
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={currState === "Login" ? onLogin : onRegister} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign UP" && (
            <input
              name='name'
              onChange={onchangeHandle}
              value={data.name}
              type="text"
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onchangeHandle}
            value={data.email}
            type="email"
            placeholder='Your email'
            required
          />
          <input
            name='password'
            onChange={onchangeHandle}
            value={data.password}
            type="password"
            placeholder='Password'
            required
          />
        </div>
        <button type='submit'>{currState === "Sign UP" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>To continue, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create new account? <span onClick={() => setCurrState("Sign UP")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
