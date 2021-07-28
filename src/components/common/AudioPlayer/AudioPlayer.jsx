import React from "react"
import H5AudioPlayer from "react-h5-audio-player"
import { motion } from "framer-motion"
import "react-h5-audio-player/lib/styles.css"
import "./AudioPlayer.css"

const AudioPlayer = ({ song, title, type, variants }) => {
  return (
    <motion.article className="bg-lightGrey py-2 px-4 mb-8" variants={variants}>
      <h3 className="text-bodyText text-md font-bold mb-1">{title}</h3>
      <p className="text-darkGrey font-normal md:font-light italic mb-1 text-xs">
        {type}
      </p>
      <H5AudioPlayer
        showJumpControls={false}
        showSkipControls={false}
        layout="horizontal-reverse"
        customVolumeControls={[]}
        customAdditionalControls={[]}
        src={song}
      />
    </motion.article>
  )
}

export default AudioPlayer
