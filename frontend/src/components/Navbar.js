import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="title">
                <h1><span style={{color:'#007bff'}}>In</span>voicer</h1>
            </div>
            <div className="userLogo">
              <i class="fa-solid fa-user" style={{color:'grey', fontSize:'20px'}}></i>
            </div>
        </div>
    </>
  )
}
