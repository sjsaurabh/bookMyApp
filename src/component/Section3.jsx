import React from 'react'
import img1 from '../img/card.png'
import img2 from '../img/smartphone.png'
import img3 from '../img/shape.png'
import img4 from '../img/shapeG.png'
import '../Css/Section3.css'

import img22 from '../img/shapeR.png'
function Section2() {
  return (
    <div id="section3">
      <h1>It's everything you'll ever nedd</h1>
      <div className="div1-sec">
        <div className='div1-1'>
          <div className='img-div1'>
            <img src={img1} alt="" />
          </div>
          <h3>50+ Unique Design Blocks</h3>
        </div>
        <div className='div1-2'>
          <div className='img-div1'>
            <img src={img2} alt="" />
          </div>
          <h3> Multiple Layouts</h3>
        </div>
        <div className='div1-3'>
          <div className='img-div1'>
            <img src={img3} alt="" />
          </div>
          <h3>Mobile First Design</h3>
        </div>
      </div>
      <div className='div2-sec'>
        <div className='div2-1'>
          <div className='img-div2'>
            <img src={img2} alt="" />
          </div>
          <h3>Fully Responsive</h3>
        </div>
        <div className='div2-2'>
          <div className='img-div2'>
            <img src={img22} alt="" />
          </div>
          <h3>Bootstrap 4 Framework</h3>
        </div>

      </div>
      <div className="div3-sec">
        <div className='div3-1'>
          <div className='img-div1'>
            <img src={img4} alt="" />
          </div>
          <h3>Humanly Support</h3>
        </div>
        <div className='div3-2'>
          <div className='img-div1'>
            <img src={img22} alt="" />
          </div>
          <h3>Lifetime Updates</h3>
        </div>
        <div className='div3-3'>
          <div className='img-div1'>
            <img src={img2} alt="" />
          </div>
          <h3>Rich Documentation</h3>
        </div>
      </div>
    </div>
  )
}

export default Section2