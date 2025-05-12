import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>
            Todo para el cuidado
            <span className="highlight">de tu bebé</span>
          </h1>
          <p>Al mejor precio, con la mejor calidad</p>
          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              <span>Ver productos</span>
            </Link>
            <Link to="/promociones" className="btn btn-secondary">
              Ofertas especiales
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg" 
            alt="Bebé feliz"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;