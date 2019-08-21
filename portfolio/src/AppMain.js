import React from 'react';
import Header from './components/Header';
import SocialNavBar from './components/SocialNavBar';
import ProjectsContainer from './components/projects/ProjectsContainer';

function AppMain() {
  return (
    <div className="app-main">
      <Header />
      <SocialNavBar />
      <ProjectsContainer />
    </div>
  );
}

export default AppMain;
