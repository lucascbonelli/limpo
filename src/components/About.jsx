import { Shield, Clock, Heart, Award } from 'lucide-react'
import TransparentLogo from './TransparentLogo'
import './About.css'

const features = [
  { icon: Shield, title: 'Confiança', desc: 'Profissionais treinados e comprometidos com a qualidade.' },
  { icon: Clock, title: 'Pontualidade', desc: 'Cumprimos prazos e horários combinados.' },
  { icon: Heart, title: 'Dedicação', desc: 'Cada serviço é feito com carinho e atenção aos detalhes.' },
  { icon: Award, title: 'Qualidade', desc: 'Produtos profissionais e técnicas avançadas.' },
]

function About() {
  return (
    <section id="sobre" className="about">
      <div className="about__container">
        <div className="about__image">
          <div className="about__image-wrapper">
            <img src="/fotos/produtos-de-limpeza.jpeg" alt="Produtos de limpeza profissional" className="about__img" />
          </div>
        </div>

        <div className="about__content">
          <span className="about__tag">Sobre Nós</span>
          <h2 className="about__title">
            Por que escolher a
            <span className="about__title-highlight"> Limpô</span>?
          </h2>
          <p className="about__text">
            Somos especialistas em higienização de estofados e tapetes.
            Nossa missão é devolver a saúde e a beleza dos seus móveis,
            eliminando ácaros, bactérias e sujeira profunda com produtos profissionais.
          </p>

          <div className="about__features">
            {features.map((feat, i) => (
              <div key={i} className="about__feature">
                <div className="about__feature-icon">
                  <feat.icon size={20} />
                </div>
                <div>
                  <h4 className="about__feature-title">{feat.title}</h4>
                  <p className="about__feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
