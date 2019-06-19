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
          <a href="/">Logout</a>
        </UserNavBar>
      </>
    );
  }
}

export default NavBar;
