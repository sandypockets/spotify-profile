import { Link } from "@reach/router";
import Button from "../Layout/Button";
import TrackItem from "../Tracks/TrackItem";
import Loader from "../Loader";

export default function TopTracks({ topTracks }) {
  return (
    <div>
      <div className="flex justify-between text-center mb-12">
        <h3 className="inline-block">Top Tracks of All Time</h3>
        <Button styleType="pill">
          <Link to="/tracks">See More</Link>
        </Button>
      </div>
      <ul>
        {topTracks ? (
          topTracks.items
            .slice(0, 10)
            .map((track, i) => (
              <TrackItem track={track} key={i} imageSize="small" />
            ))
        ) : (
          <Loader />
        )}
      </ul>
    </div>
  )
}