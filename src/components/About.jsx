import { User, Code, Database, Rocket } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: User,
      title: t.about.aboutMe.title,
      description: t.about.aboutMe.description
    },
    {
      icon: Code,
      title: t.about.frontend.title,
      description: t.about.frontend.description
    },
    {
      icon: Database,
      title: t.about.backend.title,
      description: t.about.backend.description
    },
    {
      icon: Rocket,
      title: t.about.devops.title,
      description: t.about.devops.description
    },

  ]

  return (
    <section className="about">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <h3 className="titulo">
                  <span><IconComponent size={24} color="#8b8ac0" /></span>
                  {service.title}
                </h3>
                <p className="texto">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About