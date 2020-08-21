import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Hero />
        <WelcomeSection />
        <Footer />
      </main>
    );
  }
}
