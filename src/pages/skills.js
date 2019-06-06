import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faLaravel, faWordpress, faReact } from '@fortawesome/free-brands-svg-icons'

const Skillspage = () => (
  <Layout>
    <SEO title="Skills" />
    <h2>Skills</h2>
    <p>Welcome to Skills Page</p>

    <section class="section" id="skill">
        <div class="inner">

          <div class="card-wrapper">
            
            <div class="card">
            <span className="skill-icon js">
              <FontAwesomeIcon
                color="#ffd700"
                size='3x'
                icon={faJs} />
            </span>
              <div class="skill">
                <h3 class="skill-title">HTML5/CSS3/Javascript</h3>
                <p class="skill-txt">Frontend</p>
              </div>
            </div>

            <div class="card">
            <span className="skill-icon laravel">
              <FontAwesomeIcon
                color="#ff4500"
                size='3x'
                icon={faLaravel} />
            </span>
              <div class="skill">
                <h3 class="skill-title">PHP/Laravel</h3>
                <p class="skill-txt">Backend</p>
              </div>
            </div>

            <div class="card">
            <span className="skill-icon react">
              <FontAwesomeIcon
                color="#00ffff"
                size='3x'
                icon={faReact} />
            </span>
              <div class="skill">
                <h3 class="skill-title">Ruby/Rails/Gatsby/Vue/React</h3>
                <p class="skill-txt">Studying</p>
              </div>
            </div>

            <div class="card">
            <span className="skill-icon wp">
              <FontAwesomeIcon
                color="#23282d"
                size='3x'
                icon={faWordpress} />
            </span>
              <div class="skill">
                <h3 class="skill-title">MySQL/GoogleAnalytics/WordPress</h3>
                <p class="skill-txt">Others</p>
              </div>
            </div>

          </div>
        </div>
     </section>

    <Link to=""></Link>
  </Layout>
)

export default Skillspage