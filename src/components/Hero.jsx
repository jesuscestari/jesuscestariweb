import prof from '../assets/prof.webp'
import { ArrowDownToLine, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="hero">
      <div className="container">
        <div className="profile-image-container">
        <img 
          src={prof} 
          alt="Jesus Cestari foto de perfil" 
          className="profile-image"
        />
        </div>
        <h1>{t.hero.title}</h1>
        <h2>{t.hero.subtitle}</h2>
        
        <div className="social-links">  
          <a href="https://www.linkedin.com/in/jesuscestari/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jesuscestari" target="_blank" rel="noopener noreferrer">
           <FaGithub />
          </a>
          <a href="https://x.com/variansol" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="mailto:jesuscestari@proton.me" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
         
        </div>

        <div className="stats">
          <div className="stat">
            <h3 className="stat-number">3</h3>
            <p>{t.hero.yearsExperience}</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">25</h3>
            <p>{t.hero.projectsCompleted}</p>
          </div>
        </div>

        <div className="cta-buttons">
          <a href={language === 'es' ? "/CV_CESTARI_JESUS.pdf" : "/CESTARI_JESUS_EN.pdf"} className="btn btn-primary" target="_blank">
            {t.hero.cvButton} <ArrowDownToLine size={14} />
          </a>
          <a 
            href={language === 'es' 
              ? `https://api.whatsapp.com/send?phone=5491173672568&text=¡Hola!` 
              : `sms:+5491173672568?body=Hello!`} 
            className="btn btn-secondary" 
            target={language === 'es' ? '_blank' : undefined}
          >
            {t.hero.contactButton} {language === 'es' ? <FaWhatsapp size={14} /> : <MessageSquare size={14} />}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero