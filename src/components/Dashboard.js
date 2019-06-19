import React from 'react';
import AddJob from '../containers/AddJob';
import AllJobs from '../containers/AllJobs';
import NavBar from '../containers/banners/NavBar';
import UserNav from '../containers/banners/UserNav';
import Footer from '../containers/banners/Footer';
import { AllJobsDisplay, StyledDashboard } from './dashboardStyledComponents';
import { GeneralFooter } from '../containers/banners/bannerStyledComponents';


export default function Dashboard() {
  return (
  <>
    <StyledDashboard>
      <section>
        <NavBar />
      </section>
      <section>
        <UserNav />
      </section>
      <section >
        <AddJob />
      </section>
      <AllJobsDisplay>
        <AllJobs />
      </AllJobsDisplay>
      <GeneralFooter>
        <Footer />
      </GeneralFooter>
    </StyledDashboard>
  </>
  );
}
