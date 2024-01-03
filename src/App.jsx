import React from 'react';

import Home from './views/Home.jsx';
import Members from './views/Members.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      viewData: null,
    };

    this.setView = this.setView.bind(this);
  }

  setView(view, viewData=null) {
    this.setState({ view, viewData });
  }

  render() {
    const { view } = this.state;
    return (
      <>
        <NavBar setView={this.setView} view={view} />
        <div className='content'>
          {view}
          {view === 'home' && <Home setView={this.setView} />}
          {view === 'members' && <Members setView={this.setView} />}
        </div>
      </>
    );
  }
}

export default App;
