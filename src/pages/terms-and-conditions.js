import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'

const TaC = (props) =>{

	const FetchMarkDown = useStaticQuery(graphql`
		 query TermsAndConditionsPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/terms-and-condition.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};


	return(
	 	<>
	 		<Layout>
			 <Helmet title="Terms and Conditions | Kristi Falk & Dr. Daniel Falk"/>
                 <Nav pathExt={props.path}/>
                    <Banner 
                            spanFirst={`Terms And`}
                            contextHeading={`Conditions`} 
                    />
 
	 				<div className="container">
						<div id="terms-and-conditions-content">
							<div className="">{Parser(data.html)}</div>
							
						</div>
					</div>
	 		</Layout>
	 	</>
	)
}


export default TaC;