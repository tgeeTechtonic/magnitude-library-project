import React, { Component } from 'react';

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
      </main>
    );
  }
}
