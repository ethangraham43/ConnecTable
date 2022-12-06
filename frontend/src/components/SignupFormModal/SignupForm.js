import { React, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import SignupPage from '../SignupFormPage'
import { Modal } from "../../context/Modal";


function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
        // debugger

//     return dispatch(sessionActions.login({ email, phoneNumber }))
//       .catch(async (res) => {
//         let data;
//         try {
//           // .clone() essentially allows you to read the response body twice
//           data = await res.clone().json();
//         } catch {
//           data = await res.text(); // Will hit this case if the server is down
//         }
//         if (data?.errors) setErrors(data.errors);
//         else if (data) setErrors([data]);
//         else setErrors([res.statusText]);
//       });

  };

  return (
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
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <br />
      {/* <button onClick={signupRed}>Continue */}
      {/* </button> */}
      <br />
    </form>
    {/* <form onSubmit={emailForm()}>
        <button type="submit">Use email instead</button>
    </form> */}
    </>
  );
}

export default SignupForm;