import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css'

function ErrorPage() {
    return (
        <div className='full-error-page'>
        <img className="error-octopus" src="//cdn.otstatic.com/cfe/11/images/octopus-ea4592.svg" alt="Octopus Soup"></img>
        <div className="error-page">
            <h1 className='embarrassing-title'>Well, this is embarrasing.</h1>
            <h2 className='unable-to-find'>We weren't able to find the page you're looking for.</h2>
            <h3 className='errorcode-404'>Error code: 404</h3>
            <p className='links-p-tag-errors'>Here is a link to go back home:</p>
            <NavLink to='/'>
                Home
            </NavLink>
        </div>
        </ div>
    );
}

export default ErrorPage;