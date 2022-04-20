import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import { useState } from 'react'
import Distance from './components/Distance'
import Slideshow from './components/Slideshow'
import Carousel from 'react-elastic-carousel'
function App() {
  const details = [
    {
      id: '1',
      title: 'Abshiek',
      img: 'https://pbs.twimg.com/media/FOxxAIRXwAY98HL?format=jpg&name=small',
      address: 'Sanathnagar',
      likes: 90,

      coord: {
        lat: 17.4563,
        long: 78.4439,
      },
    },
    {
      id: '2',
      title: 'Umran',
      img: 'https://pbs.twimg.com/media/FOsuEosVIAAuHqm?format=jpg&name=large',
      address: 'aziznagar',
      likes: 70,
      coord: {
        lat: 17.3501,
        long: 78.3468,
      },
    },
    {
      id: '3',
      title: 'Umran',
      img: 'https://wallpaperaccess.com/full/2108468.jpg',
      address: 'Secundrabad',
      likes: 76,
      coord: {
        lat: 17.2619,
        long: 78.388,
      },
      distance: 0,
    },
    {
      id: '3',
      title: 'Umran',
      img: 'https://wallpaperaccess.com/full/2108468.jpg',
      address: 'Secundrabad',
      likes: 76,
      coord: {
        lat: 17.2619,
        long: 78.388,
      },
      distance: 0,
    },
    {
      id: '3',
      title: 'Umran4',
      img: 'https://wallpaperaccess.com/full/2108468.jpg',
      address: 'Secundrabad',
      likes: 76,
      coord: {
        lat: 17.2619,
        long: 78.388,
      },
      distance: 0,
    },
  ]

  const [search, setSearch] = useState('')

  details.map((detail, key) => {
    detail.distance = Distance(detail.coord.long, detail.coord.lat)
  })
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1, itemsToShow: 2 },
    { width: 1, itemsToShow: 3 },
    { width: 4, itemsToShow: 4 },
  ]
  return (
    <div className="App">
      <NavBar updateText={(text) => setSearch(text)}></NavBar>
      <div className="slide-show">
        {' '}
        <Slideshow />
      </div>
      <div className="card-row">
        <h1>Near Me</h1>
        <div className="cards">
          <Carousel breakPoints={breakPoints}>
            {details
              .filter((detail) => {
                if (detail.distance <= 60) {
                  return detail
                }
              })
              .map((detail, key) => {
                return (
                  <Card
                    title={detail.title}
                    img={detail.img}
                    address={detail.address}
                    likes={detail.likes}
                    dis={detail.distance}
                  />
                )
              })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default App
