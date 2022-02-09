import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { catchErrors } from '../../utils';
import { getArtist } from '../../spotify';

import Loader from '../Loader';
import ArtistStats from "./ArtistStats";

export default function Artist(props) {
  const { artistId } = props;
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtist(artistId);
      setArtist(data);
    };
    catchErrors(fetchData());
  }, [artistId]);

  return (
    <>
      {artist ? (
        <main className="w-full mx-auto flex flex-col text-center h-full">
          <div className="w-full">
            <img src={artist.images[0].url} alt="Artist Artwork" className="w-72 rounded-full mx-auto mt-8" />
          </div>
          <div>
            <h1 className="text-7xl mt-8">{artist.name}</h1>
            <ArtistStats artist={artist} />
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}


Artist.propTypes = {
  artistId: PropTypes.string,
};
