import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { motion, AnimatePresence } from 'motion/react'

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
          color: '#e4e4e7'
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
  const { language } = useLanguage()
  const t = translations[language]
  const [activeTab, setActiveTab] = useState('proyectos')

  const getTechIcon = (tech) => {
    const customIcons = {
      'dragonflydb': '/dragonfly.svg',
      'coolify': '/coolify.svg',
      'reactnative': '/reactnative.svg'
    }
    return customIcons[tech] || `https://skillicons.dev/icons?i=${tech}`
  }


  const projects = [
    {
      title: "elmenu.app",
      category: t.portfolio.projects.elmenu.category,
      description: t.portfolio.projects.elmenu.description,
      image: "/logo2.webp",
      color: "#ff6b6b",
      link: "https://elmenu.app",
      technologies: ["nextjs", "react", "html", "css", "postgresql", "redis", "supabase", "coolify"]
    },
    {
      title: "tiendea.app",
      category: t.portfolio.projects.tiendea.category,
      description: t.portfolio.projects.tiendea.description,
      image: "/tiendeaLogo.png",
      color: "#10b981",
      link: "https://tiendea.app",
      technologies: ["nextjs", "react", "html", "tailwind", "typescript", "vercel", "supabase", "postgresql"]
    },
    {
      title: "bellumsoftware.com",
      category: t.portfolio.projects.bellum.category,
      description: t.portfolio.projects.bellum.description,
      image: "/logo.webp",
      color: "#8e44ad",
      link: "https://bellumsoftware.com",
      technologies: ["react"]
    },
    {
      title: "acuanto.app",
      category: t.portfolio.projects.dolar.category,
      description: t.portfolio.projects.dolar.description,
      image: "/logo3.png",
      color: "#4a90e2",
      link: "https://acuanto.app",
      technologies: ["nextjs", "tailwind", "typescript", "html", "dragonflydb", "coolify", "reactnative"]
    }
  ]

  const webPages = [
    {
      title: "josecestari.com",
      link: "https://josecestari.com/",
      technologies: ["astro", "html", "css"],
      image: "/jose.png",
      useLocalImage: true
    },
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
          <motion.button
            className={`tab-btn ${activeTab === 'proyectos' ? 'active' : ''}`}
            onClick={() => setActiveTab('proyectos')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {t.portfolio.relevantProjects}
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'Paginas web' ? 'active' : ''}`}
            onClick={() => setActiveTab('Paginas web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {t.portfolio.webPages}
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'habilidades' ? 'active' : ''}`}
            onClick={() => setActiveTab('habilidades')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {t.portfolio.stack}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'proyectos' && (
            <motion.div
              key="proyectos"
              className="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    className="project-card"
                    style={{
                      background: 'linear-gradient(135deg, #32314e 60%, #232946 100%)',
                      display: 'flex', 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      cursor: 'pointer', 
                      padding: '25px 30px', 
                      minHeight: '200px', 
                      gap: '30px'
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <div className="project-image-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '150px', height: '150px', flexShrink: 0}}>
                      <img src={project.image} alt={project.title} style={{
                        maxWidth: project.title === 'tiendea.app' ? '80px' : '100px',
                        maxHeight: project.title === 'tiendea.app' ? '80px' : '100px',
                        objectFit: 'contain',
                        filter: project.title === 'tiendea.app' ? 'brightness(0) invert(1)' : 'none'
                      }} />
                    </div>
                    <div className="project-content" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px'}}>
                      <div className="project-info" style={{textAlign: 'left', width: '100%'}}>
                        <p className="project-category" style={{marginBottom: '6px'}}>{project.category}</p>
                        <h3 className="project-title" style={{margin: '0 0 10px', padding: 0}}>
                          <span style={{color: '#e4e4e7', textDecoration: 'none', wordBreak: 'break-all'}}>{project.title}</span>
                        </h3>
                        {project.description && (
                          <p className="project-description" style={{
                            color: '#a0a0a0',
                            fontSize: '0.9rem',
                            margin: '0',
                            lineHeight: '1.6',
                            maxWidth: '100%'
                          }}>
                            {project.description}
                          </p>
                        )}
                      </div>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="project-technologies" style={{display: 'flex', gap: '8px', justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: '5px'}}>
                          {project.technologies.map((tech, techIndex) => (
                            <img
                              key={techIndex}
                              src={getTechIcon(tech)}
                              alt={tech}
                              style={{width: '32px', height: '32px', objectFit: 'contain'}}
                              onError={(e) => {
                                console.error(`Error loading icon for ${tech}:`, getTechIcon(tech))
                                e.target.style.display = 'none'
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          )}
          {activeTab === 'Paginas web' && (
            <motion.div
              key="paginas-web"
              className="web-pages-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {webPages.map((page, index) => (
                <motion.a
                  key={index}
                  href={page.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    className="web-page-card"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
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
                          padding: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '15px',
                          width: '120px',
                          height: '120px',
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
                          color: '#e4e4e7',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          wordBreak: 'break-word'
                        }}>
                          {page.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          )}
          {activeTab === 'habilidades' && (
            <motion.div
              key="habilidades"
              className="skills-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio