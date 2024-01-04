import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const paths = {
  '/members': 'Members',
  '/games': 'Games',
  '/music': 'Music',
  '/books': 'Books',
  '/misc': 'Misc.',
}

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="nav-box">
      <nav className="ma-4 mb-0 d-flex align-center gap-1">
        <Link className="link" to="/"><h1 className="ma-4 mr-8">HMI Studios</h1></Link>
        {Object.keys(paths).map(path => (
          <Link key={path} className={`link nav-btn ${path === location.pathname ? 'nav-selected' : ''}`} to={path}>{paths[path]}</Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;