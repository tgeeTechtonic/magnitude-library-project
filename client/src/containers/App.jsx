import React, { Component } from 'react';
import heroImage from '../assets/images/hero.jpg';

export default class App extends Component {
  render() {
    return (
      <main>
        <nav>
          <a href="#">The Library</a>
          <a href="#">Home</a>
          <a href="#">Bookshelf</a>
          <a href="#">Add Book</a>
          <input type="text" placeholder="Search by Title/Author" />
          <button>Search</button>
        </nav>

        <section>
          <h1>Books.</h1>
          <h2>Reach em & weep</h2>
          <img src={heroImage} alt="Library of Congress" />
        </section>
      </main>
    );
  }
}
