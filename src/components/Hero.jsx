import prof from '../assets/prof.jpg'
import { ArrowDownToLine } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <img 
          src={prof} 
          alt="Marcial Sartori" 
          className="profile-image"
        />
        <h1>Jesus Cestari</h1>
        <h2>Analista de Sistemas.</h2>
        
        <div className="social-links">  
          <a href="https://www.linkedin.com/in/jesuscestari/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jesuscestari" target="_blank" rel="noopener noreferrer">
           <FaGithub />
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <h3 className="stat-number">+3</h3>
            <p>Años de <br /> experiencia</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">+25</h3>
            <p>Proyectos <br /> completados</p>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="/CV_CESTARI_JESUS.pdf" className="btn btn-primary" target="_blank">
            CV <ArrowDownToLine />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5491173672568&text=¡Hola!" className="btn btn-secondary" target="_blank">
            ¡Hablemos! <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero