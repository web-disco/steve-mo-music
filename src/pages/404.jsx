import React from "react"
import TextBlockWithButton from "../components/common/TextBlockWithButton"
import SiteHeader from "../components/common/SiteHeader"
import SiteFooter from "../components/common/SiteFooter"

const Error404 = () => {
  return (
    <>
      <SiteHeader />
      <TextBlockWithButton
        boldText="Error"
        thinText="404"
        description="We're sorry, we couldn't find what you were looking for."
        link="/"
        linkText="Return Home"
        linkTitle="Return Home"
      />
      <Footer />
    </>
  )
}

export default Error404
