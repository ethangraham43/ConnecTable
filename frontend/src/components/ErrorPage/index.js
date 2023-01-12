import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>Well, this is embarrasing.</h1>
            <h2>We weren't able to find the page you're looking for.</h2>
            <h3>Error code: 404</h3>
            <p>Here is a link to go back home:</p>
            <NavLink to='/'>
                Home
            </NavLink>
        </div>
    );
}

export default ErrorPage;