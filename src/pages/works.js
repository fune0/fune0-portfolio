import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from "../components/image"
import SEO from '../components/seo'

const Workspage = () => (
  <Layout>
    <SEO title="Works" />
    <h2>Works</h2>
    <p>Welcome to Works Page</p>
    
    <section className="section" id="work">
        <div className="inner">

          <div className="card-wrapper">
            
            <div className="card">
            <span className="work-icon">
              <Image filename="portfolio.png" alt="ポートフォリオ"/>
            </span>
                <h2 class="work-title">Portfolio Site</h2>
                <p class="work-txt"><a href="https://github.com/fune0/fune0-portfolio" target="_blank">Github</a></p>
            </div>

          </div>
        </div>
     </section>

    <Link to=""></Link>
  </Layout>
)

export default Workspage