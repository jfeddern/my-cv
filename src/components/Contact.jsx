// ABOUTME: Contact section with contact information and social links
// ABOUTME: Provides multiple ways to connect and get in touch

import { useTranslation } from '../hooks/useTranslation'

const Contact = () => {
  const { t } = useTranslation()

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('contact.info.email'),
      value: "jan.feddern@gmx.net",
      href: "mailto:jan.feddern@gmx.net"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: t('contact.info.github'),
      value: "/jfeddern",
      href: "https://github.com/jfeddern"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('contact.info.location'),
      value: "Germany/Spain",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="apple-body text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h3 className="apple-headline text-2xl text-white mb-8">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="apple-body font-medium text-white">{method.title}</h4>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="apple-body text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="apple-body text-gray-400">{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="card p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500/20">
              <h3 className="apple-headline text-2xl mb-4">{t('contact.cta.title')}</h3>
              <p className="apple-body mb-8 text-blue-100 leading-relaxed">
                {t('contact.cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  disabled
                  className="flex-1 bg-gray-500/30 text-gray-400 font-semibold py-4 px-6 rounded-lg cursor-not-allowed opacity-60 text-center apple-body"
                >
                  {t('contact.cta.downloadCV')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact