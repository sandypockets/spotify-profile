
export default function ProfileStats({ user, followedArtists, totalPlaylists }) {
const stats = [
  {
    label: "Followers",
    number: user?.followers?.total,
    showIf: user
  },
  {
    label: "Following",
    number: followedArtists?.artists?.items.length,
    showIf: followedArtists
  },
  {
    label: "Playlist",
    number: totalPlaylists,
    showIf: totalPlaylists
  },
]

  return (
    <div className="grid grid-cols-3 gap-12 mt-9">
      {stats.map((stat) => {
        if (stat.showIf) {
          return (
            <div key={stat.label} className="text-center">
              <div className="text-green font-semibold text-lg">{stat.number}</div>
              <div className="text-lightGrey text-sm uppercase mt-1">{stat.label}</div>
            </div>
          )
        }
      })}
    </div>
  )
}