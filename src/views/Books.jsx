import React from 'react';

import ProjectCard from '../components/ProjectCard.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column align-center"><h1>The Remnants</h1></div>
        <div className="d-flex flex-row flex-wrap justify-center gap-6">
          <ProjectCard small project={'books/trialbyfire'} />
          <ProjectCard small draft project={'books/sunsandshadows'} />
        </div>
        <div className="d-flex flex-column align-center"><h1>Gaian Universe</h1></div>
        <div className="d-flex flex-row flex-wrap justify-center gap-6">
          <ProjectCard small draft project={'books/intothemist'} />
        </div>
      </>
    );
  }
}

export default Books;