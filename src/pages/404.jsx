import React from "react"
import TextBlockWithButton from "../components/common/TextBlockWithButton"

const Error404 = () => {
  return (
    <TextBlockWithButton
      boldText="Error"
      thinText="404"
      description="We're sorry, we couldn't find what you were looking for."
      link="/"
      linkText="Return Home"
      linkTitle="Return Home"
    />
  )
}

export default Error404
