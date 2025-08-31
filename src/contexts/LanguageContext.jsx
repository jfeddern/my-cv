// ABOUTME: Language context for managing multi-language support
// ABOUTME: Provides language state and translation functions

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Check for saved language preference or default to English
    return localStorage.getItem('preferred-language') || 'en'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', currentLanguage)
  }, [currentLanguage])

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
  }

  const value = {
    currentLanguage,
    changeLanguage,
    supportedLanguages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'es', name: 'Español', flag: '🇪🇸' }
    ]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext