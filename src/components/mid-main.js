import React from 'react'
import Logo1 from '../../static/logo/amazon.png'
import Logo2 from '../../static/logo/bam.png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../../static/logo/stratton-logo.png'

const MidMain = ()=>{
    return(
        <>
            <section className="mid-main" data-aos="flip-up">
                <div className="container-gt">
                    <h1>Featured</h1>
                    <p className="middle-params">
                       Thomas Terraforte has been featured numerous times on...
                    </p>

                    <div className="grid-template-four-col" id="logos-col">
                            <li>    
                            <img src={Logo1} alt="amazon-logo"/>
                            </li>

                            <li>
                                <img src={Logo2} alt="bam-logo" />  
                            </li>
                            <li>
                                <img src={Logo3} alt="b-and-n-logo" />
                            </li>

                            <li>
                                <img src={Logo4} alt="stratton-logo"/>
                            </li>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;