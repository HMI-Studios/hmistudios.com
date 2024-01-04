import React from 'react';

import ProjectCard from '../components/ProjectCard.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Home</h1>
        <div>
          <ProjectCard view={'home'} project={'remnant'} />
          <ProjectCard view={'home'} project={'civclonejs'} />
          <ProjectCard view={'home'} project={'archivium'} />
          <ProjectCard view={'home'} project={'budgeteer'} />
          <ProjectCard view={'home'} project={'simplesequencer'} />
          <ProjectCard view={'home'} project={'voteinator'} />
          <ProjectCard view={'home'} project={'tkdmotions'} />
        </div>
      </>
    );
  }
}

export default Home;