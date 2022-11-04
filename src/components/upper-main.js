import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/kris-modified.png'
import AuthorImg1 from '../../static/author/dr-modified.png'


const UpperMain =()=>{

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

 
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt" data-aos="fade-right">
                <h1>Meet the Author</h1>
                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                       
                                <h1>Dan Broadwell</h1>
                                {/* <span>Author & Writer</span> */}

                                <p>
                                - Don Broadwell began studying collaborative leadership in 1985 after a career counselor advised him to shed the top-down style he learned in the Marines. Following ten years in the military and grad school, Don spent a career in education, supplying library books to schools. He retired after 40 years, but continues to train teachers on nights and weekends, as he has for the past three decades...
                                </p>

                                <button>Read More</button>
                            </section>
                        </div>
                    </div>
                </div>


                {/* <div className="container-gt" data-aos="fade-left">

                    <div className="grid-two-columns" >
                        <div className="content-wrapper-body" >
                          
                        <section >
                                <h1>Dr. Daniel A. Falk</h1>
                                <span>Author & Writer</span>

                                <p>
                                served as the president of the board of directors for the Wellness Council for South Carolina. Dr. Falk’s enthusiasm for helping people can be seen each day in his chiropractic practice...
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                         
                    </div>

                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>

                             <img src={AuthorImg1} alt="author-profile"/>
                           
                        </div>
                    </div>
                </div> */}

            </section>
        </>
    )
}

export default UpperMain