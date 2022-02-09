import { useState, useEffect } from 'react';
import { getRecentlyPlayed } from '../../spotify';
import { catchErrors } from '../../utils';

import Loader from '../Loader';
import TrackItem from '../Tracks/TrackItem';

export default function RecentlyPlayed() {
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getRecentlyPlayed()
      setRecentlyPlayed(data)
    };
    catchErrors(fetchData())
  }, [])

  return (
    <main className="w-full mx-auto p-24">
      <h2 className="text-7xl">Recently Played Tracks</h2>
      <div className="mt-20">
        {recentlyPlayed ? (
          recentlyPlayed.items.map(({ track }, i) => (
            <TrackItem track={track} key={i} imageSize="medium" />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </main>
  )
}
