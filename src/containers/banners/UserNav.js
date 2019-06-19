import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import { UserNavBar } from '../../components/dashboardStyledComponents';

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
