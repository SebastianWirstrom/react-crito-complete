import React from 'react'

const linkList = [
    ["About", "Features", "Works", "Career"],
    ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
]

const boxesList = [
    {id: 1, title: "Company", link: linkList[0]},
    {id: 2, title: "Help", link: linkList[1]},
    {id: 3, title: "Resources", link: linkList[2]},
    {id: 4, title: "Link", link: linkList[2]}
]

const FooterBox = () => {
  return (
    <>
        {boxesList.map((box) => (
            <div key={box.id} className='footer-content'>
                <h3>{box.title}</h3>
                 {box.link.map((link, index) => (
                    <p key={index}>{link}</p>
                ))}
            </div>
        ))}
    </>
  )
}

export default FooterBox