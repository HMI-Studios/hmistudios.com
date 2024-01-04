import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const paths = {
  '/members': 'Members',
  '/games': 'Games',
  '/music': 'Music',
  '/books': 'Books',
}

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="ma-4 d-flex align-center gap-1">
      <Link className="link" to="/"><h1 className="ma-4 mr-8">HMI Studios</h1></Link>
      {Object.keys(paths).map(path => (
        <Link key={path} className={`link nav-btn ${path === location.pathname ? 'nav-selected' : ''}`} to={path}>{paths[path]}</Link>
      ))}
    </nav>
  );
};

export default NavBar;