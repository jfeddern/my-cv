// ABOUTME: Professional experience timeline with impact metrics
// ABOUTME: Features visual timeline with expandable job details

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "DevOps Engineer & Cloud Architect",
      company: "Automotive Enterprise",
      period: "October 2022 – Present",
      location: "Germany",
      type: "Full-time",
      description: "Built and operated a new AWS-based cloud platform during a corporate split, enabling seamless migration of 100+ applications.",
      achievements: [
        "Designed & migrated complete platform → reduced downtime risks to 0 hours during migration",
        "Automated infrastructure provisioning with Terraform & Ansible → saved 1000+ manual hours annually", 
        "Built CI/CD pipelines (GitHub Actions, Jenkins) → reduced deployment cycle from days to hours",
        "Implemented monitoring & SIEM (Grafana, Wazuh, Instana) → improved incident detection & compliance",
        "Developed custom tooling (Go CLI, Prometheus Exporter) → increased developer productivity"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Go", "Prometheus", "Grafana", "Wazuh", "Instana"],
      highlights: {
        impact: "Zero downtime migration",
        scale: "100+ applications",
        savings: "1000+ hours annually"
      }
    },
    {
      id: 2, 
      title: "Senior Cloud Engineer & Product Owner",
      company: "Financial Services Corp",
      period: "January 2020 – September 2022",
      location: "Germany",
      type: "Full-time",
      description: "Led cloud transformation initiatives and product strategy for core banking infrastructure, managing a team of 8 engineers.",
      achievements: [
        "Architected multi-cloud strategy (AWS, Azure) → reduced vendor lock-in and costs by 30%",
        "Led microservices migration → improved system scalability and reduced response times by 60%",
        "Implemented GitOps workflows → increased deployment frequency from monthly to daily",
        "Established SRE practices → achieved 99.9% uptime SLA for critical systems",
        "Managed product roadmap → delivered 15+ features aligned with business objectives"
      ],
      technologies: ["AWS", "Azure", "Kubernetes", "Istio", "ArgoCD", "Java", "Spring Boot", "MongoDB", "PostgreSQL", "Kafka"],
      highlights: {
        impact: "99.9% uptime SLA",
        scale: "Team of 8 engineers",
        savings: "30% cost reduction"
      }
    },
    {
      id: 3,
      title: "DevOps Consultant",
      company: "Manufacturing Solutions GmbH",
      period: "March 2018 – December 2019", 
      location: "Germany",
      type: "Consulting",
      description: "Consulted for multiple manufacturing clients on DevOps transformation and cloud adoption strategies.",
      achievements: [
        "Designed CI/CD pipelines for 5 clients → reduced time-to-market by 40%",
        "Implemented infrastructure automation → cut provisioning time from weeks to hours",
        "Conducted DevOps training → upskilled 50+ developers across client organizations",
        "Established monitoring solutions → reduced MTTR from hours to minutes",
        "Led cloud migration projects → successfully migrated 20+ legacy applications"
      ],
      technologies: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "Python", "Bash", "Nagios", "ELK Stack"],
      highlights: {
        impact: "40% faster time-to-market",
        scale: "5 client organizations",
        training: "50+ developers upskilled"
      }
    },
    {
      id: 4,
      title: "Software Engineer & IT Specialist",
      company: "Insurance Innovation Ltd",
      period: "September 2015 – February 2018",
      location: "Germany", 
      type: "Full-time",
      description: "Developed and maintained insurance software solutions while leading IT infrastructure modernization efforts.",
      achievements: [
        "Architected microservices platform → improved system modularity and maintainability",
        "Implemented automated testing → increased code coverage from 30% to 85%",
        "Led database optimization → improved query performance by 300%",
        "Designed API gateway → centralized security and reduced integration complexity",
        "Mentored junior developers → established coding standards and best practices"
      ],
      technologies: ["Java", "Spring Framework", "MySQL", "Oracle", "REST APIs", "Maven", "Git", "Linux"],
      highlights: {
        impact: "300% query performance improvement",
        quality: "85% code coverage",
        leadership: "Mentored junior team"
      }
    }
  ]

  const education = [
    {
      degree: "B.Sc. Wirtschaftsinformatik",
      institution: "University of Applied Sciences",
      period: "2012 – 2015",
      description: "Business Information Systems with focus on software engineering and business processes"
    },
    {
      degree: "Fachinformatiker, Anwendungsentwicklung",
      institution: "Vocational Training", 
      period: "2010 – 2012",
      description: "IT Specialist in Application Development - German dual education system"
    }
  ]

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 to-purple-950/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="section-title">Professional Experience</h2>
          <p className="apple-body text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            15+ years of driving digital transformation across diverse industries
          </p>
        </div>

        {/* Compact Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="card p-8 animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="apple-headline text-xl text-white">{exp.title}</h3>
                    <span className="skill-badge text-xs">
                      {exp.type}
                    </span>
                  </div>
                  <div className="apple-body text-lg text-blue-400 mb-1">
                    {exp.company}
                  </div>
                  <div className="apple-body text-sm text-gray-400 flex items-center">
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                {/* Key Highlights - Moved to header */}
                <div className="grid grid-cols-3 gap-4 mt-4 lg:mt-0 lg:ml-8">
                  {Object.entries(exp.highlights).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="apple-headline text-lg text-blue-400">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="apple-body text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements - Compact */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="apple-body font-medium text-white mb-3 text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <div className="flex-shrink-0 w-1 h-1 bg-blue-400 rounded-full mt-2 mr-3"></div>
                        <span className="apple-body leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements.length > 3 && (
                    <button className="apple-body text-xs text-blue-400 mt-2 hover:text-blue-300">
                      +{exp.achievements.length - 3} more achievements
                    </button>
                  )}
                </div>
                
                <div>
                  <h4 className="apple-body font-medium text-white mb-3 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="skill-badge text-xs">
                        +{exp.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="apple-headline text-2xl text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="card p-6 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <h4 className="apple-headline text-lg text-white mb-2">{edu.degree}</h4>
                <div className="apple-body text-blue-400 font-medium mb-1">{edu.institution}</div>
                <div className="apple-body text-sm text-gray-400 mb-3">{edu.period}</div>
                <p className="apple-body text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience