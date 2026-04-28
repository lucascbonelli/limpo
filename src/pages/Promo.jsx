import { useState, useEffect } from 'react'
import { MessageCircle, CheckCircle, Clock, AlertTriangle, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import TransparentLogo from '../components/TransparentLogo'
import './Promo.css'

const WHATSAPP_URL = "https://wa.me/5547991484425?text=Olá! Vi a promoção do mês no site e quero garantir meu desconto!"

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const photos = [
  { src: '/fotos/foto-1-antes.jpeg', type: 'antes' },
  { src: '/fotos/foto-1-depois.jpeg', type: 'depois' },
  { src: '/fotos/foto-2-antes.jpeg', type: 'antes' },
  { src: '/fotos/foto-2-depois.jpeg', type: 'depois' },
  { src: '/fotos/foto-3-antes.jpeg', type: 'antes' },
  { src: '/fotos/foto-3-depois.jpeg', type: 'depois' },
  { src: '/fotos/foto-4-antes.jpeg', type: 'antes' },
  { src: '/fotos/foto-5-depois.jpeg', type: 'depois' },
]

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

function getVagas() {
  const now = new Date()
  const day = now.getDate()
  const base = 12
  const used = Math.min(Math.floor(day * 0.4), base - 3)
  return base - used
}

function Promo() {
  const [time, setTime] = useState(getTimeUntilEndOfMonth())
  const vagas = getVagas()
  const mesAtual = MESES[new Date().getMonth()]

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
        <span>Apenas <strong>{vagas} vagas</strong> com desconto em {mesAtual}!</span>
        <AlertTriangle size={14} />
      </div>

      {/* Hero */}
      <section className="promo__hero">
        <div className="promo__hero-content">
          <span className="promo__badge">🎉 Promoção de {mesAtual}</span>

          <h1 className="promo__title">
            Higienização com
            <span className="promo__title-highlight"> desconto especial</span>
            {' '}em {mesAtual}!
          </h1>

          <p className="promo__subtitle">
            Todo mês a Limpô oferece condições especiais para novos clientes.
            Este mês é a sua vez! Vagas limitadas — garanta a sua antes que acabe.
          </p>

          <div className="promo__offer-box">
            <div className="promo__offer-icon">🛋️</div>
            <div className="promo__offer-text">
              <strong>Promoção de {mesAtual}</strong>
              <span>Condições especiais para higienização de estofados e tapetes</span>
            </div>
            <div className="promo__offer-badge">OFERTA DO MÊS</div>
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
          Promoção de {mesAtual} encerra em:
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
          Restam apenas <strong>{vagas} vagas</strong> com desconto em {mesAtual}
        </div>
      </section>

      {/* Fotos antes/depois */}
      <section className="promo__photos">
        <h2 className="promo__section-title">Veja nossos resultados:</h2>
        <div className="promo__photos-carousel">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2.2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="promo__photo-card">
                  <div className={`promo__photo-badge promo__photo-badge--${photo.type}`}>
                    {photo.type === 'antes' ? 'ANTES' : 'DEPOIS'}
                  </div>
                  <img src={photo.src} alt={photo.type} className="promo__photo-img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="promo__includes">
        <h2 className="promo__section-title">O que está incluso na promoção:</h2>
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
          <span>Oferta de {mesAtual} válida somente até o fim do mês ou enquanto houver vagas!</span>
        </div>
        <h2 className="promo__final-title">Não perca a promoção de {mesAtual}!</h2>
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
