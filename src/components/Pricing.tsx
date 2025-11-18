import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Caldo de Cana',
      description: 'Geladinho, natural e feito na hora!',
      price: 'R$ 5,00',
      features: [
        'Copo 300ml',
        'Cana fresca',
        'Sem açúcar',
        'Bem gelado',
      ],
      buttonText: 'Quero!',
      highlighted: false,
    },
    {
      name: 'Pastel',
      description: 'Crocante, quentinho e bem recheado!',
      price: 'R$ 6,00',
      badge: 'Mais Pedido',
      features: [
        'Massa crocante',
        'Vários sabores',
        'Bem grande',
        'Feito na hora',
      ],
      buttonText: 'Quero!',
      highlighted: true,
    },
    {
      name: 'Crepe',
      description: 'Doce ou salgado, sempre uma delícia!',
      price: 'R$ 8,00',
      features: [
        'Massa fina',
        'Bem recheado',
        'Doce ou salgado',
        'Feito na hora',
      ],
      buttonText: 'Quero!',
      highlighted: false,
    },
  ];

  return (
    <section className="pricing" id="cardapio" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="pricing-header">
          <p className="section-tag">Preços</p>
          <h2 id="pricing-heading" className="section-title">Quanto Custa?</h2>
        </header>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}

              <header className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>

                <p className="plan-price">
                  <strong className="price">{plan.price}</strong>
                </p>

                <a href="#contato" className="btn btn-plan">
                  {plan.buttonText}
                </a>
              </header>

              <hr className="pricing-divider" />

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
