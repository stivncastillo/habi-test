import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-action">
        <Link to="/sales" className="hero-button">Vender</Link>
      </div>
    </div>
  )
}

export default Home
