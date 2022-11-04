import React from 'react'
import {Link} from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ParallaxBottom = () => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        infinite: true,
    }

    return (
        <>
        <section className="parallax-bottom">               
            <div className="flex-container">
                <div className="parallax-testimonial">
                        <h1 data-aos="fade-down">“The terms leadership and problem-solving are interchangeable. <br/>Only those with the courage of that conviction need to read on.”</h1>                                                      
                </div>
            </div>
        </section>
            

        </>
    )
}

export default ParallaxBottom