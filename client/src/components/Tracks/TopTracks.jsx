import { useState, useEffect } from 'react';
import { getTopTracksShort, getTopTracksMedium, getTopTracksLong } from '../../spotify';
import { catchErrors } from '../../utils';

import Loader from '../Loader';
import TrackItem from './TrackItem';
import DateRangeButtons from "../Layout/DateRangeButtons";

export default function TopTracks() {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState('long');

  const apiCalls = {
    long: getTopTracksLong(),
    medium: getTopTracksMedium(),
    short: getTopTracksShort(),
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopTracksLong();
      setTopTracks(data);
    }
    catchErrors(fetchData());
  }, [])

  const changeRange = async range => {
    const { data } = await apiCalls[range];
    setTopTracks(data);
    setActiveRange(range);
  }

  const setRangeData = range => catchErrors(changeRange(range));

  return (
    <main className="w-full mx-auto p-24">
      <header className="flex justify-between">
        <h2 className="text-7xl">Top Tracks</h2>
        <DateRangeButtons activeRange={activeRange} setRangeData={setRangeData} />
      </header>
      <div className="mt-24">
        {topTracks ? (
          topTracks.items.map((track, i) => (
            <TrackItem track={track} key={i} imageSize="medium" />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </main>
  )
}