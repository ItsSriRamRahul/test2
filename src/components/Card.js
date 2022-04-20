import React from 'react'
import './Card.css'
import { useState, useEffect } from 'react'
import Distance from './Distance'
function Card({ likes, img, title, address, notVisible, dis }) {
  let style = ''
  if (likes < 75) {
    style = 'low'
  }
  return (
    <div className="Card">
      <div className="Card-img">
        <img src={img} />
      </div>
      <div className="Card-info">
        <div className="Card-title">{title}</div>
        <div className={`Card-rating ${style}`}>{likes}%</div>
      </div>
      <div className={`Card-add ${notVisible ? 'non' : ''}`}>.{address}</div>
      <div className="Card-dist"> {Math.floor(dis)}km Away</div>
    </div>
  )
}

export default Card
