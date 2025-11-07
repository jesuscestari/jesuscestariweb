import { useLanguage } from '../contexts/LanguageContext'
import { Languages } from 'lucide-react'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages size={20} />
      <span>{language === 'es' ? 'ES' : 'EN'}</span>
    </button>
  )
}

export default LanguageSwitcher

