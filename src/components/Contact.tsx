import React, { useState, type FormEvent } from 'react';
import './Contact.css';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.type !== 'idle') {
      setStatus({ type: 'idle' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus({ type: 'idle' });
      }, 5000);
  };

  return (
    <section className="contact" id="contato" aria-labelledby="contact-heading">
      <div className="container">
        <header className="contact-header">
          <p className="section-tag">Contato</p>
          <h2 id="contact-heading" className="section-title">Fale com a gente!</h2>
          <p className="section-description">
            Manda uma mensagem pra gente ou liga! A gente tá aqui pra te atender.
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {status.message && (
            <div className={`form-message form-message-${status.type}`} role="alert">
              {status.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="contact-name" className="visually-hidden">
              Nome completo
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Nome completo*"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              disabled={status.type === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email" className="visually-hidden">
              E-mail
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="Seu e-mail*"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              disabled={status.type === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone" className="visually-hidden">
              Telefone
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="Telefone (opcional)"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              disabled={status.type === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="visually-hidden">
              Mensagem
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Sua mensagem*"
              className="form-control textarea"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              rows={5}
              disabled={status.type === 'loading'}
            />
          </div>

          <button
            type="submit"
            className="btn btn-submit"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
