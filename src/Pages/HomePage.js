import React, { Component }  from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';
import PropertyType from '../components/PropertyType';

const HomePage = () => {
  return (   
    <div>
      <Header/>
      <main>
      <Hero/>
      <PropertyType/>
      <PropertyList/>
      </main>
      <Footer/>
  
    </div>
  )
}

export default HomePage;