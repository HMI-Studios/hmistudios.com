import React from 'react';
import { Outlet } from "react-router-dom";

import NavBar from '../components/NavBar.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
      </>
    );
  }
}

export default Layout;