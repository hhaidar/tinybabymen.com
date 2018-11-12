import React from 'react';

import Grid from './Grid';
import Container from './Container';

const Footer = () => (
  <footer className="tbm-footer">
    <Container>
      <Grid>
        <Grid item>
          <p>&copy; {new Date().getFullYear()} tiny baby men.</p>
          <p className="tbm-love">
            From Los Angeles, New York and Toronto with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>
        </Grid>
        <Grid item>
          tinybabymen on{' '}
          <a href="https://twitter.com/tinybabymen" target="_blank" rel="noopener noreferrer">
            Tweeter
          </a>{' '}
          and{' '}
          <a
            href="https://www.youtube.com/channel/UCgP5NxFBsIGZSIyw_LLVQ_A"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;
