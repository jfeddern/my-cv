// ABOUTME: Custom hook for accessing translations with current language
// ABOUTME: Provides translation function with path-based access to translation strings

import { useLanguage } from '../contexts/LanguageContext'
import translations from '../translations'

export const useTranslation = () => {
  const { currentLanguage } = useLanguage()
  
  const t = (path, replacements = {}) => {
    const keys = path.split('.')
    let value = translations[currentLanguage]
    
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key]
      } else {
        console.warn(`Translation not found for path: ${path} in language: ${currentLanguage}`)
        // Fallback to English if translation is missing
        value = translations.en
        for (const key of keys) {
          if (value && typeof value === 'object') {
            value = value[key]
          } else {
            return path // Return the path if translation is completely missing
          }
        }
        break
      }
    }
    
    // Replace placeholders like {count}, {term} etc.
    if (typeof value === 'string' && Object.keys(replacements).length > 0) {
      return value.replace(/\{(\w+)\}/g, (match, key) => {
        return replacements[key] !== undefined ? replacements[key] : match
      })
    }
    
    return value || path
  }
  
  return { t, currentLanguage }
}