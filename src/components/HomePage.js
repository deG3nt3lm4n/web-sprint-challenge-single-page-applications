import React from 'react'
import {Link} from 'react-router-dom'


const pizzaPlaces = [
  {
    image: 'https://images.unsplash.com/photo-1578261313043-ea8712de9c27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
    title: 'pizzaPete',
    subBar: {
        money: '$$',
        type: 'Pizzaria',
        style: 'healthy',
      }
    ,
    buttons: {
        time: '20-30 min',
        fee: '$5.99 Delivery Fee'
      }
  },
  {
    image: 'https://images.unsplash.com/photo-1607290817806-e93c813ff329?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    title: 'TomPete',
    subBar:{
        money: '$',
        type: 'Sandwhich',
        style: 'healthy',
      }
    ,
    buttons: {
        time: '30-30 min',
        fee: 'Free Delivery'
      }

  },
  {
    image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    title: 'pizzaTom',
    subBar: {
        money: '$$$',
        type: 'Pizzaria',
        style: 'Pizza',
      }
    ,
    buttons: {
        time: '20 min',
        fee: '$9.99 Delivery Fee'
      }
  }
]



function HomePage() {
  return (
    <main>

      <div className="hero">
        <div className="hero-content">
          <h1>Your favorite food delivered while coding</h1>
          <Link to='/pizza'>Pizza?</Link>
        </div>
      </div>

      <div>
        <h2>Food Deliver in Gotham City</h2>
        <div className="pizzaContainer">
          {
            pizzaPlaces.map(pizzaPlace => {
              return(
                <div key={Math.random() * 100000}>
                  <div className="pizzaImgContainer">
                    <img src={pizzaPlace.image} alt={pizzaPlace.title} />
                  </div>
                  <div className="pizzaContent">
                    <h4>{pizzaPlace.title}</h4>
                    <p>{pizzaPlace.subBar.money} - {pizzaPlace.subBar.type} - {pizzaPlace.subBar.style}</p>
                    <p>
                      <span>{pizzaPlace.buttons.time}</span>
                      <span>{pizzaPlace.buttons.fee}</span>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </main>
  )
}

export default HomePage
