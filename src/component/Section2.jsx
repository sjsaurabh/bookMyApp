import React from 'react'
import '../Css/Section2.css'
import img1 from '../img/card.png'
import img2 from '../img/smartphone.png'
import img from '../img/bitmap.png'

function Section2() {
  return (
    <div className="section-2">
      <div className="firststcontainer">
        <div className="div1">
          <h1>Get noise free sound everytime</h1>
          <p>
            Creat custom landing pages with Omega that converts more visiters
            than website. with lots of unique block, you can easily builts a
            page without coading
          </p>
        </div>
        <div className="div2-sec2">
         <div className="img1">
            <img src={img1} alt="" />
         </div>
          <div className="text1">
             <h3>50+unique Design Blocks</h3>
             <p>with Carefully Coded</p>
          </div>
        </div>
        <div className="div3-sec2">
          <div className="img2">
            <img src={img2} alt="" />
          </div>
          <div className="text2">
            <h3>Mobile First Design</h3>
            <p>on Every Devices</p>
          </div>
        </div>
      </div>
      <div className="secondcontainer">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Section2