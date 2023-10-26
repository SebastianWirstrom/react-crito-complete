import React from 'react'

function SectionTitle({redTitle, title}) {
  return (
    <div className="section-title">
        <p>{redTitle}</p>
        <h2>{title}</h2>                               
    </div>
  )
}

export default SectionTitle