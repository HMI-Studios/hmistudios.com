import React from 'react';

import ProjectCard from '../components/ProjectCard.jsx';

class Games extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column align-center"><h1>Johannes's Music</h1></div>
        <div className="d-flex flex-row flex-wrap justify-center gap-6">
          <ProjectCard small contain project={'music/theautumncourt'} />
          <ProjectCard small contain project={'music/aglimmerofhope'} />
          <ProjectCard small contain project={'music/thesparrow'} />
          <ProjectCard small contain project={'music/thewarriorcomeshome'} />
          <ProjectCard small contain project={'music/metrorag'} />
          <ProjectCard small contain project={'music/sombremelody1'} />
        </div>
        <div className="d-flex flex-column align-center"><h1>Remnants</h1></div>
        <div className="d-flex flex-row flex-wrap justify-center gap-6">
          <ProjectCard small contain project={'music/freeasthewind'} />
          <ProjectCard small contain project={'music/sheocaelora'} />
          <ProjectCard small contain project={'music/alassfromihrzeral'} />
          <ProjectCard small contain project={'music/paperswans'} />
          <ProjectCard small contain project={'music/theelvenkingdom'} />
          <ProjectCard small contain project={'music/lifeandliberty'} />
          <ProjectCard small contain project={'music/theflowerofzrenzru'} />
        </div>
        <div className="d-flex flex-column align-center"><h1>Drifter OST</h1></div>
        <div className="d-flex flex-row flex-wrap justify-center gap-6">
          <ProjectCard small contain project={'music/encounter'} />
          <ProjectCard small contain  project={'music/thejungle'} />
          <ProjectCard small contain  project={'music/melodyofthenight'} />
          <ProjectCard small contain  project={'music/thepiper'} />
          <ProjectCard small contain  project={'music/seasidesaloon'} />
        </div>
      </>
    );
  }
}

export default Games;