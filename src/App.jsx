import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './views/Layout.jsx';
import NoPage from './views/NoPage.jsx';
import Home from './views/Home.jsx';
import Members from './views/Members.jsx';
import Games from './views/Games.jsx';
import Music from './views/Music.jsx';
import Books from './views/Books.jsx';
import Misc from './views/Misc.jsx';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="members" element={<Members />} />
              <Route path="games" element={<Games />} />
              <Route path="music" element={<Music />} />
              <Route path="books" element={<Books />} />
              <Route path="misc" element={<Misc />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
