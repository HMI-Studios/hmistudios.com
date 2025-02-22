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
        <div className="d-flex flex-row flex-wrap justify-center gap-6">
          <ProjectCard small project={'archivium'} />
          {/* <ProjectCard small project={'remnant'} /> */}
          <ProjectCard small project={'tkdmotions'} />
          {/* <ProjectCard small project={'budgeteer'} /> */}
          <ProjectCard small project={'simplesequencer'} />
          <ProjectCard small project={'voteinator'} />
        </div>
      </>
    );
  }
}

export default Misc;