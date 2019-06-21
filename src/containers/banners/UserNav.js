import React, { Component } from 'react';
import { UserNavBar } from '../banners/bannerStyledComponents';

class NavBar extends Component {
  static propTypes = {};
  render() {
    return (
      <>
        <UserNavBar>
          <img src='../../../assets/userimage.jpg' />
          <a href="/">Logout</a>
        </UserNavBar>
      </>
    );
  }
}

export default NavBar;
