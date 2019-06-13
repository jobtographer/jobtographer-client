import React from 'react';
import Jobs from './jobs/Jobs';

export default function App() {
  const jobs = [
    { 
      title: 'CEO',
      company: 'Federal Reserve',
      date: '06/13/2019',
      status: true
    }
  ];
  return <Jobs jobs={jobs} />;
}
