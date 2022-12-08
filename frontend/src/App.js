
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
    </div>
    <Navigation />
    <SearchSplash />
    </>
  );
}

export default App;
