import React, { Component } from 'react';
import { UserNavBar } from '../banners/bannerStyledComponents';

class NavBar extends Component {
  static propTypes = {};
  render() {
    return (
      <>
        <UserNavBar id="user-navigationBar">
          <img src='../../../assets/userimage.jpg' />
          <ul id="userNav">
            <li><a href="/">Logout</a></li>
          </ul>
        </UserNavBar>
      </>
    );
  }
}

export default NavBar;
