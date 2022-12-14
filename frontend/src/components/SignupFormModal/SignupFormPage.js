import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, phoneNumber }))
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
    }
    return setErrors(['Please enter a phone number']);
  };

  return (
      <form onSubmit={handleSubmit}>
        
        <h2>Get Started</h2>
        <p>Enter some information about yourself to get started.</p>

          <input
            className="email"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors&&email.length<=0?
          <label id="empty-warning">Email is required.</label>:""}
          <br />
          <input
            className="firstName"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors&&firstName.length<=0?
          <label id="empty-warning">First name is required.</label>:""}
          <br />
          <input
            className="lastName" 
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors&&lastName.length<=0?
          <label id="empty-warning">Last name is required.</label>:""}
          <br />
          <input
            className="phoneNumber"
            type="text"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors&&phoneNumber.length<=0?
          <label id="empty-warning">Phone Number is required.</label>:""}
          {errors.map(error => <p className="error"key={error}>{error} </p> )  }
          <br />
          {(email.length > 0)&&(firstName.length > 0)&&(lastName.length > 0)&&(phoneNumber.length > 0) ? 
            <button className="signup-button-true" type="submit">Continue</button> :
            <button className="signup-button-false" type="submit">Continue</button>
        }
      </form>
  );
}

export default SignupFormPage;