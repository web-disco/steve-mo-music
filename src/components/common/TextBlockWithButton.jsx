import React from "react"
import SiteHeader from "./SiteHeader"
import { Link } from "gatsby"

const TextBlockWithButton = ({
  boldText,
  thinText,
  description,
  link,
  linkTitle,
  linkText,
}) => {
  return (
    <div>
      <SiteHeader />
      <section className="w-screen h-screen flex flex-col justify-center items-center px-4">
        <h1 className="uppercase font-bold text-4xl md:text-7xl mb-4">
          {boldText} <span className="font-light">{thinText}</span>
        </h1>
        <p className="italic font-light text-bodyText mb-4">{description}</p>
        <Link
          to={link}
          title={linkTitle}
          className="bg-black text-white px-8 py-2 mt-8 uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          {linkText}
        </Link>
      </section>
    </div>
  )
}

export default TextBlockWithButton
