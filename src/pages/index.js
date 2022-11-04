import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/upper-main"
import MidMain from "../components/mid-main"
import ParallaxBottom from "../components/parallax-bottom"
import Newsletter from "../components/newsletter"

const IndexPage = (props) => (
  <Layout>
  <Helmet title="Home | Kristi Falk & Dr. Daniel Falk"/>
      <Nav pathExt={props.path}/>
      <Banner/> 
      <ParallaxBottom/>
      <UpperMain/> 
      <MidMain/>    
      <Newsletter/> 
  </Layout>
)

export default IndexPage
