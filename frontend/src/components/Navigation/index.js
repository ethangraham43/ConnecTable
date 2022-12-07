import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function Navigation() {

    const dispatch = useDispatch();
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <button onClick={logout}>Log Out</button>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <ul>
        <NavLink exact to="/">
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/opentable_logo_icon_170879.png" className="logo"alt=''/><h3 className='title'>ConnecTable</h3>
        </NavLink>
        <br />
        <br />
        {sessionLinks}
    </ul>
  );
}

export default Navigation;