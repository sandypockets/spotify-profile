import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { getPlaylist, getAudioFeaturesForTracks } from '../../spotify';
import { catchErrors } from '../../utils';
import Loader from '../Loader';
import TrackItem from '../Tracks/TrackItem';
// import FeatureChart from './FeatureChart';

export default function Playlist(props) {
  const { playlistId } = props;
  const [playlist, setPlaylist] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylist(playlistId);
      setPlaylist(data);
    };
    catchErrors(fetchData())
  }, [playlistId])

  useEffect(() => {
    const fetchData = async () => {
      if (playlist) {
        const { data } = await getAudioFeaturesForTracks(playlist.tracks.items);
        setAudioFeatures(data)
      }
    };
    catchErrors(fetchData())
  }, [playlist])

  return (
    <>
      {playlist ? (
        <main className="w-full mx-auto p-24">
          <div className="flex">
            <div className="w-1/3 text-center">
              {playlist.images.length && (
                <div className="shadow-lg w-full mx-auto">
                  <img src={playlist.images[0].url} alt="Album Art" />
                </div>
              )}
              <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                <h3 className="font-semibold text-xl mt-12">{playlist.name}</h3>
              </a>
              <p className="text-sm text-lightGrey">
                By {playlist.owner.display_name}
              </p>
              {playlist.description && (
                <p className="text-sm text-lightGrey" dangerouslySetInnerHTML={{ __html: playlist.description }} />
              )}
              <p className="text-sm text-white mt-12">
                {playlist.tracks.total} Tracks
              </p>
              <Link to={`/recommendations/${playlist.id}`}>
                <a className="inline-block bg-green text-white font-semibold text-xs uppercase rounded-full px-4 py-4 cursor-pointer hover:bg-offGreen">
                  Get Recommendations
                </a>
              </Link>
              {/*{audioFeatures && (*/}
              {/*  <FeatureChart features={audioFeatures.audio_features} type="horizontalBar" />*/}
              {/*)}*/}
            </div>
            <div className="flex flex-grow ml-24">
              <ul>
                {playlist.tracks &&
                  playlist.tracks.items.map(({ track }, i) => <TrackItem track={track} key={i} imageSize="medium" />)}
              </ul>
            </div>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}

Playlist.propTypes = {
  playlistId: PropTypes.string,
};

