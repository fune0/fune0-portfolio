import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Workspage = () => (
  <Layout>
    <SEO title="Works" />
    <h2>Works</h2>
    <p>Welcome to Works Page</p>
    
    <section class="section" id="work">
        <div class="inner">

          <div class="card-wrapper">
            
            <div class="card">
            <span className="work-icon">
              
            </span>
              <div class="work">
                <h3 class="work-title"></h3>
                <p class="work-txt"></p>
              </div>
            </div>

            <div class="card">
            <span className="work-icon">
              
            </span>
              <div class="work">
                <h3 class="work-title"></h3>
                <p class="work-txt"></p>
              </div>
            </div>

            <div class="card">
            <span className="work-icon">
              
            </span>
              <div class="work">
                <h3 class="work-title"></h3>
                <p class="work-txt"></p>
              </div>
            </div>

            <div class="card">
            <span className="work-icon">
              
            </span>
              <div class="work">
                <h3 class="work-title"></h3>
                <p class="work-txt"></p>
              </div>
            </div>

          </div>
        </div>
     </section>

    <Link to=""></Link>
  </Layout>
)

export default Workspage