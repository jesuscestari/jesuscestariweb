import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSwitcher />
        <Hero />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
