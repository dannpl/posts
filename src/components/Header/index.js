import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <NavLink variant="success" className="name" to="/">
        Posts
      </NavLink>
    </Container>
  );
}
