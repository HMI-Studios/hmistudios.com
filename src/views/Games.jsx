import React from 'react';

import ProjectCard from '../components/ProjectCard.jsx';

class Games extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column align-center"><h1>Games</h1></div>
        <div className="d-flex flex-column align-center gap-6">
          <ProjectCard project={'kyo'} />
          <ProjectCard project={'civclonejs'} />
        </div>
      </>
    );
  }
}

export default Games;