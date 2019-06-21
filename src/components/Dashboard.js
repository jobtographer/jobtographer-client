import React from 'react';
import AddJob from '../containers/AddJob';
import AllJobs from '../containers/AllJobs';
import NavBar from '../containers/banners/NavBar';
import UserNav from '../containers/banners/UserNav';
// import Footer from '../containers/banners/Footer';
import { AllJobsDisplay, StyledDashboard, Title, Upsidedown } from './dashboardStyledComponents';
import FooterContainer from '../containers/banners/Footer';
import { WhiteBackground, Splatter, FooterImage } from '../containers/banners/bannerStyledComponents';

export default function Dashboard() {
  return (
  <>
    <WhiteBackground />
    <Splatter />
    <Upsidedown />
    <StyledDashboard>
      <Title>Workür</Title>
      <NavBar />
      <UserNav />
      <AddJob />
      <AllJobsDisplay>
        <AllJobs />
      </AllJobsDisplay>
      <FooterImage />
      <FooterContainer />
    </StyledDashboard>
  </>
  );
}
