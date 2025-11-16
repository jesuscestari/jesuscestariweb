import prof from '../assets/prof.webp'
import { ArrowDownToLine, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { motion, useMotionValue, useTransform, animate, useScroll } from 'motion/react'
import { useEffect, useRef } from 'react'

const AnimatedCounter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, { duration })
    return controls.stop
  }, [count, value, duration])

  return <motion.h3 className="stat-number">{rounded}</motion.h3>
}

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const profileRef = useRef(null)

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
        >
          <img
            src={prof}
            alt="Jesus Cestari foto de perfil"
            className="profile-image"
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
            href="https://x.com/variansol"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            href="mailto:jesuscestari@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.div
          className="stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatedCounter value={3} duration={1.5} />
            <p>{t.hero.yearsExperience}</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatedCounter value={25} duration={2} />
            <p>{t.hero.projectsCompleted}</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href={language === 'es' ? "/CV_CESTARI_JESUS.pdf" : "/CESTARI_JESUS_EN.pdf"}
            className="btn btn-primary"
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {t.hero.cvButton} <ArrowDownToLine size={14} />
          </motion.a>
          <motion.a
            href={language === 'es'
              ? `https://api.whatsapp.com/send?phone=5491173672568&text=¡Hola!`
              : `sms:+5491173672568?body=Hello!`}
            className="btn btn-secondary"
            target={language === 'es' ? '_blank' : undefined}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {t.hero.contactButton} {language === 'es' ? <FaWhatsapp size={14} /> : <MessageSquare size={14} />}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero