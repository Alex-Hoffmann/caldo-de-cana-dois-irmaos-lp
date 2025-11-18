import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Carlos',
      role: 'Cliente',
      content: 'O melhor caldo de cana da cidade! Sempre geladinho e fresquinho. Venho toda semana. O pastel também é muito bom!',
      rating: 5,
    },
    {
      name: 'Juliana',
      role: 'Cliente',
      content: 'Gosto muito daqui! O caldo é natural, sem açúcar, do jeito certo. O crepe é uma delícia!',
      rating: 5,
    },
    {
      name: 'Roberto',
      role: 'Cliente',
      content: 'Sempre passo aqui quando venho em Cascavel! O pastel é bem crocante e recheado. Preço bom e produto bom demais!',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="depoimentos" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="testimonials-header">
          <p className="section-tag">Depoimentos</p>
          <h2 id="testimonials-heading" className="section-title">O que o pessoal fala</h2>
          <p className="section-description">
            Veja o que nossos clientes acham!
          </p>
        </header>

        <div className="testimonials-carousel">
          <button
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Depoimento anterior"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <article key={index} className="testimonial-card">
                  <div className="testimonial-avatar" aria-hidden="true">
                    <span className="avatar-icon">👤</span>
                  </div>
                  <blockquote className="testimonial-content">
                    <p className="testimonial-text">{testimonial.content}</p>
                    <div className="testimonial-stars" role="img" aria-label={`${testimonial.rating} de 5 estrelas`}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'} aria-hidden="true">
                          ★
                        </span>
                      ))}
                    </div>
                    <footer className="testimonial-author">
                      <cite className="author-name">{testimonial.name}</cite>
                      <p className="author-role">{testimonial.role}</p>
                    </footer>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>

          <button
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Próximo depoimento"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="carousel-indicators" role="tablist" aria-label="Indicadores de depoimentos">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
