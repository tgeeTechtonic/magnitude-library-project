import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import BookShelf from './BookShelf';
import Book from '../components/Book';
import EditBook from '../components/EditBook';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Hero />
        <WelcomeSection />
        <BookShelf />
        <Book />
        <EditBook />
        <Footer />
      </main>
    );
  }
}
