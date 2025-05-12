import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const [nombre, setNombre] = useState(localStorage.getItem('nombre'));
  const [rol, setRol] = useState(localStorage.getItem('rol'));
  const isLoggedIn = !!rol;

  useEffect(() => {
    const onStorage = () => {
      setNombre(localStorage.getItem('nombre'));
      setRol(localStorage.getItem('rol'));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event('storage'));
    window.location.href = '/';
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            Pañalería <span>Claudia</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/promociones">Promociones</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="nav-actions">
            <button className="search-btn">
              <span role="img" aria-label="search">🔍</span>
            </button>
            <Link to="/cart" className="cart-btn">
              <span role="img" aria-label="cart">🛒</span>
              <span className="cart-count">0</span>
            </Link>
            {!isLoggedIn ? (
              <div className="auth-buttons">
                <Link to="/login" className="login-btn">Iniciar Sesión</Link>
                <Link to="/registrar" className="register-btn">Registrarse</Link>
              </div>
            ) : (
              <div className="user-menu">
                <span className="user-name">{nombre}</span>
                <button onClick={handleLogout} className="logout-btn">
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Pañalería Claudia</h3>
              <p>Todo lo que necesitas para el cuidado de tu bebé</p>
            </div>
            <div className="footer-section">
              <h3>Enlaces</h3>
              <Link to="/">Inicio</Link>
              <Link to="/productos">Productos</Link>
              <Link to="/promociones">Promociones</Link>
              <Link to="/nosotros">Nosotros</Link>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>📍 Dirección del local</p>
              <p>📞 Teléfono de contacto</p>
              <p>✉️ Email de contacto</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;