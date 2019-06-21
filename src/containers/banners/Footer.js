import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './bannerStyledComponents';

class FooterContainer extends Component {
  render() {
    return (
      <>
        <Footer>
          <Link to={'/aboutUs'}>Contact</Link>
          <Link to={'/aboutUs'}>Glassdoor</Link>
          <Link to={'/aboutUs'}>Indeed</Link>
          <Link to={'/aboutUs'}>About Us</Link>
        </Footer>
      </>
    );
  }
}

export default FooterContainer;
