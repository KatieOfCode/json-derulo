import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { jason } from "../images/json.gif"

const IndexPage = () => (
  <div>
    <h1>If you made it this far good job!</h1>
    <p>
      I am looking for a frontend role that gets to work with UI libraries :)
    </p>
    <p>If you're hiring, please let me know.</p>
    <a href="mailto:katiefujihara@gmail.com">Email</a>
    <a href="https://www.katiefujihara.com">Website</a>
    <iframe
      src="https://giphy.com/embed/l41YyrSMvJAwQ57u8"
      width="480"
      height="270"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    />
    <p>
      <a href="https://giphy.com/gifs/jasonderulo-l41YyrSMvJAwQ57u8" />
    </p>
  </div>
)

export default IndexPage
