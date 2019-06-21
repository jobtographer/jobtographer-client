import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPage.css';

import logo from '../../../assets/logo.png';
import landing from '../../../assets/landing.png';
import leftContent from '../../../assets/leftContent.png';
import rightContent from '../../../assets/rightContent.png';
import arrowsblack from '../../../assets/arrowsblack.png';

export default class LandingPage extends PureComponent {


  render() {
    return (
      <div className={styles.LandingPage}>
        <img src={landing} className={styles.leftLogo} />
        <section className={styles.section1}>
          <section>
            <img src={leftContent} />
          </section>
          <Aside />
        </section>

        <section className={styles.section2}>
          <img src={logo}></img>
          <div>
            <h1>Let&#39;s get to work !</h1>
            <p>Workür is here to help with your job search. Track all your job hunts in one place. </p>
            <button>Login</button>
          </div>
          <img src={arrowsblack} className={styles.arrowsblack} />
        </section>
      </div>
    );
  }
}


function Aside() {
  return (
    <aside className={styles.Aside}>
      <div /><div /><div /><div />
      <div /><div /><div /><div />
    </aside>
  );
}
