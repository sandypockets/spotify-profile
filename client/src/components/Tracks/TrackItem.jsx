import PropTypes from 'prop-types';
import { Link } from "@reach/router";
import TrackDuration from "../Profile/TrackDuration";
import TrackArtwork from "./TrackArtwork";

export default function TrackItem({ track, imageSize }) {
  return (
    <li className="list-none">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <TrackArtwork track={track} imageSize={imageSize} />
        </div>
        <div className="col-span-3">
          <div className="flex w-full">
            <Link to={`/track/${track.id}`}>
          <span className="truncate pr-1">
            {track.name &&
              <span className="mb-2 border-b-2 border-solid border-transparent hover:border-b-2 hover:border-solid hover:border-white">
              {track.name}
            </span>}
            {track.artists && track.album && (
              <div className="truncate text-lightGrey text-sm mt-1 w-96">
                {track.artists &&
                  track.artists.map(({ name }, i) => (
                    <span key={i}>
                      {name}
                      {track.artists.length > 0 && i === track.artists.length - 1 ? '' : ','}&nbsp;
                    </span>
                  ))}
                &nbsp;&middot;&nbsp;&nbsp;
                <span className="truncate w-96">
                  {track.album.name}
                </span>
              </div>
            )}
          </span>
            </Link>
            <TrackDuration track={track} />
          </div>
        </div>
      </div>
    </li>
  )
}

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
};
