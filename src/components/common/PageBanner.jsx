import React from "react"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

const PageBanner = ({ image, title }) => {
  return (
    <div className="relative mb-8">
      <AgilityImage image={image} layout="fullWidth" />
      <div className="absolute w-100 h-100 bg-black bg-opacity-25 inset-0 flex justify-center items-end">
        <h1 className="text-xl md:text-4xl font-light text-white text-center flex mb-8 md:mb-12">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PageBanner
