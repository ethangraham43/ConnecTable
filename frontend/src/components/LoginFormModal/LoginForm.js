import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";


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
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return ( formType ? (
    <>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {/* <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label> */}
      <label>
      <h2>Enter your Phone Number</h2>
        <p>You will receive a text message to verify your account. Message & data rates may apply.</p>
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Continue</button>
      <br />
    </form>
    <button type="button" onClick={(e) => setFormType(false)}>Use email instead</button> 
    </>) : (
      <form onSubmit={handleSubmit}>
      <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <h2>Enter your email</h2>
      <p>Enter the email associated with your ConnecTable account, social login or new email. We’ll send a code to that email.</p>
          <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      <br/>
      <button type="submit">Continue</button>
      <br/>
      <button type="button" onClick={(e) => setFormType(true)}>Use phone instead</button> 
  </form>
    )

  );
}

export default LoginForm;