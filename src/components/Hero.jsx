import prof from '../assets/prof.webp'
import avatar from '/avatar.webp'
import { ArrowDownToLine, Mail } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { motion, useTransform, useScroll } from 'motion/react'
import { useRef, useState } from 'react'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const profileRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: profileRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          ref={profileRef}
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ y }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={avatar}
            alt="Jesus Cestari avatar"
            className="profile-image profile-image-default"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={prof}
            alt="Jesus Cestari foto de perfil"
            className="profile-image profile-image-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t.hero.subtitle}
        </motion.h2>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/jesuscestari/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/jesuscestari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/jesuscestari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://x.com/variansol"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaXTwitter />
          </motion.a>
        </motion.div>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href={language === 'es' ? "/CV_CESTARI_JESUS.pdf" : "https://www.self.so/jesuscestari"}
            className="btn btn-primary"
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {t.hero.cvButton} <ArrowDownToLine size={14} />
          </motion.a>
          <motion.a
            href="mailto:hi@jesuscestari.com"
            className="btn btn-secondary"
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {t.hero.contactButton} <Mail size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero