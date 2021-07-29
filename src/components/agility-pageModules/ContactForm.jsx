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
    <section className="container px-4 text-center mb-44 max-w-xl mx-auto">
      <div id="contact" />
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
          rel="noopener noreferrer"
        >
          <FaInstagram className="mb-4 text-3xl block mx-auto" />
        </a>
      </p>
      <form
        name="Contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="Contact" />
        <div className="grid md:grid-cols-2 gap-2">
          <label htmlFor="First Name">
            <p className="text-left text-bodyText mb-0 md:mb-2 text-sm font-light">
              First Name
            </p>
            <input
              required
              className="w-full border-2 border-bodyText p-2 mb-4 rounded-none"
              type="text"
              name="first-name"
            />
          </label>
          <label htmlFor="Last Name">
            <p className="text-left text-bodyText mb-2 text-sm font-light">
              Last Name
            </p>
            <input
              required
              className="w-full border-2 border-bodyText p-2 mb-4 rounded-none"
              type="text"
              name="last-name"
            />
          </label>
        </div>
        <label htmlFor="Email Address">
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Email Address
          </p>
          <input
            required
            type="email"
            name="email"
            className="w-full border-2 border-bodyText p-2 mb-4 rounded-none"
          />
        </label>
        <label htmlFor="Subject">
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Subject
          </p>
          <input
            required
            type="text"
            name="subject"
            className="w-full border-2 border-bodyText p-2 mb-4 rounded-none"
          />
        </label>
        <label htmlFor="Message">
          <p className="text-left text-bodyText mb-2 text-sm font-light">
            Message
          </p>
          <textarea
            required
            name="message"
            className="w-full border-2 border-bodyText p-2 rounded-none"
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
