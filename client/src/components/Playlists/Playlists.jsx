import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { getPlaylists } from '../../spotify';
import { catchErrors } from '../../utils';

import Loader from '../Loader';
import { IconMusic } from '../icons';

export default function Playlists() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylists()
      setPlaylists(data)
    };
    catchErrors(fetchData())
  }, [])

  return (
    <main className="w-full mx-auto p-24">
      <h2 className="text-7xl">Your Playlists</h2>
      <div className="flex justify-between items-start">
        <div className="grid grid-cols-5 gap-8 w-full mt-12">
          {playlists ? (
            playlists.items.map(({ id, images, name, tracks }, i) => (
              <div className="flex flex-col text-center" key={i}>
                <Link to={id}>
                  <div className="shadow-lg relative w-full mb-2 opacity-1 hover:opacity-50 duration-150">
                    {images.length ? (
                      <img className="object-cover w-52 h-52" src={images[0].url} alt="Album Art" />
                    ) : (
                      <div className="flex justify-center text-center w-full relative bg-darkGrey">
                        <div className="flex justify-center text-center absolute top-0 right-0 bottom-0 left-0">
                          <IconMusic />
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
                <div>
                  <Link to={id}>
                  <h3 className="inline-block border-b-2 border-transparent hover:border-white">{name}</h3>
                  </Link>
                  <div className="uppercase my-1 text-lightGrey text-xs">{tracks.total} Tracks</div>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </main>
  )
}
