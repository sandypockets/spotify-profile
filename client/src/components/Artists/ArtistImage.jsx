import {IconInfo} from "../icons";

export default function ArtistImage({ images }) {
  return (
    <div className="inline-block relative w-48 h-48">
      {images.length && <img className="rounded-full object-cover w-48 h-48" src={images[1].url} alt="Artist" />}
      <div className="flex flex-col justify-center text-center absolute h-full w-full bg-lightGrey top-0 bottom-0 right-0 left-0 rounded-full opacity-0 hover:opacity-75">
        <div className="flex justify-center">
          <IconInfo />
        </div>
      </div>
    </div>
  )
}