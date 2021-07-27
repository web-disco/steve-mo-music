import React from "react"

const SiteFooter = () => {
  // get date
  const date = new Date()

  // get year from date
  const year = date.getFullYear()

  return (
    <footer className="bg-black py-3 mt-8">
      <div className="container block md:flex text-center justify-between px-4 text-white text-xs font-light">
        <p className="mb-4 md:mb-0">
          {" "}
          © {year} Copyright Steve Molella Music | All Rights Reserved.
        </p>
        <div>
          <p>
            Website by{" "}
            <a href="https://www.webdisco.digital" title="Toronto Web Design">
              Web Disco
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
