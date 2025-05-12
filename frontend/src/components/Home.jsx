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

      <div className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🚚</span>
              <h3>Envío Gratis</h3>
              <p>En pedidos superiores a S/100</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Calidad Premium</h3>
              <p>Productos de las mejores marcas</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3>Mejores Precios</h3>
              <p>Garantizamos el mejor precio del mercado</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Compra Segura</h3>
              <p>Pago seguro y protegido</p>
            </div>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="container">
          <h2>Nuestras Categorías</h2>
          <div className="categories-grid">
            <Link to="/pañaleria" className="category-card">
              <img 
                src="https://images.pexels.com/photos/3662909/pexels-photo-3662909.jpeg" 
                alt="Pañales"
              />
              <div className="category-content">
                <h3>Pañales</h3>
                <p>Las mejores marcas en pañales</p>
              </div>
            </Link>
            <Link to="/higiene" className="category-card">
              <img 
                src="https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg" 
                alt="Higiene"
              />
              <div className="category-content">
                <h3>Higiene</h3>
                <p>Productos para el cuidado del bebé</p>
              </div>
            </Link>
            <Link to="/accesorios" className="category-card">
              <img 
                src="https://images.pexels.com/photos/3661387/pexels-photo-3661387.jpeg" 
                alt="Accesorios"
              />
              <div className="category-content">
                <h3>Accesorios</h3>
                <p>Todo lo que necesitas</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;