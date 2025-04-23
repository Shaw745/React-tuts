import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="flex justify-between items-center h-[80px] container mx-auto">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div className="flex gap-4">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header