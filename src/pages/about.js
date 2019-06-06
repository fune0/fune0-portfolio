import React from "react"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"

const Aboutpage = () => (
  <Layout >
    <SEO title="About" />
    <div id="about">
      <h2>About</h2>
      <p>Welcome to About Page</p>
      <section className="profile clearfix">
        
        <h3 className="icon">Profile</h3>

        <span className="profile-txt">
          <p>フネオ</p>
          <p>WEBエンジニア、ディレクター</p>
          <p>渋谷区在住、20代後半</p>
          <p>強み　着想、未来志向、最上志向</p>
          <p>趣味　お酒、自転車、渋谷散策</p>
        </span>
          
        <div className="profile-img" style={{ maxWidth: '200px', marginBottom: '1.45rem'}}>
          <Image filename="fune0icon.png" alt="フネオ"/>
        </div>

      </section>

      <section className="career">
        <h3 className="icon">Career and Job history</h3>
        <table>
          <tr>
            <th>2015年4月〜2018年12月</th>
            <td>共同研究、新規事業企画、WEBサービス企画、インサイドセールス</td>
          </tr>
          <tr>
            <th>2019年1月〜現在</th>
            <td>テクノロジースクール運営（メンター兼エンジニア）</td>
          </tr>
        </table>
      </section>
    </div>

  </Layout>
)

export default Aboutpage