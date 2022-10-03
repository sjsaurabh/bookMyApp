import React from 'react'
import img from '../img/sec1.png'
import '../Css/Section1.css'

function Section1() {
    return (
        <div id="section1">
            <div className="sec1-img">
                <img src={img} alt="" />
            </div>
            <div className="div-main">
                <div className="div1">
                    <h1>Enjoy every single beat on headphone! </h1>
                    <p>For iPhone,iPad,Android users, be sure your product's firmware is up to date through the Bose connent app.</p>
                </div>
                <div className="div2">
                    <h1>$299</h1>
                    <button>save 30% today</button>
                    <br />
                    <p>Original price $399</p>
                </div>
                <div className="div3">
                    <div className="insidebtn1">
                        <button className="btn"><h3>1</h3>
                        </button>
                    </div>
                    <div className="insidebtn2">
                        <button className='btn1'>+</button>
                        <button className='btn2'>-</button>
                    </div>
                    <div className='cart'>
                    <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section1