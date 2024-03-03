import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Collaborate from './components/Collaborate';
import Work from './components/Work';
import Connect from './components/Connect';
import Ways from './components/Ways';

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
      </div>


    </>
  );
};

export default App;