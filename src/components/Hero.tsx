import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-heading">
      <div className="container">
        <article className="hero-content">
          <p className="hero-tag">Bem-vindo!</p>
          <h1 id="hero-heading" className="hero-title">
            Caldo de Cana Dois Irmãos
          </h1>
          <p className="hero-description">
            O melhor caldo de cana de Cascavel! Vem tomar um caldo geladinho feito na hora.
            Também temos pastel e crepe quentinhos e deliciosos!
          </p>
          <div className="cta-buttons">
            <a href="#contato" className="btn btn-primary">
              Faça Seu Pedido
            </a>
            <a href="#produtos" className="btn btn-outline">
              Ver Produtos
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
