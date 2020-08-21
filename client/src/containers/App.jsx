import React, { Component } from 'react';
import heroImage from '../assets/images/hero.jpg';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
      <main>
        <NavBar />

        <section>
          <h1>Books.</h1>
          <h2>Reach em & weep</h2>
          <img src={heroImage} alt="Library of Congress" />
        </section>

        <section>
          <h3>Welcome to the Library</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>See Books</button>
          <p>
            Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Libero
            volutpat sed cras ornare arcu dui vivamus arcu felis. Urna et
            pharetra pharetra massa massa ultricies mi. Eget lorem dolor sed
            viverra ipsum. Venenatis tellus in metus vulputate. Quis blandit
            turpis cursus in. Tincidunt praesent semper feugiat nibh. Feugiat
            vivamus at augue eget arcu. Etiam erat velit scelerisque in. Posuere
            ac ut consequat semper. Duis at tellus at urna condimentum mattis.
            Duis at consectetur lorem donec massa sapien faucibus et. Leo a diam
            sollicitudin tempor id eu nisl. Dui vivamus arcu felis bibendum ut.
            Enim nunc faucibus a pellentesque sit amet. Purus sit amet luctus
            venenatis. Adipiscing elit duis tristique sollicitudin nibh sit amet
            commodo nulla. Quis varius quam quisque id diam vel quam elementum
            pulvinar.
          </p>
          <button>Add a Book</button>
        </section>
        
        <footer>Copyright 2020 tg</footer>
      </main>
    );
  }
}
