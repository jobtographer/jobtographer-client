import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jobs from '../AllJobs';
import { GeneralNavBar, Li1, Li2 } from '../banners/bannerStyledComponents';

class NavBar extends Component {
  static propTypes = {};
  render() {
    return (
      <>
        <GeneralNavBar >
          <ul>
            <Li1><Link to={Jobs}>Jobs</Link></Li1>
            <Li2><Link to={Jobs}>RESUME</Link></Li2>
          </ul>
          <img src='../../assets/Logo.png'></img>
        </GeneralNavBar>
      </>
    );
  }
}

export default NavBar;
