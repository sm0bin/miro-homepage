import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Header />
      <div className='max-w-6xl mx-auto'>
        <Hero />
      </div>


    </>
  );
};

export default App;