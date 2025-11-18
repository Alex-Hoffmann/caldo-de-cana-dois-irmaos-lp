import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="#inicio" className="logo-wrapper">
          <div className="logo-text">
            <span className="logo-icon">🌱</span>
            <div>
              <h1 className="logo-title">Dois Irmãos</h1>
              <p className="logo-subtitle">Caldo de Cana</p>
            </div>
          </div>
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
          <ul className="nav-list">
            <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a></li>
            <li><a href="#produtos" onClick={() => setMobileMenuOpen(false)}>Produtos</a></li>
            <li><a href="#depoimentos" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a></li>
            <li><a href="#cardapio" onClick={() => setMobileMenuOpen(false)}>Cardápio</a></li>
            <li><a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
          </ul>

          <div className="nav-actions">
            <a href="tel:+5545999999999" className="nav-phone" aria-label="Ligar para o Dois Irmãos">(45) 99999-9999</a>
            <a href="#contato" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>
              Faça Seu Pedido
              <span className="arrow-icon" aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        <button
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span aria-hidden="true">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
