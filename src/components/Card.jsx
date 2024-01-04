import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, subtitle, links, avatar }) => {

  return (
    <div className="card">
      <div className="d-flex align-center card-content">
        {avatar && <div className="avatar mr-6">{avatar}</div>}
        <div className="d-flex flex-column gap-1">
          <h2 className="ma-0">{title}</h2>
          {subtitle && <span className="subtitle">{subtitle}</span>}
        </div>
      </div>
      {links && (
        <div className="d-flex align-center ma-2 gap-2">
          {links.map((link, i) => (
            <>
              {link.href && <Link key={`${i}_external`} className="link nav-btn" to={link.href} target="_blank" rel="noopener noreferrer">{link.title}</Link>}
              {link.path && <Link key={i} className="link nav-btn" to={link.path}>{link.title}</Link>}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;