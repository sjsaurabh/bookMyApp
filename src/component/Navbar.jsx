import React from 'react'

function Navbar() {
  return (
    <div id="nav">
      <div className="left">
        <h1>Omega</h1>
      </div>
      <div className="middle">
        <ul>
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="right">
        <h4>Cart</h4>
        <h5>3</h5>
      </div>
    </div>
  )
}

export default Navbar