import { formatWithCommas } from "../../utils";

export default function ArtistStats({ artist }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-3 text-center">
      <div>
        <div className="text-blue font-semibold text-2xl capitalize">{formatWithCommas(artist.followers.total)}</div>
        <p className="text-lightGrey text-sm uppercase mt-2">Followers</p>
      </div>
      {artist.genres && (
        <div>
          <div className="text-blue font-semibold text-2xl capitalize">
            {artist.genres.map(genre => (
              <p className="text-md" key={genre}>{genre}</p>
            ))}
          </div>
          <p className="text-lightGrey text-sm uppercase mt-2">Genres</p>
        </div>
      )}
      {artist.popularity && (
        <div>
          <div className="text-blue font-semibold text-2xl capitalize">{artist.popularity}%</div>
          <p className="text-lightGrey text-sm uppercase mt-2">Popularity</p>
        </div>
      )}
    </div>
  )
}