import React from "react"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import { motion } from "framer-motion"

// set up easing
const easing = [0.6, -0.5, 0.01, 0.99]

// set up animation
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
}

const PageBanner = ({ image, title }) => {
  return (
    <div className="relative mb-8">
      <AgilityImage image={image} layout="fullWidth" />
      <div className="absolute w-100 h-100 bg-black bg-opacity-25 inset-0 flex justify-center items-end">
        <motion.h1
          className="text-2xl md:text-4xl font-light text-white text-center flex mb-4 md:mb-12"
          variants={fadeInUp}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  )
}

export default PageBanner
