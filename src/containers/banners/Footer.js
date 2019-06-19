import React, { Component } from 'react';
// import AboutUs from '../../components/AboutUs';
import { GeneralFooter } from '../../components/dashboardStyledComponents';

class Footer extends Component {
  render() {
    return (
      <>
        <GeneralFooter>
          <ul>
            <li><a href="AboutUs">About Us</a></li>
          </ul>

        </GeneralFooter>
      </>
    );
  }
}

export default Footer;
