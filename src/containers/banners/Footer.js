import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AboutUs from '../../components/AboutUs';
import { Footer } from './bannerStyledComponents';
import AboutUs from '../../components/AboutUs';

class FooterContainer extends Component {
  render() {
    return (
      <>
        <Footer>
          <span>~ Footer here ~</span>
          <ul>
            <li><Link to={AboutUs}><a>About Us</a></Link></li>
          </ul>

        </Footer>
      </>
    );
  }
}

export default FooterContainer;
