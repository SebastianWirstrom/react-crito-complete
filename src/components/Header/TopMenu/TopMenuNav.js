import React from 'react'

function TopMenuNav({name, link, status}) {
  return (
    <>
      <nav>
          <a className={status} href={link}>{name}</a>
      </nav>
    </>
  )
}

export default TopMenuNav