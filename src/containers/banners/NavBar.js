import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GeneralNavBar, Li1 } from '../banners/bannerStyledComponents';

class NavBar extends Component {
  render() {
    return (
      <>
        <GeneralNavBar >
          <Li1><Link to="/">
            <p>Jobs</p>
          </Link></Li1>
          <img src='../../assets/lighthouse1.png'></img>
        </GeneralNavBar>
      </>
    );
  }
}

export default NavBar;
