// ABOUTME: Hero section with profile summary and key highlights
// ABOUTME: Features gradient background, profile image, and call-to-action buttons

const Hero = () => {
  const profileSummary = {
    name: "Jan Feddern",
    title: "Cloud Solution Architect | DevOps Engineer | Software Developer | Product Owner",
    description: "I design and operate scalable, secure cloud platforms, lead DevOps transformations, and bridge the gap between technology and business. With 15+ years of experience in insurance, automotive, finance, and manufacturing, I deliver cloud-native solutions that accelerate innovation and reduce costs.",
    highlights: [
      "Led multiple enterprise-scale cloud migrations (AWS, Azure, GCP)",
      "Expert in Kubernetes, Terraform, CI/CD automation", 
      "Combine technical depth & product ownership to align IT with business goals"
    ]
  }

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    // Create a temporary link for CV download
    const link = document.createElement('a')
    link.href = '/cv.pdf' // You'll need to add the actual CV file
    link.download = 'Jan_Feddern_CV.pdf'
    link.click()
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements - More subtle */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-white/3 rounded-full blur-3xl animate-pulse delay-300 opacity-40"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse delay-700 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-white animate-slide-in-left">
            <div className="mb-8">
              <h1 className="apple-title text-5xl lg:text-7xl mb-6 leading-tight opacity-0 animate-fade-in animate-delay-200">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  {profileSummary.name}
                </span>
              </h1>
              <h2 className="apple-body text-xl lg:text-2xl font-light text-white/80 mb-8 opacity-0 animate-fade-in animate-delay-300 leading-relaxed">
                {profileSummary.title}
              </h2>
            </div>

            <p className="apple-body text-xl text-white/90 mb-12 leading-relaxed max-w-2xl opacity-0 animate-fade-in animate-delay-400">
              {profileSummary.description}
            </p>

            {/* Key Highlights */}
            <div className="mb-12 space-y-4 opacity-0 animate-fade-in animate-delay-500">
              {profileSummary.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start text-white/90 animate-slide-in-left" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-300 rounded-full mr-4 mt-3"></div>
                  <span className="apple-body text-lg leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in animate-delay-700">
              <button
                onClick={scrollToContact}
                className="btn-primary px-10 py-4 text-lg font-medium shadow-2xl"
              >
                Let's Connect
              </button>
              <button
                onClick={downloadCV}
                className="btn-secondary px-10 py-4 text-lg font-medium border-2 border-white/30 backdrop-blur-sm"
              >
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-8 mt-12 opacity-0 animate-fade-in animate-delay-800">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-110 hover:translate-y-[-2px]"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-300 hover:text-white transition-colors duration-200 transform hover:scale-110"
                aria-label="Email Contact"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image/Visual */}
          <div className="relative animate-slide-up">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Placeholder for profile image - you can replace with actual image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-4 rounded-full border border-white/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Scroll to skills section"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero