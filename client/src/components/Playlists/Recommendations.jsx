import { useState, useEffect, useMemo } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { getPlaylist, getRecommendationsForTracks, getUser, createPlaylist, addTracksToPlaylist, followPlaylist, doesUserFollowPlaylist } from '../../spotify';
import { catchErrors } from '../../utils';
import Button from '../Layout/Button'
import TrackItem from '../Tracks/TrackItem';

export default function Recommendations(props) {
  const { playlistId } = props;

  const [playlist, setPlaylist] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [recPlaylistId, setRecPlaylistId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    };
    catchErrors(fetchPlaylistData());

    const fetchUserData = async () => {
      const { data } = await getUser();
      setUserId(data.id);
    };
    catchErrors(fetchUserData());
  }, [playlistId]);

  useMemo(() => {
    const fetchData = async () => {
      if (playlist) {
        const { data } = await getRecommendationsForTracks(playlist.tracks.items);
        setRecommendations(data);
      }
    };
    catchErrors(fetchData());
  }, [playlist]);

  // If recPlaylistId has been set, add tracks to playlist and follow
  useMemo(() => {
    const isUserFollowingPlaylist = async plistId => {
      const { data } = await doesUserFollowPlaylist(plistId, userId);
      setIsFollowing(data[0]);
    };

    const addTracksAndFollow = async () => {
      const uris = recommendations.tracks.map(({ uri }) => uri).join(',');
      const { data } = await addTracksToPlaylist(recPlaylistId, uris);

      // Then follow playlist
      if (data) {
        await followPlaylist(recPlaylistId);
        // Check if user is following so we can change the save to spotify button to open on spotify
        catchErrors(isUserFollowingPlaylist(recPlaylistId));
      }
    };

    if (recPlaylistId && recommendations && userId) {
      catchErrors(addTracksAndFollow(recPlaylistId));
    }
  }, [recPlaylistId, recommendations, userId]);

  const createPlaylistOnSave = async () => {
    if (!userId) {
      return;
    }

    const name = `Recommended Tracks Based on ${playlist.name}`;
    const { data } = await createPlaylist(userId, name);
    setRecPlaylistId(data.id);
  };

  return (
    <main className="w-full mx-auto p-24">
      {playlist && (
        <div className="flex justify-between">
          <h2>
            Recommended Tracks Based On{' '}
            <Link to={`/playlists/${playlist.id}`}>
              <a className="hover:text-green">
              {playlist.name}
              </a>
            </Link>
          </h2>
          {isFollowing && recPlaylistId ? (
            <Button styleType="pill-solid">
              <a
                href={`https://open.spotify.com/playlist/${recPlaylistId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Spotify
              </a>
            </Button>
          ) : (
            <Button styleType="pill-solid" onClickHandler={catchErrors(createPlaylistOnSave)}>
              Save to Spotify
            </Button>
          )}
        </div>
      )}
      <div className="mt-24">
        {recommendations &&
          recommendations.tracks.map((track, i) => <TrackItem track={track} key={i} imageSize="small" />)}
      </div>
    </main>
  )
}

Recommendations.propTypes = {
  playlistId: PropTypes.string,
};
