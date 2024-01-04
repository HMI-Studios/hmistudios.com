import React from 'react';

import ProjectCard from '../components/ProjectCard.jsx';

class Misc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column align-center"><h1>Miscellaneous Projects</h1></div>
        <div className="d-flex flex-column gap-6">
          <ProjectCard collapsed project={'archivium'} />
          <ProjectCard collapsed project={'remnant'} />
          <ProjectCard collapsed project={'tkdmotions'} />
          <ProjectCard collapsed project={'budgeteer'} />
          <ProjectCard collapsed project={'simplesequencer'} />
          <ProjectCard collapsed project={'voteinator'} />
        </div>
      </>
    );
  }
}

export default Misc;