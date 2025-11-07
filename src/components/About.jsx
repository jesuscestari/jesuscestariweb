import { User, Code, Database, Rocket } from 'lucide-react'

const About = () => {
  const services = [
    {
      icon: User,
      title: "Sobre mí",
      description: "Analista de Sistemas con 3 años de experiencia en desarrollo web, especializado en React, Next.js y bases de datos."
    },
    {
      icon: Code,
      title: "Desarrollo Frontend",
      description: "Construyo interfaces modernas y responsivas usando React, Next.js, HTML, CSS, Tailwind, shadcn/ui y TypeScript. Aprendiendo Astro y React Native."
    },
    {
      icon: Database,
      title: "Bases de Datos & Backend",
      description: "Experiencia en integración de sistemas, APIs y manejo de bases de datos como PostgreSQL, SQL y Redis."
    },
    {
      icon: Rocket,
      title: "DevOps & Deploy",
      description: "Automatizo despliegues y gestiono proyectos con Git, Docker, Coolify, Dockploy, Vercel y Netlify para lograr entregas rápidas y seguras."
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