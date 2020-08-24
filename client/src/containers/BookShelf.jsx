import React from 'react'

export default function BookShelf() {
  const book = (
    <section>
      <img src="#" alt="Book Cover" />
      <h3>Book Title</h3>
      <h4>Book Author</h4>
    </section>
  );
  const books = new Array(6).fill(book)
  
  return (
    <article>
      {books}
    </article>
  )
}
