import { User, Code, Database, Rocket } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { motion } from 'motion/react'

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
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <h3 className="titulo">
                  <span><IconComponent size={24} color="#8b8ac0" /></span>
                  {service.title}
                </h3>
                <p className="texto">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About