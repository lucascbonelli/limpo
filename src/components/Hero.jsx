import { Sparkles, ArrowRight, Star } from 'lucide-react'
import TransparentLogo from './TransparentLogo'
import './Hero.css'

function Hero() {
  const whatsappUrl = "https://wa.me/5547991484425?text=Olá! Gostaria de solicitar um orçamento para higienização de estofados."

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="hero__particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }} />
          ))}
        </div>
      </div>

      <div className="hero__container">
        <div className="hero__visual">
          <div className="hero__logo-glow" />
          <div className="hero__logo-wrapper">
            <TransparentLogo src="/logo-limpo.png" alt="Limpô" className="hero__logo" />
          </div>
        </div>

        <div className="hero__content">
          <div className="hero__badge">
            <Sparkles size={14} />
            <span>Higienização de Estofados</span>
          </div>

          <h1 className="hero__title">
            Estofados
            <span className="hero__title-highlight"> higienizados</span>
            {' '}como novos
          </h1>

          <p className="hero__subtitle">
            Especialistas em higienização de estofados e tapetes.
            Eliminamos ácaros, bactérias e manchas com resultados visíveis.
          </p>

          <div className="hero__actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--primary">
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            <a href="#resultados" className="hero__btn hero__btn--secondary">
              Ver Resultados
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-number">500+</div>
              <div className="hero__stat-label">Serviços</div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <div className="hero__stat-number">
                <Star size={14} className="hero__star" /> 5.0
              </div>
              <div className="hero__stat-label">Avaliação</div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <div className="hero__stat-number">100%</div>
              <div className="hero__stat-label">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
