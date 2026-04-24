import { Heart, AtSign } from 'lucide-react'
import TransparentLogo from './TransparentLogo'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <TransparentLogo src="/logo-limpo.png" alt="Limpô" className="footer__logo" />
            <p className="footer__desc">
              Especialistas em higienização de estofados e tapetes.
              Sua satisfação é nossa prioridade.
            </p>
          </div>

          <div className="footer__links">
            <h4>Navegação</h4>
            <a href="#hero">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#resultados">Resultados</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer__links">
            <h4>Serviços</h4>
            <span>Higienização de Sofás</span>
            <span>Higienização de Poltronas</span>
            <span>Higienização de Tapetes</span>
            <span>Impermeabilização</span>
          </div>

          <div className="footer__links">
            <h4>Redes Sociais</h4>
            <a href="https://www.instagram.com/limpo.solucoes/" target="_blank" rel="noopener noreferrer" className="footer__social">
              <AtSign size={16} />
              Instagram
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Limpô. Todos os direitos reservados.
          </p>
          <p className="footer__made">
            Feito com <Heart size={14} className="footer__heart" /> para você
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
