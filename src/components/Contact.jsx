import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import TransparentLogo from './TransparentLogo'
import './Contact.css'

function Contact() {
  const whatsappUrl = "https://wa.me/5547991484425?text=Olá! Gostaria de agendar uma higienização de estofados."

  return (
    <section id="contato" className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <span className="contact__tag">Contato</span>
          <h2 className="contact__title">
            Seu estofado precisa de uma
            <span className="contact__title-highlight"> higienização</span>?
          </h2>
          <p className="contact__subtitle">
            Entre em contato pelo WhatsApp e solicite seu orçamento gratuito.
            Respondemos rapidamente!
          </p>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__whatsapp-btn">
            <MessageCircle size={22} />
            Chamar no WhatsApp
          </a>

          <div className="contact__info">
            <div className="contact__info-item">
              <Phone size={18} />
              <span>(47) 9145-8038</span>
            </div>
            <div className="contact__info-item">
              <MapPin size={18} />
              <span>Blumenau e região</span>
            </div>
            <div className="contact__info-item">
              <Clock size={18} />
              <span>Seg - Sáb: 7h às 18h</span>
            </div>
          </div>
        </div>

        <div className="contact__card">
          <div className="contact__card-inner">
            <div className="contact__card-glow" />
            <TransparentLogo src="/logo-limpo.png" alt="Limpô" className="contact__card-logo" />
            <h3>Limpô</h3>
            <p>Especialistas em Higienização de Estofados</p>
            <div className="contact__card-divider" />
            <p className="contact__card-text">
              Solicite seu orçamento sem compromisso.
              Atendimento rápido e personalizado.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__card-btn">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
