import React from 'react';
import heroImage from '../assets/images/hero.jpg';

export default function Hero() {
  return (
    <section>
      <h1>Books.</h1>
      <h2>Reach em & weep</h2>
      <img src={heroImage} alt="Library of Congress" />
    </section>
  );
}
