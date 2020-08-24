import React from 'react';
import Logo from './components/logo/Logo';
import Tagline from './components/main/Tagline';
import AboutBtn from './components/about/AboutBtn';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <main className="container">
      <Logo />
      <AboutBtn />
      <Tagline />
      <Footer />
    </main>
  );
}

export default App;
