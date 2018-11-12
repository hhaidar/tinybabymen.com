import React from 'react';

import TwitterIcon from '../images/twitter.svg';

const Profile = ({ name, photo, twitter }) => (
  <div className="tbm-profile">
    <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
      <img className="tbm-profile-photo" src={photo} alt={name} />
    </a>
    <name className="tbm-profile-name">{name}</name>

    <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
      <span
        className="tbm-profile-icon"
        dangerouslySetInnerHTML={{
          __html: atob(TwitterIcon.replace(/data:image\/svg\+xml;base64,/, ''))
        }}
      />{' '}
      @{twitter}
    </a>
  </div>
);

const Profiles = props => <div className="tbm-profiles" {...props} />;

export { Profiles };

export default Profile;
