import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/earthamockup2.png'
import Book2 from '../../static/book/book1.png'

import { Helmet } from "react-helmet"
// import ParallaxBottom from "../components/parallax-bottom"

const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'eathagetswell',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Kristi Falk & Dr. Daniel Falk" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        >

                        <BookInfo
                            data={{
                                title: `COLLABORATIVE LEADERSHIP FOR CLASSROOM AND SCHOOL`,
                                spanTitle: '',
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    Millennials are a difficult bunch. They are disruptive, tardy, disobedient, and quarrelsome. They are 30 percent more likely to be job-hoppers. The cost of retraining them exceeds thirty billion dollars per year, an expense borne ultimately by the larger community. At the same time, research at Social Justice Ireland shows "every person should have a genuine voice in shaping, the decisions that affect them."
                                    Author Don Broadwell asserts millennials have this right. Moreover, they are delightfully suited to a collaborative culture in the workplace. Still, not all that rolls down from the top is negotiable. To solve this problem, Don creates a twin-poled linear spectrum that weds participation with command and control. So long as future leaders solve problems, they will have more than twenty interventions to choose from, some based in authority and others in participation. Developing one's skill in the art of collaboration is the key to a happy marriage and a happier, more productive workplace.
                                    `,
                                // ebooks: {
                                //     stratton: '',
                                //     barnes: '',
                                //     amazon: 'https://www.amazon.com/Seven-Islands-Fog-Thomas-Terraforte-ebook/dp/B08Q6QJWTF/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1608675204&sr=8-1',
                                // },
                                // paperback: {
                                //     amazon: '',
                                //     barnes: 'https://www.barnesandnoble.com/w/seven-islands-of-the-fog-thomas-terraforte/1121892486?ean=9781648952920',
                                //     booksamillion: 'https://www.booksamillion.com/p/Seven-Islands-Fog/Thomas-Terraforte/9781648952920?id=8158356429268',
                                // },
                            }}
                        />
                        {/* <ParallaxBottom/> */}
                        {/* <div class="external-reviews-cont">
                            <h3>The US Review of Books</h3>
                            <ul class="reviews-list">
                                <li>
                                "True knowledge comes from observing life in a way nobody ever has."&nbsp;
                                <a target="_blank" rel="noreferrer" href="https://www.theusreview.com/reviews-1/Seven-Islands-of-the-Fog-by-Thomas-Terraforte.html#.YkpcPehByUl">Read more</a>
                                </li>
                            </ul>
                        </div> */}

                            {/* <BookInfo
                            data={{
                                title: `Human Angels`,
                                spanTitle: 'A Human Story',
                                imgSrc: Book2,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    Four high school seniors search for a project to satisfy their school service requirement. What they find are powers beyond compare. An offer by a stranger leads them to rediscover the world as Human Angels. The journey may be supernatural, but the decisions are real. If they can endure, their friendship, coupled with their new powers, will lead them to uncover what adulthood and dedication truly mean.
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/human-angels-thomas-terraforte/1140316545?ean=9781648955655',
                                    amazon: 'https://www.amazon.com/Human-Angels-Story-Thomas-Terraforte-ebook/dp/B09HXYQ6F6/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634323651&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Human-Angels-Story-Thomas-Terraforte/dp/1648955649/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1634323651&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/human-angels-thomas-terraforte/1140316545?ean=9781648955648',
                                    booksamillion: 'https://www.booksamillion.com/p/Human-Angels/Thomas-Terraforte/9781648955648?id=8158356429268',
                                },
                            }}
                        /> */}

                        <div className="commentSection" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </main>
                
            </Layout>
        </>
    )
}


export default ATB;