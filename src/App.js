import React from 'react';
import Logo from './components/logo/Logo';
import Tagline from './components/main/Tagline';
import AboutBtn from './components/about/AboutBtn';
import ProjectsBtn from './components/projects/ProjectsBtn';
import ContactBtn from './components/contact/ContactBtn';
import Footer from './components/footer/Footer';
import { FormProvider } from './utils/FormContext';

import './styles/App.css';

function App() {
  return (
    <FormProvider>
      <main className="container">
        <Logo />
        <AboutBtn />
        <ProjectsBtn />
        <Tagline />
        <ContactBtn />
        <Footer />
      </main>
    </FormProvider>
  );
}

export default App;
