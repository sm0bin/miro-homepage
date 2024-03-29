import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Collaborate from './components/Collaborate';
import Work from './components/Work';
import Connect from './components/Connect';
import Ways from './components/Ways';
import Testimonials from './components/Testimonials';
import Brainstorming from './components/Brainstorming';
import Teams from './components/Teams';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />

      <div className='max-w-6xl mx-auto'>
        <Hero />
        <Clients />
        <Collaborate />
        <Work />
        <Connect />
        <Ways />
        <Brainstorming />
        <Teams />
        <Testimonials />
      </div>

      <Footer />
    </>
  );
};

export default App;