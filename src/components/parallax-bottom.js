import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Typewriter from "typewriter-effect"

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

  // const tween = KUTE.fromTo(
  //   "#blob1",
  //   { path: "#blob1" },
  //   { path: "#blob2" },
  //   { repeat: 999, duration: 3000, yoyo: true }
  // )
  // tween.start()

  return (
    <>
      <section className="parallax-bottom">
        <div className="flex-container">
          <div className="parallax-testimonial">
            <h1 data-aos="fade-down">
              “The terms leadership and problem-solving are interchangeable.{" "}
              <br />
              Only those with the courage of that conviction need to read on.”
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default ParallaxBottom
