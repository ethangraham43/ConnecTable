import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from "react-router-dom";

function ProfileDropdown({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="user-button"onClick={openMenu}>
        <img className="user-logo" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/512/external-user-ui-basic-anggara-basic-outline-anggara-putra.png" alt="" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <p className="profile-title">Hello, {user.firstName}!</p>
          <NavLink to={`/users/${user.id}`}>
          <button className="my-profile-button">My Profile</button>
          </NavLink>
          <button className="sign-out"onClick={logout}>Sign Out</button>
        </div>
      )}
    </>
  );
}

export default ProfileDropdown;