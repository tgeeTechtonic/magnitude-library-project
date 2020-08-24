import React from 'react';

export default function EditBook() {
  return (
    <article>
      <h3>Add / Edit Book</h3>
      <form>
        <label htmlFor="title"></label>
        <input type="text" id="title" />
        <label htmlFor="author"></label>
        <input type="text" id="author" />
        <label htmlFor="synopsis"></label>
        <input type="text" id="synopsis" />
        <label htmlFor="datePublished"></label>
        <input type="text" id="datePublished" />
        <label htmlFor="numPages"></label>
        <input type="text" id="numPages" />
        <label htmlFor="rating"></label>
        <span>*****</span>
        <aside>
          <div>
            Add Image Img
          </div>
          <button>Add Image</button>
        </aside>
        <button>Edit This Book</button>
        <button>Back to Shelf</button>
      </form>
    </article>
  );
}
