import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <main>

      <div className="hero">
          <h1>Your favorite food delivered while coding</h1>
          <Link to='/pizza'>Pizza?</Link>
      </div>

    </main>
  )
}

export default HomePage
