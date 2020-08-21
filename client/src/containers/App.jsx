import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';

export default class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Hero />
        <WelcomeSection />

        <footer>Copyright 2020 tg</footer>
      </main>
    );
  }
}
