import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDuration, getYear, parsePitchClass, catchErrors } from '../utils';
import { getTrackInfo } from '../spotify';
import Loader from './Loader';
import FeatureChart from './Playlists/FeatureChart';
import Button from "./Layout/Button";

export default function Track (props) {
  const { trackId } = props;
  const [track, setTrack] = useState(null);
  const [audioAnalysis, setAudioAnalysis] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrackInfo(trackId);
      setTrack(data.track);
      setAudioAnalysis(data.audioAnalysis);
      setAudioFeatures(data.audioFeatures);
      console.log("DATA: ", data)
    };
    catchErrors(fetchData());
  }, [trackId]);

  return (
    <>
      {track ? (
        <main className="w-full mx-auto p-24">
          <div className="flex mb-12">
            <div className="mr-12">
              <img className="w-72" src={track.album.images[0].url} alt="Album Artwork" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-4xl">{track.name}</h1>
              <h2 className="text-lightestGrey font-semibold text-left">
                {track.artists &&
                  track.artists.map(({ name }, i) => (
                    <span key={i}>
                      {name}
                      {track.artists.length > 0 && i === track.artists.length - 1 ? '' : ','}
                      &nbsp;
                    </span>
                  ))}
              </h2>
              <h3 className="text-lightGrey text-lg">
                <a
                  href={track.album.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer">
                  {track.album.name}
                </a>{' '}
                &middot; {getYear(track.album.release_date)}
              </h3>
              <div className="w-48">
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer">
              <Button styleType="pill-solid">
                Play on Spotify
              </Button>
              </a>
              </div>
            </div>
          </div>

          {audioFeatures && audioAnalysis && (
            <div className="flex justify-center text-center flex-col">
              <div className="grid grid-cols-5 w-full mb-24 text-center border-t-2 border-l-2 border-solid border-grey">
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{formatDuration(audioFeatures.duration_ms)}</h4>
                  <p className="text-lightestGrey text-sm">Duration</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{parsePitchClass(audioFeatures.key)}</h4>
                  <p className="text-lightestGrey text-sm">Key</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{audioFeatures.mode === 1 ? 'Major' : 'Minor'}</h4>
                  <p className="text-lightestGrey text-sm">Modality</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{audioFeatures.time_signature}</h4>
                  <p className="text-lightestGrey text-sm">Time Signature</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{Math.round(audioFeatures.tempo)}</h4>
                  <p className="text-lightestGrey text-sm">Tempo (BPM)</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{track.popularity}%</h4>
                  <p className="text-lightestGrey text-sm">Popularity</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{audioAnalysis.bars.length}</h4>
                  <p className="text-lightestGrey text-sm">Bars</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{audioAnalysis.beats.length}</h4>
                  <p className="text-lightestGrey text-sm">Beats</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{audioAnalysis.sections.length}</h4>
                  <p className="text-lightestGrey text-sm">Sections</p>
                </div>
                <div className="py-6 px-4 border-b-2 border-r-2 border-solid border-grey">
                  <h4 className="text-lightestGrey text-3xl font-semibold">{audioAnalysis.segments.length}</h4>
                  <p className="text-lightestGrey text-sm">Segments</p>
                </div>
              </div>

              <FeatureChart features={audioFeatures} type="" />
              <a className="text-lightestGrey mt-12 mx-auto border-b-2 border-transparent hover:border-white hover:border-solid"
                href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/"
                target="_blank"
                rel="noopener noreferrer">
                Full Description of Audio Features
              </a>
            </div>
          )}
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}

Track.propTypes = {
  trackId: PropTypes.string,
};