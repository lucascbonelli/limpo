import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5547991484425?text=Olá! Gostaria de saber mais sobre higienização de estofados."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
    >
      <div className="whatsapp-float__pulse" />
      <MessageCircle size={28} />
    </a>
  )
}

export default WhatsAppButton
