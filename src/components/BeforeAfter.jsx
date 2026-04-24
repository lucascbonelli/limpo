import { useRef, useEffect } from 'react'
import { Camera } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './BeforeAfter.css'

const photos = [
  { src: '/fotos/foto-1-antes.jpeg', type: 'antes', label: 'Estofado - Antes' },
  { src: '/fotos/foto-1-depois.jpeg', type: 'depois', label: 'Estofado - Depois' },
  { src: '/fotos/foto-2-antes.jpeg', type: 'antes', label: 'Estofado - Antes' },
  { src: '/fotos/foto-2-depois.jpeg', type: 'depois', label: 'Estofado - Depois' },
  { src: '/fotos/foto-3-antes.jpeg', type: 'antes', label: 'Estofado - Antes' },
  { src: '/fotos/foto-3-depois.jpeg', type: 'depois', label: 'Estofado - Depois' },
  { src: '/fotos/foto-4-antes.jpeg', type: 'antes', label: 'Estofado - Antes' },
  { src: '/fotos/foto-5-depois.jpeg', type: 'depois', label: 'Estofado - Depois' },
]

function BeforeAfter() {
  const swiperRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && swiperRef.current) {
          setTimeout(() => {
            swiperRef.current.autoplay.start()
          }, 1000)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultados" className="results" ref={sectionRef}>
      <div className="results__container">
        <div className="results__header">
          <span className="results__tag">
            <Camera size={14} />
            Resultados Reais
          </span>
          <h2 className="results__title">
            Veja a
            <span className="results__title-highlight"> transformação</span>
          </h2>
          <p className="results__subtitle">
            Deslize para ver o antes e depois das nossas higienizações.
          </p>
        </div>

        <div className="results__carousel">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: true, enabled: false }}
            loop={true}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.3, centeredSlides: false },
              1024: { slidesPerView: 3.5, centeredSlides: false },
            }}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="result-card">
                  <div className={`result-card__badge result-card__badge--${photo.type}`}>
                    {photo.type === 'antes' ? 'ANTES' : 'DEPOIS'}
                  </div>
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="result-card__img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="result-card__placeholder" style={{ display: 'none' }}>
                    <Camera size={24} />
                    <span>{photo.label}</span>
                  </div>
                  <div className="result-card__label">{photo.label}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="results__cta">
          <p>Quer ver seu estofado assim?</p>
          <a
            href="https://wa.me/554791458038?text=Olá! Vi os resultados no site e gostaria de agendar uma higienização!"
            target="_blank"
            rel="noopener noreferrer"
            className="results__btn"
          >
            Agendar Higienização
          </a>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
