import React from "react"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"

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
                <p class="work-txt"><Link to="/">Github</Link></p>
            </div>

          </div>
        </div>
     </section>

  </Layout>
)

export default Workspage