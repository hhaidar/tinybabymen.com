import React from 'react';

import Logo from './Logo';
import Container from './Container';

const Header = () => (
  <header className="tbm-header">
    <Container>
      <h1>
        <Logo />
      </h1>
    </Container>
  </header>
);

export default Header;
