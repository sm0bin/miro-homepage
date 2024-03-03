import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Collaborate from './components/Collaborate';

const App = () => {
  return (
    <>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <Hero />
        <Clients />
        <Collaborate />
      </div>


    </>
  );
};

export default App;