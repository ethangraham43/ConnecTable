
import React from 'react';
import { Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './index.css';
import SearchSplash from './components/SearchSplash';

function renderBody() {

}

function App() {
  return (
    <>
    <div className='top-nav'>
    <a className="github" href="https://github.com/ethangraham43"><img className="githubLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg" /></a>
    <a className="linkedin" href="https://www.linkedin.com/in/ethan-graham-28454918b/"><img className="linkedinLogo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
    </div>
    <Navigation />
    <SearchSplash />
    </>
  );
}

export default App;
