import { useState } from 'react'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('proyectos')

  const getTechIcon = (tech) => {
    const customIcons = {
      'dragonflydb': '/dragonfly.svg',
      'coolify': '/coolify.svg'
    }
    return customIcons[tech] || `https://skillicons.dev/icons?i=${tech}`
  }

  const projects = [
    {
      title: "elmenu.app",
      category: "App para restaurantes (Venezuela)",
      image: "/logo2.webp",
      color: "#ff6b6b",
      link: "https://elmenu.app",
      technologies: ["nextjs", "react", "html", "css", "postgresql", "redis", "supabase", "coolify"]
    },
    {
      title: "bellumsoftware.com",
      category: "Agencia de desarrollo de páginas web",
      image: "/logo.webp",
      color: "#8e44ad",
      link: "https://bellumsoftware.com",
      technologies: ["react"]
    },
    {
      title: "dolardehoy.app",
      category: "Aplicación de cotización del dólar",
      image: "/logo3.png",
      color: "#4a90e2",
      link: "https://dolardehoy.app",
      technologies: ["nextjs", "tailwind", "typescript", "html", "css", "dragonflydb", "coolify"]
    }
  ]

  const skills = [
    "React", "Next.js", "HTML", "CSS", "Tailwind", "Vercel", "Git", "Docker", "Linux", "PostgreSQL", "Supabase", "JavaScript", "TypeScript", "Node.js"
  ]

  return (
    <section className="portfolio">
      <div className="container">
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'proyectos' ? 'active' : ''}`}
            onClick={() => setActiveTab('proyectos')}
          >
            Proyectos relevantes
          </button>
          <button 
            className={`tab-btn ${activeTab === 'habilidades' ? 'active' : ''}`}
            onClick={() => setActiveTab('habilidades')}
          >
            Habilidades
          </button>
        </div>

        {activeTab === 'proyectos' && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="project-card" style={{
                  background: 'linear-gradient(135deg, #32314e 60%, #232946 100%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '20px 10px'}}>
                  <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{background: '#181c24', borderRadius: '12px', padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', width: '90px', height: '90px'}}>
                      <img src={project.image} alt={project.title} style={{maxWidth: '60px', maxHeight: '60px', objectFit: 'contain'}} />
                    </div>
                    <div className="project-info" style={{textAlign: 'center'}}>
                      <p className="project-category">{project.category}</p>
                      <h3 className="project-title" style={{margin: 0, padding: 0}}>
                        <span style={{color: '#fff', textDecoration: 'none', wordBreak: 'break-all'}}>{project.title}</span>
                      </h3>
                    </div>
                  </div>
                  {project.technologies && project.technologies.length > 0 && (
                    <div style={{display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px', paddingBottom: '10px'}}>
                      {project.technologies.map((tech, techIndex) => (
                        <img
                          key={techIndex}
                          src={getTechIcon(tech)}
                          alt={tech}
                          style={{width: '32px', height: '32px', objectFit: 'contain'}}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {activeTab === 'habilidades' && (
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio