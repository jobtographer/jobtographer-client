import React, { Component } from 'react';
import Jobs from '../AllJobs';
import { GeneralNavBar, Li1, Li2 } from '../banners/bannerStyledComponents';

class NavBar extends Component {
  static propTypes = {};
  render() {
    return (
      <>
        <GeneralNavBar >
          <ul>
            <Li1><a href="/">Home</a></Li1>
            <Li2><a href={Jobs}>Jobs</a></Li2>
          </ul>
          <img src='../../assets/Logo.png'></img>
        </GeneralNavBar>
      </>
    );
  }
}

export default NavBar;
