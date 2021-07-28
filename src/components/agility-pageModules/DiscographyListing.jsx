import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SectionHeading from "../common/SectionHeading"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../../utils/animations"
import { ImPlay2 } from "react-icons/im"

const DiscographyListing = ({ module }) => {
  // get module fields
  const { customFields } = module

  // graphql query for projects
  const data = useStaticQuery(graphql`
    query {
      allAgilityProject(sort: { fields: properties___itemOrder, order: ASC }) {
        nodes {
          customFields {
            title
            squareImage {
              label
              url
              width
              height
            }
          }
          sitemapNode {
            path
          }
        }
      }
    }
  `)

  // get projects
  const projects = data.allAgilityProject.nodes

  return (
    <>
      <section className="container px-4 mb-8">
        <div id="discography" />
        <SectionHeading
          boldText={customFields.boldText}
          thinText={customFields.thinText}
        />
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => {
            // get title and image
            const { title, squareImage } = project.customFields
            // get page path
            const path = project.sitemapNode.path
            return (
              <motion.article key={index} variants={fadeInUp}>
                <Link to={path} title={title}>
                  <div className="relative mb-2 group">
                    <AgilityImage image={squareImage} layout="fullWidth" />
                    <div className="absolute w-100 h-100 bg-black bg-opacity-20 inset-0 flex justify-end items-end p-2 md:bg-none md:bg-opacity-0 md:group-hover:bg-black md:group-hover:bg-opacity-30 transition duration-300 ease-in-out">
                      <ImPlay2 className="text-white text-2xl md:hidden" />
                      <p className="hidden text-white text-base md:text-sm md:flex md:items-center md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <span className="mr-2">Listen Now</span>
                        <ImPlay2 />
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-xs font-medium text-bodyText md:text-sm">
                    {title}
                  </p>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </section>
    </>
  )
}

export default DiscographyListing
