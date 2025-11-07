import { useState } from 'react'
import { Sparkles } from 'lucide-react'

import desordenados from '../assets/desordenados.png'

const FaviconImage = ({ url, title, fallbackImage, useLocalImage, useLucideIcon }) => {
  const [currentSrc, setCurrentSrc] = useState(() => {
    // Si se especifica usar icono de Lucide, retornar null para renderizar el icono
    if (useLucideIcon) {
      return null
    }
    // Si se especifica usar imagen local, usarla directamente
    if (useLocalImage && fallbackImage) {
      return fallbackImage
    }
    try {
      const domain = new URL(url).hostname.replace('www.', '')
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    } catch {
      return fallbackImage || '/favicon.svg'
    }
  })

  const handleError = () => {
    try {
      const domain = new URL(url).hostname.replace('www.', '')
      const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url
      
      // Intentar diferentes métodos
      const fallbacks = [
        `https://icons.duckduckgo.com/ip3/${domain}.ico`,
        `${baseUrl}/favicon.ico`,
        `${baseUrl}/favicon.png`,
        `https://${domain}/favicon.ico`,
        `https://${domain}/favicon.png`,
        fallbackImage || '/favicon.svg'
      ]
      
      const currentIndex = fallbacks.indexOf(currentSrc)
      const nextIndex = currentIndex < fallbacks.length - 1 ? currentIndex + 1 : fallbacks.length - 1
      setCurrentSrc(fallbacks[nextIndex])
    } catch {
      setCurrentSrc(fallbackImage || '/favicon.svg')
    }
  }

  // Si se usa icono de Lucide, renderizar el componente
  if (useLucideIcon) {
    return (
      <Sparkles 
        size={40}
        style={{
          color: '#fff'
        }}
      />
    )
  }

  return (
    <img 
      src={currentSrc} 
      alt={title} 
      onError={handleError}
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        width: '100%',
        height: '100%'
      }} 
    />
  )
}

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

  const webPages = [
    {
      title: "Arquitectura emocional",
      link: "https://floraguerra.vercel.app/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"],
      useLucideIcon: true
    },
    {
      title: "Gaetano Seguros",
      link: "https://gaetanoseguros.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "Takes by Us",
      link: "https://www.takesbyus.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "Conterra Desarrollos",
      link: "https://conterradesarrollos.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "elmenu.app",
      link: "https://elmenu.app/",
      technologies: ["nextjs", "react", "html", "css", "postgresql", "supabase"]
    },
    {
      title: "Sitio de Bodas",
      link: "https://boda-khaki.vercel.app/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"],
      useLucideIcon: true
    },
    {
      title: "Solo Generadores",
      link: "https://www.sologeneradores.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "Perfumes Ivilara",
      link: "https://www.perfumesivilara.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "Clínica OE",
      link: "https://clinicaoe.com.ar/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"],
      useLucideIcon: true
    },
    {
      title: "English by Clau Academy",
      link: "https://www.englishbyclauacademy.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"],
      useLucideIcon: true
    },
    {
      title: "Select Structural",
      link: "https://www.selectstructural.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "Lenerzi",
      link: "https://www.lenerzi.com/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"]
    },
    {
      title: "Desordenados",
      image: desordenados,
      link: "https://desordenados.vercel.app/",
      technologies: ["nextjs", "react", "html", "css", "tailwind"],
      useLocalImage: true
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
            className={`tab-btn ${activeTab === 'Paginas web' ? 'active' : ''}`}
            onClick={() => setActiveTab('Paginas web')}
          >
            Paginas web
          </button>
          <button 
            className={`tab-btn ${activeTab === 'habilidades' ? 'active' : ''}`}
            onClick={() => setActiveTab('habilidades')}
          >
            Stack
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

        {activeTab === 'Paginas web' && (
          <div className="web-pages-grid">
            {webPages.map((page, index) => (
              <a
                key={index}
                href={page.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="web-page-card">
                  <div style={{
                    background: 'linear-gradient(135deg, #32314e 60%, #232946 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 15px',
                    height: '100%'
                  }}>
                    <div style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%'
                    }}>
                      <div style={{
                        background: '#181c24',
                        borderRadius: '12px',
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        width: '80px',
                        height: '80px',
                        overflow: 'hidden'
                      }}>
                        <FaviconImage 
                          url={page.link} 
                          title={page.title}
                          fallbackImage={page.image}
                          useLocalImage={page.useLocalImage}
                          useLucideIcon={page.useLucideIcon}
                        />
                      </div>
                      <h3 className="web-page-title" style={{
                        margin: 0,
                        padding: 0,
                        color: '#fff',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        wordBreak: 'break-word'
                      }}>
                        {page.title}
                      </h3>
                    </div>
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