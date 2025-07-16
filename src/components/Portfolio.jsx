import { useState } from 'react'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('proyectos')

  const projects = [
    {
      title: "elmenu.app",
      category: "App para restaurantes (Venezuela)",
      image: "/logo2.png",
      color: "#ff6b6b",
      link: "https://elmenu.app"
    },
    {
      title: "bellumsoftware.com",
      category: "Agencia de desarrollo de páginas web",
      image: "/logo.png",
      color: "#8e44ad",
      link: "https://bellumsoftware.com"
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
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
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