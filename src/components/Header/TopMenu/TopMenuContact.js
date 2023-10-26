import React from 'react'

function TopMenuContact({icon, text}) {
  return (
    
    <>
        <div className="content-box">
            <i className={icon}></i>
            <p>{text}</p>
        </div>
    </>
    
  )
}

export default TopMenuContact