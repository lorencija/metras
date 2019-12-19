import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Link to="/apie_mus">Apie mus</Link>
      <Link to="/medvilnines_virves">Medvilninės virvės</Link>
      <Link to="/gaminiai">Gaminiai</Link>
      <Link to="/straipsniai">Straipsniai</Link>
      <Link to="/kontaktai">Kontaktai</Link>
    </>
  );
}
