const About = () => {
  const services = [
    {
      emoji: "👋",
      title: "Sobre mí",
      description: "Analista de Sistemas con 3+ años de experiencia en desarrollo web, especializado en React, Next.js y bases de datos."
    },
    {
      emoji: "⚛️",
      title: "Desarrollo Frontend",
      description: "Construyo interfaces modernas y responsivas usando React, Next.js, HTML, CSS y Tailwind."
    },
    {
      emoji: "🗄️",
      title: "Bases de Datos & Backend",
      description: "Experiencia en integración de sistemas, APIs y manejo de bases de datos como PostgreSQL, SQL y Supabase."
    },
    {
      emoji: "🚀",
      title: "DevOps & Deploy",
      description: "Automatizo despliegues y gestiono proyectos con Git, Docker, Coolify y Vercel para lograr entregas rápidas y seguras."
    },

  ]

  return (
    <section className="about">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="titulo">
                <span>{service.emoji}</span>
                {service.title}
              </h3>
              <p className="texto">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About