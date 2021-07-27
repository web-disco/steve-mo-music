import React from "react"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

const HomeBanner = ({ module }) => {
  // get module fields
  const { customFields } = module
  return (
    <section>
      <AgilityImage
        image={customFields.mobileImage}
        layout="fullWidth"
        className="home__banner block mb-8 md:hidden"
      />
      <AgilityImage
        image={customFields.desktopImage}
        layout="fullWidth"
        className="home__banner hidden mb-8 md:block"
      />
    </section>
  )
}

export default HomeBanner
