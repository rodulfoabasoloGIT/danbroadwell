import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import ImgBanner from "../../static/book/earthamockup2.png"
import ImgBanner1 from "../../static/book/book1.png"
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Aos from "aos"
import "aos/dist/aos.css"

const Banner = () => {
  const elemBanner = useRef(null)

  useEffect(() => {})

  // const settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   };

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="banner-section">
        <div className="grid-two-layout-col">
          <div className="wrapper-bg-left">
            <div className="left-col" data-aos="fade-up">
              <div className="banner-content-wrapper">
                <h1>
                  <span className="first-block">
                    <span id="color-o">
                      Collaborative Leadership for Classroom and School
                    </span>
                  </span>

                  {/* <span className="second-block">
                                        <span>
                                            Fog
                                        </span>
                                    </span> */}
                </h1>
                <p className="p-banner">
                  Millennials are a difficult bunch. They are disruptive, tardy,
                  disobedient, and quarrelsome. They are 30 percent more likely
                  to be job-hoppers. The cost of retraining them exceeds thirty
                  billion dollars per year, an expense borne ultimately by the
                  larger community. At the same time, research at Social Justice
                  Ireland shows "every person should have a genuine voice in
                  shaping the decisions that affect them."
                  <blockquote className="block">
                    “A word of caution – If you are a leader and you are not
                    seeing that problems are resolved,
                    <br />
                    you may be creating them.”
                    <cite className="cite">- Rodulfo Abasolo</cite>
                  </blockquote>
                </p>

                <div className="btn-container">
                  <button className="btn-book">
                    <Link to="/about-the-book">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper-bg-right" data-aos="fade-down">
            <div className="right-col banner-img-col">
              <div>
                <img src={ImgBanner} alt="book" />
              </div>
              {/* <Slider {...settings}> 
                                            <div >
                                                <img src={ImgBanner} alt="book" />
                                            </div>
                                            <div className="img-banner-wrapper" ref={elemBanner}>
                                                <img src={ImgBanner1} alt="book1" />
                                            </div>
                                    </Slider> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
