// ABOUTME: Skills section with categorized technology badges
// ABOUTME: Features animated skill cards with proficiency levels and searchable skills list

import { useState, useMemo } from 'react'
import { useTranslation } from '../hooks/useTranslation'

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const { t } = useTranslation()
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["AWS", "Azure", "GCP", "IBM Cloud", "Digital Ocean"]
    },
    {
      title: "Containers & Orchestration",
      icon: "🐳",
      skills: ["Docker", "Kubernetes", "OpenShift", "Istio", "Helm"]
    },
    {
      title: "Infrastructure as Code",
      icon: "⚡",
      skills: ["Terraform", "Ansible", "Pulumi", "CloudFormation", "ARM Templates"]
    },
    {
      title: "CI/CD & Automation",
      icon: "🔄",
      skills: ["GitHub Actions", "Jenkins", "GitLab CI", "Azure DevOps", "ArgoCD"]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java", "Kotlin", "Python", "Go", "JavaScript", "TypeScript", "Bash"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch", "MySQL"]
    },
    {
      title: "Monitoring & Observability",
      icon: "📊",
      skills: ["Prometheus", "Grafana", "Instana", "Datadog", "Splunk", "OpenTelemetry"]
    },
    {
      title: "Security & Compliance",
      icon: "🔒",
      skills: ["Wazuh", "SIEM", "Vault", "OWASP", "Compliance Frameworks", "IAM"]
    },
    {
      title: "Agile & Product",
      icon: "🎯",
      skills: ["Scrum", "Kanban", "Stakeholder Management", "Product Roadmaps", "JIRA"]
    }
  ]

  const topSkills = [
    { name: "AWS", level: 95, color: "from-orange-400 to-orange-600" },
    { name: "Kubernetes", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "Go", level: 85, color: "from-purple-400 to-purple-600" },
    { name: "Python", level: 80, color: "from-green-400 to-green-600" },
    { name: "DevOps", level: 94, color: "from-red-400 to-red-600" },
    { name: "Product Management", level: 85, color: "from-indigo-400 to-indigo-600" }
  ]

  // Comprehensive list of all skills/technologies
  const allSkills = [
    // Cloud Platforms
    "AWS", "Azure", "GCP", "IBM Cloud", "Digital Ocean",
    // Containers & Orchestration  
    "Docker", "Kubernetes", "OpenShift", "Istio", "Helm",
    // Infrastructure as Code
    "Terraform", "Ansible", "Pulumi", "CloudFormation", "ARM Templates",
    // CI/CD & Automation
    "GitHub Actions", "Jenkins", "GitLab CI", "Azure DevOps", "ArgoCD",
    // Programming Languages
    "Java", "Kotlin", "Python", "Go", "JavaScript", "TypeScript", "Bash", "PowerShell", "C#", "Node.js",
    // Databases
    "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch", "MySQL", "Oracle", "Cassandra",
    // Monitoring & Observability
    "Prometheus", "Grafana", "Instana", "Datadog", "New Relic", "Jaeger", "ELK Stack", "Splunk",
    // Security & Compliance
    "Wazuh", "SIEM", "Vault", "OWASP", "Compliance Frameworks", "IAM", "OAuth", "Falco",
    // Agile & Product
    "Scrum", "Kanban", "Stakeholder Management", "Product Roadmaps", "JIRA", "Confluence",
    // Web Technologies
    "React", "Angular", "HTML", "CSS", "REST APIs", "GraphQL", "Microservices",
    // Operating Systems
    "Linux", "Ubuntu", "CentOS", "RHEL", "Windows Server", "macOS",
    // Version Control
    "Git", "GitHub", "GitLab", "Bitbucket", "SVN",
    // Message Queues
    "Kafka", "RabbitMQ", "Amazon SQS", "Azure Service Bus",
    // Testing
    "Jest", "Pytest", "JUnit", "Selenium", "Cypress", "SonarQube",
    // Networking
    "VPC", "Load Balancers", "CDN", "DNS", "SSL/TLS", "VPN"
  ].sort() // Sort alphabetically

  // Search and pagination logic
  const filteredSkills = useMemo(() => {
    return allSkills.filter(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage)
  const currentSkills = filteredSkills.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Reset to first page when search changes
  const handleSearch = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="apple-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('skills.description')}
          </p>
        </div>

        {/* Top Skills with Progress Bars */}
        <div className="mb-24">
          <h3 className="apple-headline text-3xl text-gray-900 dark:text-white mb-12 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {topSkills.map((skill, index) => (
              <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center mb-4">
                  <span className="apple-body font-medium text-gray-900 dark:text-white text-lg">{skill.name}</span>
                  <span className="apple-body text-sm text-gray-600 dark:text-gray-400 font-medium">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="card p-8 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 opacity-70">{category.icon}</span>
                <h3 className="apple-headline text-xl text-gray-900 dark:text-white">
                  {t(`skills.categories.${category.title}`)}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="skill-badge opacity-0 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('skills.stats.experience')}</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('skills.stats.projects')}</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('skills.stats.technologies')}</div>
          </div>
        </div>

        {/* Searchable Skills Directory */}
        <div className="mt-24">
          <h3 className="apple-headline text-3xl text-white mb-12 text-center">{t('skills.directory.title')}</h3>
          <p className="apple-body text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            {t('skills.directory.description', { count: allSkills.length })}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={t('skills.directory.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all apple-body"
              />
            </div>
          </div>

          {/* Results Count */}
          {searchTerm && (
            <div className="text-center mb-6">
              <p className="apple-body text-gray-400">
                {t('skills.directory.resultsFound', {
                  count: filteredSkills.length,
                  type: filteredSkills.length === 1 ? t('skills.directory.technology') : t('skills.directory.technologies')
                })}
                {searchTerm && ` ${t('skills.directory.resultsFor', { term: searchTerm })}`}
              </p>
            </div>
          )}

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {currentSkills.map((skill, index) => (
              <div 
                key={skill}
                className="skill-badge justify-center opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-800/60 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/60 transition-colors apple-body"
              >
                {t('skills.directory.pagination.previous')}
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i
                  if (pageNum > totalPages) return null
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg transition-colors apple-body ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-800/60 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/60 transition-colors apple-body"
              >
                {t('skills.directory.pagination.next')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills