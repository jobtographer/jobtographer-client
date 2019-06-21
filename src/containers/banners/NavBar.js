import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GeneralNavBar, Li1 } from '../banners/bannerStyledComponents';
import lighthouse from '../../../assets/lighthouse1.png';

class NavBar extends Component {
  render() {
    return (
      <>
        <GeneralNavBar >
          <Li1><Link to="/dashboard">
            <p>Jobs</p>
          </Link></Li1>
          <img src={lighthouse}></img>
        </GeneralNavBar>
      </>
    );
  }
}

export default NavBar;
