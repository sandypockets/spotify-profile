import {IconSpotify} from "../icons";
import {Link} from "@reach/router";
import React from "react";

export default function SpotifyNavIcon() {
  return (
    <Link to="/">
      <a className="text-green w-12 h-12 mx-auto mt-12 hover:text-offGreen z-10">
        <IconSpotify />
      </a>
    </Link>
  )
}