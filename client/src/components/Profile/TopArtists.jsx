import { Link } from "@reach/router";
import Loader from "../Loader";
import React from "react";
import Button from "../Layout/Button";

export default function TopArtists({ topArtists }){
  return (
    <div>
      <div className="flex justify-between text-center inline-block">
        <h3>Top Artists of All Time</h3>
        <Button styleType="pill">
          <Link to={"/artists"}>
            See More
          </Link>
        </Button>
      </div>
      <div>
        {topArtists ? (
          <ul className="mt-8">
            {topArtists.items.slice(0, 8).map((artist, i) => (
              <div className="mb-6 w-full">
                  <Link to={`/artist/${artist.id}`}>
                    <li key={i} className="flex justify-between hover:opacity-75 w-full px-20">
                      <div className="inline-block relative w-36 mr-2">
                        {artist.images.length && <img className="rounded-full w-20 h-20" src={artist.images[2].url} alt="Artist" />}
                      </div>
                      <h3 className="flex-grow mt-6" to={`/artist/${artist.id}`}>
                        <span className="border-b-2 border-solid border-transparent hover:border-white hover:border-solid">{artist.name}</span>
                      </h3>
                    </li>
                  </Link>
              </div>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}