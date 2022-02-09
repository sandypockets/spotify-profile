export default function ProfileName({ user }) {
  return (
    <a className="hover:text-offGreen" href={user.external_urls.spotify} target="_blank" rel="noopener noreferrer">
      <h1 className="text-7xl font-semibold mt-10">{user.display_name}</h1>
    </a>
  )
}