import React, { useState } from "react"
import { renderHTML } from "../../agility/utils"
import SectionHeading from "../common/SectionHeading"

const Biography = ({ module }) => {
  // get module fields
  const { customFields } = module

  // set text length
  const textLength = 550

  // set up show state
  const [showLess, setShowLess] = useState(true)

  return (
    <section className="text-center px-4 mb-8">
      <div id="biography" />
      <SectionHeading
        boldText={customFields.boldText}
        thinText={customFields.thinText}
      />
      {/* Mobile Bio*/}
      <div className="relative block md:hidden">
        <div
          className="italic font-light text-bodyText"
          dangerouslySetInnerHTML={
            showLess
              ? renderHTML(customFields.biography.slice(0, textLength) + "...")
              : renderHTML(customFields.biography)
          }
        />
        {showLess && (
          <div className="bg-gradient-to-t from-white w-100 h-20 absolute left-0 right-0 bottom-0"></div>
        )}
      </div>
      <button
        className="mt-4 text-sm text-center font-bold focus:outline-none inline-block md:hidden"
        onClick={() => setShowLess(!showLess)}
      >
        Read {showLess ? "More" : "Less"}
      </button>
      {/* Desktop Bio */}
      <div className="hidden md:block">
        <div
          className="italic font-light container text-bodyText"
          dangerouslySetInnerHTML={renderHTML(customFields.biography)}
        />
      </div>
    </section>
  )
}

export default Biography
