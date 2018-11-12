import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../style.scss';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Abel|Bungee+Shade|Dancing+Script"
            rel="stylesheet"
          />
        </Helmet>
        <div className="tbm-backdrop" />
        <Header />
        <Main children={children} />
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
