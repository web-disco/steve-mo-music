import React from "react"

const SectionHeading = ({ boldText, thinText }) => {
  return (
    <section className="container px-4 text-center mb-8">
      <h3 className="text-3xl uppercase">
        <span className="font-bold">{boldText}</span>
        <span className="font-light">{thinText}</span>
      </h3>
    </section>
  )
}

export default SectionHeading
