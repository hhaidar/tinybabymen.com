import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Layout>
    <div className="tbm-404">
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit up a page that doesn&#39;t exist... the sadness.</p>
      </Container>
    </div>
  </Layout>
);

export default NotFoundPage;
