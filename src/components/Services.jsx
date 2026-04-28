import { useRef, useEffect } from 'react'
import { Sofa, Armchair, RectangleHorizontal, SprayCan, Droplets } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Services.css'

const services = [
  {
    icon: Sofa,
    title: 'Higienização de Sofás',
    description: 'Higienização profunda de sofás, removendo manchas, odores, ácaros e bactérias.',
  },
  {
    icon: Armchair,
    title: 'Higienização de Poltronas',
    description: 'Poltronas e cadeiras estofadas higienizadas com tratamento especializado para cada tecido.',
  },
  {
    icon: RectangleHorizontal,
    title: 'Higienização de Tapetes',
    description: 'Tapetes higienizados e revitalizados, com remoção de sujeira profunda e manchas.',
  },
  {
    icon: SprayCan,
    title: 'Higienização de Colchões',
    description: 'Eliminação de ácaros, fungos, bactérias e mau cheiro do seu colchão.',
  },
  {
    icon: Droplets,
    title: 'Impermeabilização',
    description: 'Proteção extra para seus estofados contra líquidos, manchas e sujeira do dia a dia.',
  },
]

function Services() {
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
    <section id="servicos" className="services" ref={sectionRef}>
      <div className="services__container">
        <div className="services__header">
          <span className="services__tag">Nossos Serviços</span>
          <h2 className="services__title">
            Especialistas em
            <span className="services__title-highlight"> higienização de estofados</span>
          </h2>
          <p className="services__subtitle">
            Higienização profissional que elimina sujeira, ácaros e bactérias dos seus estofados e tapetes.
          </p>
        </div>

        <div className="services__carousel">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true, enabled: false }}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <div className="service-card__icon">
                    <service.icon size={26} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Services
