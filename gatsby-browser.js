import "./src/styles/global.css"
import React from "react"
import { AnimatePresence } from "framer-motion"

// The handler to smoothly scroll the element into view w/ animate presence
const handleExitComplete = () => {
  if (typeof window !== "undefined") {
    // Get the hash from the url
    const hashId = window.location.hash

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId)

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
    }
  }
}

export const wrapPageElement = ({ element }) => {
  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        {element}
      </AnimatePresence>
    </React.Fragment>
  )
}
