import { Router } from '@reach/router';
import ScrollToTop from '../ScrollToTop';
import Nav from '../Nav/Nav';
import User from './User';
import RecentlyPlayed from '../Recent/RecentlyPlayed';
import TopArtistsPage from '../Artists/TopArtistsPage';
import TopTracks from '../Tracks/TopTracks';
import Playlists from '../Playlists/Playlists';
import Playlist from '../Playlists/Playlist';
import Recommendations from '../Playlists/Recommendations';
import Track from '../Track';
import Artist from '../Artists/Artist';

export default function Profile() {
  return (
    <div className="pl-28">
      <Nav />
      <Router primary={false}>
        <ScrollToTop path="/">
          <User path="/" />
          <RecentlyPlayed path="recent" />
          <TopArtistsPage path="artists" />
          <TopTracks path="tracks" />
          <Playlists path="playlists" />
          <Playlist path="playlists/:playlistId" />
          <Recommendations path="recommendations/:playlistId" />
          <Track path="track/:trackId" />
          <Artist path="artist/:artistId" />
        </ScrollToTop>
      </Router>
    </div>
  )
}