import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { motion } from 'motion/react'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="footer">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>{t.footer.copyright}</p>
      </motion.div>
    </footer>
  )
}

export default Footer