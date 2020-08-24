import React from 'react';

export default function NavBar() {
  return (
    <nav>
      <a href="#">The Library</a>
      <a href="#">Home</a>
      <a href="#">Bookshelf</a>
      <a href="#">Add Book</a>
      <input type="text" placeholder="Search by Title/Author" />
      <button>Search</button>
    </nav>
  );
}
