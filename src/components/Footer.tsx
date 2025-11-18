import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo-text">
                <span className="footer-logo-icon">🌱</span>
                <div>
                  <h3 className="footer-logo-title">Dois Irmãos</h3>
                  <p className="footer-logo-subtitle">Caldo de Cana</p>
                </div>
              </div>
              <address className="footer-address">
                <p>Cascavel, PR</p>
                <p>
                  <a href="tel:+5545999999999">(45) 99999-9999</a>
                </p>
                <p>
                  <a href="mailto:contato@doisirmaos.com.br">contato@doisirmaos.com.br</a>
                </p>
              </address>
              <nav className="social-links" aria-label="Redes sociais">
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  📷
                </a>
                <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  👍
                </a>
                <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  💬
                </a>
              </nav>
            </div>

            <nav className="footer-column" aria-label="Produtos">
              <h3 className="footer-title">Produtos</h3>
              <ul className="footer-links">
                <li><a href="#produtos">Caldo de Cana</a></li>
                <li><a href="#produtos">Pastéis</a></li>
                <li><a href="#produtos">Crepes</a></li>
              </ul>
            </nav>

            <nav className="footer-column" aria-label="Navegação">
              <h3 className="footer-title">Navegação</h3>
              <ul className="footer-links">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>

            <nav className="footer-column" aria-label="Horário">
              <h3 className="footer-title">Horário de Funcionamento</h3>
              <ul className="footer-links">
                <li>Segunda a Sexta: 8h - 18h</li>
                <li>Sábado: 8h - 14h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © {currentYear} Caldo de Cana Dois Irmãos. Todos os direitos reservados.
            O melhor caldo de cana de Cascavel!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
