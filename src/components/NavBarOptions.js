import React from 'react'
import './options.css'
function NavBarOptions({ text, Icon }) {
  return (
    <div className="options">
      <Icon />
      <h1>{text}</h1>
    </div>
  )
}

export default NavBarOptions
