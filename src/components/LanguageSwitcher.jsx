// ABOUTME: Language switcher component with dropdown menu
// ABOUTME: Provides flag-based language selection with smooth transitions

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = ({ isMobile = false }) => {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200
          ${isMobile 
            ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left' 
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 backdrop-blur-sm'
          }
        `}
        aria-label="Select language"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className={`font-medium ${isMobile ? 'apple-body' : 'text-sm'}`}>
          {currentLang?.name}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute z-50 mt-2 min-w-[140px] bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden
          ${isMobile ? 'left-0' : 'right-0'}
          animate-fade-in
        `}>
          {supportedLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`
                w-full px-4 py-3 text-left flex items-center space-x-3 transition-colors duration-150
                hover:bg-gray-50 dark:hover:bg-gray-700
                ${currentLanguage === language.code 
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' 
                  : 'text-gray-700 dark:text-gray-300'
                }
              `}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="apple-body">{language.name}</span>
              {currentLanguage === language.code && (
                <svg className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher