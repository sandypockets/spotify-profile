import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { getTopArtistsShort, getTopArtistsMedium, getTopArtistsLong } from '../../spotify';
import { catchErrors } from '../../utils';
import Loader from '../Loader';
import DateRangeButtons from "../Layout/DateRangeButtons";
import ArtistImage from "./ArtistImage";

export default function TopArtistsPage() {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState('long');

  const apiCalls = {
    long: getTopArtistsLong(),
    medium: getTopArtistsMedium(),
    short: getTopArtistsShort(),
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopArtistsLong();
      setTopArtists(data);
    };
    catchErrors(fetchData());
  }, []);

  const changeRange = async range => {
    const { data } = await apiCalls[range];
    setTopArtists(data);
    setActiveRange(range);
  };

  const setRangeData = range => catchErrors(changeRange(range));

  return (
    <main className="w-full mx-auto p-24">
      <header className="flex justify-between text-center">
        <h2 className="text-7xl">Top Artists</h2>
        <DateRangeButtons activeRange={activeRange} setRangeData={setRangeData} />
      </header>
      <div className="grid grid-cols-5 gap-6 mt-12">
        {topArtists ? (
          topArtists.items.map(({ id, external_urls, images, name }, i) => (
            <div className="flex flex-col text-center items-center" key={i}>
              <Link to={`/artist/${id}`}>
                <ArtistImage images={images} />
              </Link>
              <a className="my-3 border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-white"
                 href={external_urls.spotify}
                 target="_blank"
                 rel="noopener noreferrer">
                {name}
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-5">
            <Loader />
          </div>
        )}
      </div>
    </main>
  )
}
