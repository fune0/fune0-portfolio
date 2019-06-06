import React from "react"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faWordpressSimple } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div id="wrap">
      <div className="container">
        <div className="column" style={{ maxWidth: '200px', marginBottom: '1.45rem'}}>
          <Image filename="fune0icon.png" alt="フネオ"/>
        </div>

        <div class="profile">
          <h4>Fune0</h4>
          <h4>Web Engineer/Director</h4>
        </div>

        <div className="message" style={{marginBottom: 50,}}>
          <h3 style={{textAlign: 'center',}}>Hello, SHIBUYA!</h3>
          <p style={{textAlign: 'center'}}>I live in Shibuya ward to enjoy solitude.</p>
          <p style={{textAlign: 'center'}}>But I sometimes feel lonely.</p>
        </div>

        <div className="snsicon">

            <span className="btn-social github">
            <a href="https://github.com/fune0">
              <FontAwesomeIcon
                color="#333"
                size='2x'
                icon={faGithub} />
            </a>
            </span>

            <span className="btn-social twiiter">
            <a href="">
              <FontAwesomeIcon
                color="#3eaded"
                size='2x'
                icon={faTwitter} />
            </a>
            </span>

            <span className="btn-social wordpress">
            <a href="">
              <FontAwesomeIcon
                color="#23282d"
                size='2x'
                icon={faWordpressSimple} />
            </a>
            </span>

            <p style={{textAlign: 'center'}}>Please contact me</p>

        </div>
        
      </div>
    </div>
  </Layout>
)

export default IndexPage
