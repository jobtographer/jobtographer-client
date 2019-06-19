import React from 'react';
// import { connect } from 'react-redux';
import CoverLetters from '../components/CoverLetters';
import Resumes from '../components/Resumes';
import NavBar from '../containers/banners/NavBar';
import UserNav from '../containers/banners/UserNav';
import Footer from '../containers/banners/Footer';

export default function CoverLetterResumeDisplay() {
  return (
    <>
      <NavBar />
      <UserNav/>
      <section>
        <section>
          <CoverLetters />
        </section>
        <section>
          <Resumes />
        </section>
      </section>
      <Footer />
    </>
  );
}
