import { Link } from '@reach/router';
import { IconUser, IconTime, IconMicrophone, IconPlaylist, IconMusic } from '../icons';
import SpotifyNavIcon from "./SpotifyNavIcon";
import GitHubNavIcon from "./GitHubNavIcon";
import MenuItemContainer from "./MenuItemContainer";

const isActive = ({ isCurrent }) => (isCurrent ? { className: 'text-white bg-navBlack border-l-8 border-offGreen ' } : { className: "border-l-8 border-transparent"});
const NavLink = props => <Link getProps={isActive} {...props} />;

const menuData = [
  {
    name: "Profile",
    href: "/",
    icon: <IconUser />
  },
  {
    name: "Artists",
    href: "artists",
    icon: <IconMicrophone />
  },
  {
    name: "Tracks",
    href: "tracks",
    icon: <IconMusic />
  },
  {
    name: "Recent",
    href: "recent",
    icon: <IconTime />
  },
  {
    name: "Playlists",
    href: "playlists",
    icon: <IconPlaylist />
  },
]

export default function Nav() {
  return (
    <div className="shadow-md shadow-black flex flex-col justify-between min-h-full fixed top-0 left-0 w-28 bg-navBlack">
      <MenuItemContainer>
        <SpotifyNavIcon />
      </MenuItemContainer>
      <div className="flex flex-col">
        {menuData.map((item) => (
          <ul>
            <li className="flex-grow basis-1 h-full text-lightGrey my-1">
              <NavLink to={item.href}>
                <a className="block px-6 py-2 h-full w-full">
                  <div className="mx-auto w-6 h-6">
                    {item.icon}
                  </div>
                  <div className="w-12 mx-auto flex justify-center">{item.name}</div>
                </a>
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
      <MenuItemContainer>
        <GitHubNavIcon />
      </MenuItemContainer>
    </div>
  )
}
