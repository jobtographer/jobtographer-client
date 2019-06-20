import React from 'react';
import AddJob from '../containers/AddJob';
import AllJobs from '../containers/AllJobs';
import NavBar from '../containers/banners/NavBar';
import UserNav from '../containers/banners/UserNav';
// import Footer from '../containers/banners/Footer';
import { AllJobsDisplay, StyledDashboard } from './dashboardStyledComponents';
import FooterContainer from '../containers/banners/Footer';
import { WhiteBackground } from '../containers/banners/bannerStyledComponents';

export default function Dashboard() {
  return (
  <>
    <WhiteBackground />
    <StyledDashboard>
      <NavBar />
      <UserNav />
      <AddJob />
      <AllJobsDisplay>
        <AllJobs />
      </AllJobsDisplay>
      <FooterContainer />
    </StyledDashboard>
  </>
  );
}
