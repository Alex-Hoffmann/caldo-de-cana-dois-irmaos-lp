import React from 'react';
import './Solution.css';

const Solution: React.FC = () => {
  const services = [
    {
      title: 'Caldo de Cana',
      description: 'Fresquinho e gelado, feito na hora! É 100% natural, sem açúcar. Vem experimentar!',
      icon: '🌱'
    },
    {
      title: 'Pastel',
      description: 'Pastel quentinho e crocante! Tem de carne, queijo, frango, pizza e outros sabores.',
      icon: '🥟'
    },
    {
      title: 'Crepe',
      description: 'Crepe doce ou salgado, você escolhe! Feito na hora, bem recheadinho.',
      icon: '🥞'
    },
  ];

  return (
    <section className="services" id="produtos" aria-labelledby="services-heading">
      <div className="container">
        <header className="services-header">
          <p className="section-tag">O que a gente faz</p>
          <h2 id="services-heading" className="section-title">Nossos Produtos</h2>
          <p className="section-description">
            Tudo fresquinho, feito na hora! Vem provar!
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon" aria-hidden="true">
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-accent" aria-hidden="true"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
