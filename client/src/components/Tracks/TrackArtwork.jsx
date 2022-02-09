import { IconInfo } from "../icons";

export default function TrackArtwork({ track, imageSize }) {
  let imgSize
  let imgClass
  switch (imageSize) {
    case 'small':
      imgSize = 1
      imgClass = "inline-block relative w-20"
      break;
    case 'medium':
      imgSize = 1
      imgClass =  "inline-block relative w-36"
      break;
    case 'large':
      imgSize = 0
      imgClass = "inline-block relative w-48"
      break;
    default:
      imgSize = 2
  }

  return (
    <div>
      <div className={imgClass}>
        {track.album.images.length && <img className="w-full" src={track.album.images[imgSize].url} alt="Album Artwork" />}
        <div className="flex justify-center text-center absolute w-full h-full top-0 bottom-0 left-0 right-0 text-white opacity-0">
          <IconInfo />
        </div>
      </div>
    </div>
  )
}