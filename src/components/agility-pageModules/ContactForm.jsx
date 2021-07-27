import React from "react"
import { FaInstagram } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const ContactForm = ({ module }) => {
  // get module fields
  const { customFields } = module

  // get settings
  const data = useStaticQuery(graphql`
    query {
      agilityWebsiteSettings {
        customFields {
          instagram {
            href
            target
            text
          }
        }
      }
    }
  `)

  // get website settings
  const agilityWebsiteSettings = data.agilityWebsiteSettings

  return (
    <section
      className="container px-4 text-center mb-8 max-w-xl mx-auto"
      id="contact"
    >
      <h3 className="text-3xl uppercase mb-8">
        <span className="font-bold">{customFields.boldText}</span>{" "}
        <span className="font-light">{customFields.thinText}</span>
      </h3>
      <p className="mb-4 text-bodyText font-light italic">
        {customFields.text}
      </p>
      <p className="text-center block mb-12">
        <a
          href={agilityWebsiteSettings.customFields.instagram.href}
          target={agilityWebsiteSettings.customFields.instagram.target}
          title={agilityWebsiteSettings.customFields.instagram.text}
        >
          <FaInstagram className="mb-4 text-3xl block mx-auto" />
        </a>
      </p>
      <form>
        <label>
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Full Name
          </p>
          <input
            required
            className="w-full border-2 border-bodyText p-2 mb-4"
            type="text"
            name="first-name"
          />
        </label>
        <label>
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Email Address
          </p>
          <input
            required
            type="email"
            name="email"
            className="w-full border-2 border-bodyText p-2 mb-4"
          />
        </label>
        <label>
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Subject
          </p>
          <input
            required
            type="text"
            name="subject"
            className="w-full border-2 border-bodyText p-2 mb-4"
          />
        </label>
        <label>
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Message
          </p>
          <textarea
            required
            name="message"
            className="w-full border-2 border-bodyText p-2"
            rows="4"
          />
        </label>
        <button
          type="submit"
          className="bg-black text-white px-8 py-2 mt-8 uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactForm
