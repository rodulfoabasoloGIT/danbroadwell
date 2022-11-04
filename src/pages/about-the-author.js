import React,{useEffect, useState} from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
// import AuthorImg from '../../static/author/author.jpg'
import AuthorImg from '../../static/author/kris-modified.png'
import AuthorImg1 from '../../static/author/dr-modified.png'
import { Helmet } from "react-helmet"
import {Link} from 'gatsby'
const ATB = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   


    return (
        <>
            <Layout>
                <Helmet title="About the Author | Kristi Falk & Dr. Daniel Falk" />
                <Nav pathExt={props.path} />
                <Banner  spanFirst={`About The`} contextHeading={`Author`} />


                <section className={`upper-main upper-style`}>
                <div className="container-gt" data-aos="zoom-in-down">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Kristi Jacques </h1>
                                <span>Author & Writer</span>

                                <p>
                                Jacques (pronounced Jakes) is a former diabetes lifestyle coach. She has spent a lifetime working on improving her health with a strong focus on nutrition. She is a past owner of a small-town health food store and café, was the founder and executive director of the nonprofit the Diabetes Wellness Council, created and organized wellness expos, health fairs and talks with experts in the field, and more. She has appeared on local television programs, radio programs, podcasts, newspapers and magazines, and simply loves telling her story and helping others.
She has now added musician to her résumé, playing guitar, singing, writing, and recording.

                                </p>
{/* 
                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button> */}
                            </section>
                        </div>
                    </div>
                </div>



            </section>



            </Layout>
        </>
    )
}


export default ATB;