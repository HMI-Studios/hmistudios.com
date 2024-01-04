import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, subtitle, body, links, actions, cover, avatar }) => {

  return (
    <div className="card">
      {cover && <div className="d-flex flex-column">{cover}</div>}
      <div className="d-flex flex-column gap-1 card-content">
        <div className="d-flex align-center">
          {avatar && <div className="avatar mr-6">{avatar}</div>}
          <div className="d-flex flex-column gap-1">
            <h2 className="ma-0">{title}</h2>
            {subtitle && <span className="subtitle">{subtitle}</span>}
          </div>
        </div>
        {body && <p>{body}</p>}
      </div>
      <div className="d-flex space-between gap-1">
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
        {actions && (
          <div className="d-flex align-center ma-2 gap-2">
            {actions.map((action, i) => (
              <a key={`${i}_action`} className="link nav-btn" onClick={action.action}>{action.title}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;