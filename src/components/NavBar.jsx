import React from 'react';

const viewBtns = {
  members: 'Members',
  games: 'Games',
  music: 'Music',
  books: 'Books',
}

const NavBar = ({ setView, view }) => (
  <nav className='ma-4 d-flex align-center gap-1'>
    <a><h1 className='ma-4 mr-8' onClick={() => setView('home')}>HMI Studios</h1></a>
    {Object.keys(viewBtns).map(key => (
      <a className={`nav-btn ${key === view ? 'nav-selected' : ''}`} onClick={() => setView(key)}>{viewBtns[key]}</a>
    ))}
  </nav>
);

export default NavBar;