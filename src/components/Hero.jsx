import React from 'react';

import Container from './Container';

const Hero = ({ children, ...props }) => (
  <section className="tbm-hero" {...props}>
    <div className="tbm-hero-backdrop" />
    <div className="tbm-hero-content">
      <Container>{children}</Container>
    </div>
  </section>
);

export default Hero;
