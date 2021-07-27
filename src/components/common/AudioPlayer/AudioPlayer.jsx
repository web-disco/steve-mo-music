import React from "react"
import H5AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "./AudioPlayer.css"

const AudioPlayer = ({ song, title, type, grid }) => {
  return (
    <article className={`bg-lightGrey p-4 ${grid ? `mb-0` : `mb-8`}`}>
      <h3 className="text-bodyText text-lg font-bold">{title}</h3>
      <p className="text-darkGrey font-light italic mb-2 text-sm">{type}</p>
      <H5AudioPlayer
        showJumpControls={false}
        showSkipControls={false}
        layout="horizontal-reverse"
        customVolumeControls={[]}
        customAdditionalControls={[]}
        src={song}
      />
    </article>
  )
}

export default AudioPlayer
