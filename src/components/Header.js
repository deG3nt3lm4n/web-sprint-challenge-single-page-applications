import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
      <nav>
        <h2>Lambda Eats</h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/pizza'>Help</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
