import React from "react"
import TextBlockWithButton from "../components/common/TextBlockWithButton"
import SiteHeader from "../components/common/SiteHeader"
import SiteFooter from "../components/common/SiteFooter"

const ThankYou = () => {
  return (
    <>
      <SiteHeader />
      <TextBlockWithButton
        boldText="Thank"
        thinText="You"
        description="Thank you for your inquiry. I will do my best to respond within 24 to 48 hours."
        link="/"
        linkText="Return Home"
        linkTitle="Return Home"
      />
      <SiteFooter />
    </>
  )
}

export default ThankYou
