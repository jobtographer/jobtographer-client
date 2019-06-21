import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserNavBar } from '../banners/bannerStyledComponents';
import { getSessionImage } from '../../selectors/sessionSelector';

class NavBar extends Component {
  static propTypes = {
    image: PropTypes.string
  };
  render() {
    return (
      <>
        <UserNavBar>
          <img style={{ border: 'solid white .1px' }} src={this.props.image || '../../../assets/userimage.jpg'} />
          <a href="/">Logout</a>
        </UserNavBar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  image: getSessionImage(state)
});

export default connect(
  mapStateToProps
)(NavBar);
