import React, { useState } from 'react'
import './navbar.css'
import { Search } from '@material-ui/icons'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import NavBarOptions from './NavBarOptions'

function NavBar(props) {
  const [text, setText] = useState('')
  return (
    <div className="nav">
      <h1>home</h1>
      <div className="search-box">
        {' '}
        <Search />
        <input
          type="text"
          className="inp-nav"
          onChange={(e) => {
            props.updateText(e.target.value)
          }}
        />
      </div>

      <div className="header-items">
        <NavBarOptions Icon={Search} text="explore" />
        <NavBarOptions Icon={PermIdentityIcon} text="profile" />
      </div>
    </div>
  )
}

export default NavBar
