import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { motion, useCycle } from "framer-motion"
import { topBar, middleBar, bottomBar } from "../../utils/animations"

const SiteHeader = ({ languageCode, isMultiLanguage }) => {
  // graphql query to fetch our sitemap & header data
  const data = useStaticQuery(graphql`
    query {
      siteHeader: agilitySiteHeader(
        properties: { referenceName: { eq: "siteheader" } }
      ) {
        customFields {
          siteName
        }
      }
      links: allAgilitySitemapNode {
        nodes {
          languageCode
          path
          menuText
        }
      }
    }
  `)

  // open / close mobile nav
  const [open, setOpen] = useCycle(false, true)

  // get header
  const header = data.siteHeader.customFields

  // create our links
  const links = data.links.nodes.filter(sitemapNode => {
    // check for top level pages
    let isTopLevelPage = sitemapNode.path.split("/").length === 2

    // check for pages in current locale
    const isThisLanguage = sitemapNode.languageCode === languageCode

    if (isMultiLanguage) {
      isTopLevelPage = sitemapNode.path.split("/").length === 3
    }

    // return top level pages in current locale
    return isThisLanguage && isTopLevelPage
  })

  // functions that help with menu
  // typeof window !== "undefined" &&
  //   window.addEventListener("resize", function(event) {
  //     var w = document.documentElement.clientWidth
  //     // Display result inside a div element
  //     if (w >= 991) {
  //       setOpen(false)
  //     }
  //   })
  // typeof window !== "undefined" &&
  //   window.addEventListener("scroll", function(event) {
  //     var scroll = this.scrollY
  //     const header = document.getElementById("header")
  //     if (scroll >= 50) {
  //       header.classList.add("sticky")
  //     } else {
  //       header.classList.remove("sticky")
  //     }
  //   })

  // no header available
  if (!header) {
    return (
      <header className="relative p-8 text-center">
        <p className="text-gray-400 font-bold">No Header Available</p>
      </header>
    )
  }
  return (
    <header className="py-4 md:py-8 sticky top-0 z-50 bg-white">
      <div
        className="container px-4 flex justify-between items-center"
        id="header"
      >
        <h3 className="font-bold text-xl md:text-2xl">
          <Link to="/" title={header.siteName}>
            STEVE MO <span className="font-light">MUSIC</span>
          </Link>
        </h3>
        <nav>
          <ul className="hidden md:flex">
            {links.map((link, index) => (
              <li className="mr-4 last:mr-0" key={index}>
                <Link
                  to={link.path}
                  title={link.menuText}
                  className="text-xs uppercase"
                >
                  {link.menuText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="focus:outline-none block md:hidden"
          onClick={() => {
            setOpen()
            document.querySelector("body").classList.toggle("fixed")
          }}
          aria-label="Nav Button"
        >
          <motion.span
            className="w-6 h-menuBar bg-black mb-1 block"
            animate={open ? "open" : "closed"}
            variants={topBar}
          ></motion.span>
          <motion.span
            className="w-6 h-menuBar bg-black mb-1 block"
            animate={open ? "open" : "closed"}
            variants={middleBar}
          ></motion.span>
          <motion.span
            className="w-6 h-menuBar bg-black block"
            animate={open ? "open" : "closed"}
            variants={bottomBar}
          ></motion.span>
        </motion.button>
      </div>
      <nav
        className={`z-50 absolute bg-white px-4 h-screen w-full ${
          open ? `block` : `hidden`
        }`}
      >
        <ul className="mt-12">
          {links.map((link, index) => (
            <li
              className="mb-4"
              key={index}
              onClick={() => {
                setOpen(false)
                document.querySelector("body").classList.remove("fixed")
              }}
            >
              <Link
                to={link.path}
                title={link.menuText}
                className="text-4xl uppercase font-light tracking-wider"
              >
                {link.menuText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader
