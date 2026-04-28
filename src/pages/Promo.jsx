import { useState, useEffect } from 'react'
import { MessageCircle, CheckCircle, Clock, AlertTriangle, Star, ChevronDown } from 'lucide-react'
import TransparentLogo from '../components/TransparentLogo'
import './Promo.css'

const WHATSAPP_URL = "https://wa.me/5547991484425?text=Olá! Vi a promoção do mês no site e quero garantir meu desconto!"

function getTimeUntilEndOfMonth() {
  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0)
  const diff = endOfMonth - now
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

// Vagas "restantes" — número fixo que parece diminuir
function getVagas() {
  const now = new Date()
  const day = now.getDate()
  // Simula que as vagas diminuem ao longo do mês
  const base = 12
  const used = Math.min(Math.floor(day * 0.4), base - 3)
  return base - used
}

function Promo() {
  const [time, setTime] = useState(getTimeUntilEndOfMonth())
  const vagas = getVagas()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeUntilEndOfMonth())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="promo">
      {/* Header */}
      <header className="promo__header">
        <TransparentLogo src="/somente-logo.png" alt="Limpô" className="promo__logo" />
      </header>

      {/* Banner de urgência */}
      <div className="promo__urgency-bar">
        <AlertTriangle size={14} />
        <span>Apenas <strong>{vagas} vagas</strong> disponíveis este mês!</span>
        <AlertTriangle size={14} />
      </div>

      {/* Hero */}
      <section className="promo__hero">
        <div className="promo__hero-content">
          <span className="promo__badge">🎉 Promoção do Mês</span>

          <h1 className="promo__title">
            Higienização completa
            <span className="promo__title-highlight"> com desconto especial</span>
          </h1>

          <p className="promo__subtitle">
            Aproveite nossa oferta exclusiva deste mês e deixe seus estofados
            higienizados por um preço especial. Vagas limitadas!
          </p>

          {/* Preço */}
          <div className="promo__price-box">
            <div className="promo__price-old">
              <span>De</span>
              <span className="promo__price-strike">R$ 250,00</span>
            </div>
            <div className="promo__price-new">
              <span>Por apenas</span>
              <span className="promo__price-value">R$ 179,00</span>
            </div>
            <div className="promo__price-tag">28% OFF</div>
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="promo__cta">
            <MessageCircle size={22} />
            Quero Garantir Meu Desconto!
          </a>

          <p className="promo__cta-hint">👆 Clique e fale direto no WhatsApp</p>
        </div>
      </section>

      {/* Contador */}
      <section className="promo__countdown-section">
        <p className="promo__countdown-label">
          <Clock size={16} />
          Promoção encerra em:
        </p>
        <div className="promo__countdown">
          <div className="promo__countdown-item">
            <span className="promo__countdown-number">{String(time.days).padStart(2, '0')}</span>
            <span className="promo__countdown-unit">dias</span>
          </div>
          <span className="promo__countdown-sep">:</span>
          <div className="promo__countdown-item">
            <span className="promo__countdown-number">{String(time.hours).padStart(2, '0')}</span>
            <span className="promo__countdown-unit">horas</span>
          </div>
          <span className="promo__countdown-sep">:</span>
          <div className="promo__countdown-item">
            <span className="promo__countdown-number">{String(time.minutes).padStart(2, '0')}</span>
            <span className="promo__countdown-unit">min</span>
          </div>
          <span className="promo__countdown-sep">:</span>
          <div className="promo__countdown-item">
            <span className="promo__countdown-number">{String(time.seconds).padStart(2, '0')}</span>
            <span className="promo__countdown-unit">seg</span>
          </div>
        </div>
        <div className="promo__vagas">
          <span className="promo__vagas-dot" />
          Restam apenas <strong>{vagas} vagas</strong> com desconto este mês
        </div>
      </section>

      {/* O que está incluso */}
      <section className="promo__includes">
        <h2 className="promo__section-title">O que está incluso:</h2>
        <ul className="promo__list">
          {[
            'Higienização profunda do estofado',
            'Remoção de manchas e odores',
            'Eliminação de ácaros e bactérias',
            'Produtos profissionais de alta qualidade',
            'Atendimento no seu endereço',
            'Resultado garantido',
          ].map((item, i) => (
            <li key={i} className="promo__list-item">
              <CheckCircle size={18} className="promo__check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Depoimentos */}
      <section className="promo__testimonials">
        <h2 className="promo__section-title">O que nossos clientes dizem:</h2>
        <div className="promo__testimonials-grid">
          {[
            { name: 'Ana Paula', text: 'Ficou incrível! Meu sofá parecia novo. Super recomendo!', stars: 5 },
            { name: 'Carlos M.', text: 'Serviço rápido e resultado excelente. Valeu cada centavo.', stars: 5 },
            { name: 'Fernanda S.', text: 'Profissionais muito atenciosos. Voltarei com certeza!', stars: 5 },
          ].map((t, i) => (
            <div key={i} className="promo__testimonial">
              <div className="promo__stars">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={14} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>
              <p className="promo__testimonial-text">"{t.text}"</p>
              <span className="promo__testimonial-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="promo__final-cta">
        <div className="promo__final-urgency">
          <AlertTriangle size={16} />
          <span>Oferta válida somente até o fim do mês ou enquanto houver vagas!</span>
        </div>
        <h2 className="promo__final-title">Não perca essa oportunidade!</h2>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="promo__cta promo__cta--large">
          <MessageCircle size={24} />
          Garantir Meu Desconto Agora
        </a>
        <p className="promo__final-hint">Sem compromisso • Resposta imediata</p>
      </section>

      {/* Footer simples */}
      <footer className="promo__footer">
        <TransparentLogo src="/somente-logo.png" alt="Limpô" className="promo__footer-logo" />
        <p>Limpô • Higienização de Estofados • Blumenau e região</p>
      </footer>
    </div>
  )
}

export default Promo
