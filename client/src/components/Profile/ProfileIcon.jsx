import {IconUser} from "../icons";

export default function ProfileIcon({ user }) {
  return (
    <div className="w-36 h-36 rounded-full">
      {user.images.length > 0 ? (
        <img src={user.images[0].url} alt="avatar" />
      ) : (
        <div className="border-8 border-solid rounded-full w-full h-full">
          <div className="w-28 h-28 mx-auto">
            <IconUser />
          </div>
        </div>
      )}
    </div>
  )
}