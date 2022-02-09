import { useState, useEffect } from 'react';
import { getUserInfo, logout } from '../../spotify';
import { catchErrors } from '../../utils';
import Button from '../Layout/Button'
import Loader from '../Loader';
import TopArtists from "./TopArtists";
import TopTracks from "./TopTracks";
import ProfileStats from "./ProfileStats";
import ProfileIcon from "./ProfileIcon";
import ProfileName from "./ProfileName";

const User = () => {
  const [user, setUser] = useState(null);
  const [followedArtists, setFollowedArtists] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { user, followedArtists, playlists, topArtists, topTracks } = await getUserInfo();
      setUser(user);
      setFollowedArtists(followedArtists);
      setPlaylists(playlists);
      setTopArtists(topArtists);
      setTopTracks(topTracks);
    };
    catchErrors(fetchData());
  }, []);

  const totalPlaylists = playlists ? playlists.total : 0;

  return (
    <>
      {user ? (
        <main className="w-full mx-auto p-24">
          <div className="flex justify-between align-middle">
            <ProfileIcon user={user} />
            <ProfileName user={user} />
            <ProfileStats user={user} followedArtists={followedArtists} totalPlaylists={totalPlaylists} />
            <div className="mt-12">
              <Button onClickHandler={logout} styleType="pill">
                Logout
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 w-full mt-24">
            <TopArtists topArtists={topArtists} />
            <TopTracks topTracks={topTracks} />
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default User;
