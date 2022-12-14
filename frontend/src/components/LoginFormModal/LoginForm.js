import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';


function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const [formType, setFormType] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    
    return dispatch(sessionActions.login({ email, phoneNumber }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleDemo = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({
      phoneNumber: '0000000000',
      email: 'demo@user.io'
    }))
  }

  return ( formType ? (
    <>
    <form onSubmit={handleSubmit}>
      <h2 className="login-title">Enter your Phone Number</h2>
        <p className="login-body">You will receive a text message to verify your account. Message & data rates may apply.</p>
        <input
          className="phone-number-input-login"
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      <ul>
      {errors.map(error => <p className="error"key={error}>{error}</p>)}
      </ul>
      <br />
      <button className="signin-continue" type="submit">Continue</button>
      <br />
    </form>
    <button className="signin-switch" type="button" onClick={(e) => setFormType(false)}>Use email instead</button> 
    <button className="demo-button"type="button" onClick={handleDemo}>Demo User</button>
    </>) : (
      <form onSubmit={handleSubmit}>
      <h2 className="login-title">Enter your email</h2>
      <p className="login-body">Enter the email associated with your ConnecTable account, social login or new email. We’ll send a code to that email.</p>
          <input
          className="email-input-login"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <ul>
          {errors.map(error => <p className="error"key={error}>{error}</p>)}
      </ul>
      <br/>
      <button className="signin-continue" type="submit">Continue</button>
      <br/>
      <button className="signin-switch" type="button" onClick={(e) => setFormType(true)}>Use phone instead</button> 
      <button className="demo-button" type="button" onClick={handleDemo}>Demo User</button>
  </form>
    )

  );
}

export default LoginForm;