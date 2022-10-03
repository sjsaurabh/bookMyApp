import React from 'react'
import img from '../img/photo.png'
import img1 from '../img/photo1.png'
import '../Css/Section6.css'

function Section6() {
    return (
        <>
            <section className="section">

                <div className="first-sec6">
                    <h1>What user say</h1>
                    <p>
                        Create custom landing pages with Omega that converts
                        more visitors than any
                        webside.
                    </p>
                </div>
                <div className="second-sec6">
                    <div className="secondone">
                        <p className="secondone-p">
                            OMG i cannot believe that i have god a brand new landing page after
                            getting Omega .it was super easy to edit and publish
                        </p>
                        <div className="secondtwo">
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div className="text1">
                                <h1>Jonathan Taylor</h1>
                                <p> CEO at Creative</p>
                            </div>
                        </div>

                    </div>
                    <div className="thirdone">
                        <p className="thirdone-p">
                            OMG ! cannot believe that got a brand new landing page after getting
                            Omega. it was super easy to edit and publish
                        </p>
                        <div className="thirdtwo">

                            <div>
                                <img src={img1} alt="" />
                            </div>
                            <div className="text2">
                                <h1>Marie Stanley</h1>
                                <p>Digital Marketer,Writer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last">
                    <div className="last-1"></div>
                    <div className="last-2"></div>
                    <div className="last-3"></div>

                </div>

            </section>
        </>
    )
}

export default Section6