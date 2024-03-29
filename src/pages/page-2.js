import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <section id="main">
      <div class="inner">
        <header class="major special">
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>

        <p>
          Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit
          accumsan sapien blandit ac amet faucibus aliquet placerat commodo.
          Interdum ante aliquet commodo accumsan vis phasellus adipiscing.
          Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor.
          Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent.
          Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan
          phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat
          ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan.
        </p>
        <p>
          Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum
          massa massa primis. Tempus condimentum tempus non ac varius cubilia
          adipiscing placerat lorem turpis at. Aliquet lorem porttitor interdum.
          Amet lacus. Aliquam lobortis faucibus blandit ac phasellus. In amet
          magna non interdum volutpat porttitor metus a ante ac neque. Nisi
          turpis. Commodo col. Interdum adipiscing mollis ut aliquam id ante
          adipiscing commodo integer arcu amet Ac interdum ac non praesent.
          Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan
          phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat
          ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan
          commodo odio cubilia ac eu interdum placerat placerat arcu commodo
          lobortis adipiscing semper ornare pellentesque.
        </p>
        <p>
          Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum
          massa massa primis. Tempus condimentum tempus non ac varius cubilia
          adipiscing placerat lorem turpis at. Aliquet lorem porttitor interdum.
          Amet lacus. Aliquam lobortis faucibus blandit ac phasellus. In amet
          magna non interdum volutpat porttitor metus a ante ac neque. Nisi
          turpis. Commodo col. Interdum adipiscing mollis ut aliquam id ante
          adipiscing commodo integer arcu amet blandit adipiscing arcu ante.
        </p>
      </div>
    </section>

    <section id="footer">
      <div class="inner">
        <header>
          <h2>Get in Touch</h2>
        </header>
        <form method="post" action="#">
          <div class="field half first">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul class="actions">
            <li>
              <input type="submit" value="Send Message" class="alt" />
            </li>
          </ul>
        </form>
        <div class="copyright">
          &copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>.
          Images <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
