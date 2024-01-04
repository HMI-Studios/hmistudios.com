import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './views/Layout.jsx';
import NoPage from './views/NoPage.jsx';
import Home from './views/Home.jsx';
import Members from './views/Members.jsx';

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
              <Route index element={<Members />} />
              <Route path="members" element={<Members />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
