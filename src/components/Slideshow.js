import React from 'react'
import './Slideshow.css'
import Carousel from 'react-elastic-carousel'
function Slideshow() {
  const arr = [{ img: 'https://wallpaperaccess.com/full/2108468.jpg' }]
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: 25,
      itemsToShow: 1,
    },
  ]
  return (
    <div className="slideshow">
      <div className="Carousel">
        <Carousel breakPoints={breakpoints}>
          {arr.map((item) => {
            return (
              <img
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
                className="caoursel-img"
              />
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Slideshow
