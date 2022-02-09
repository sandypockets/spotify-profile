import {formatDuration} from "../../utils";

export default function TrackDuration({ track }){
  return (
    <span className="truncate pr-1 inline-block relative w-12 min-w-max mr-3">
          {track.duration_ms && <span className="truncate text-lightGrey text-sm mt-1">{formatDuration(track.duration_ms)}</span>}
        </span>
  )
}