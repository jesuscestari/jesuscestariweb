import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer