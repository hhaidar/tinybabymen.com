import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const AlbumImage = () => (
  <div className="tpm-album">
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "album.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
    <svg className="tpm-album-twinkle" width="100" height="100" viewBox="0 0 100 100">
      <symbol id="twinkle" viewBox="0 0 100 100">
        <g className="group" opacity="0.8">
          <g className="large">
            <path
              className="path"
              id="large"
              d="M41.25,40 L42.5,10 L43.75,40 L45, 41.25 L75,42.5 L45,43.75
        L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z "
              fill="white"
            />
          </g>
          <g className="large-2" transform="rotate(45)">
            <use xlinkHref="#large" />
          </g>
          <g className="small">
            <path
              className="path"
              id="small"
              d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75
              L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z"
              fill="white"
            />
          </g>
        </g>
      </symbol>
      <use xlinkHref="#twinkle" x="0" y="0" width="50" height="50" />
    </svg>
  </div>
);
export default AlbumImage;
