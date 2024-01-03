import React from 'react';

import ProjectCard from '../components/ProjectCard.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setView } = this.props;
    return (
      <>
        <h1>Home</h1>
        <div>
          <ProjectCard view={'home'} project={'remnant'} setView={setView} />
          <ProjectCard view={'home'} project={'civclonejs'} setView={setView} />
          <ProjectCard view={'home'} project={'archivium'} setView={setView} />
          <ProjectCard view={'home'} project={'budgeteer'} setView={setView} />
          <ProjectCard view={'home'} project={'simplesequencer'} setView={setView} />
          <ProjectCard view={'home'} project={'voteinator'} setView={setView} />
          <ProjectCard view={'home'} project={'tkdmotions'} setView={setView} />
        </div>
      </>
    );
  }
}

export default Home;