import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import Button from '../components/Button';
import AlbumImage from '../components/AlbumImage';
import Profile, { Profiles } from '../components/Profile';
import Container from '../components/Container';

import SoundCloudIcon from '../images/soundcloud.svg';
import AppleIcon from '../images/apple.svg';

const people = [
  {
    name: 'Zain',
    photo: 'https://pbs.twimg.com/profile_images/1046652324096040960/WeXIhP6h.jpg',
    twitter: 'sweatyhairy'
  },
  {
    name: 'Jim',
    photo: 'https://pbs.twimg.com/profile_images/1061495649940598784/CNkP3fzq_400x400.jpg',
    twitter: 'urvillageidiot'
  },
  {
    name: 'Mag',
    photo: 'https://pbs.twimg.com/profile_images/1061484111213166592/-4aIPTWt_400x400.jpg',
    twitter: 'neverhitpuberty'
  }
];

const IndexPage = () => (
  <Layout>
    <Hero>
      <Grid>
        <Grid item>
          <AlbumImage />
        </Grid>
        <Grid item alignVertical>
          <p>tiny baby men is a weekly podcast brought to you by 3 underemployed millenials</p>

          <nav className="tbm-hero-actions">
            <Button
              icon={AppleIcon}
              href="https://itunes.apple.com/ca/podcast/tiny-baby-men/id1433856483"
            >
              iTunes
            </Button>

            <Button icon={SoundCloudIcon} href="https://soundcloud.com/tinybabymen">
              SoundCloud
            </Button>
          </nav>
        </Grid>
      </Grid>
    </Hero>
    <Profiles>
      <Container>
        <Grid style={{ justifyContent: 'space-evenly' }}>
          {people.map(person => (
            <Grid item>
              <Profile {...person} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Profiles>
  </Layout>
);

export default IndexPage;
