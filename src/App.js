import React from 'react';
import Logo from './components/logo/Logo';
import Tagline from './components/main/Tagline';
import AboutBtn from './components/about/AboutBtn';
import ProjectsBtn from './components/projects/ProjectsBtn';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <main className="container">
      <Logo />
      <AboutBtn />
      <ProjectsBtn />
      <Tagline />
      <Footer />
    </main>
  );
}

export default App;
