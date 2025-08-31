// ABOUTME: Featured projects showcase with interactive cards
// ABOUTME: Highlights key achievements and technical implementations

import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Enterprise Cloud Migration Platform",
      category: "Cloud Architecture",
      description: "Led the design and implementation of a comprehensive cloud migration platform during a major corporate restructuring, enabling seamless transfer of 100+ applications.",
      detailedDescription: "During a critical corporate split, I architected and implemented a complete cloud migration platform from scratch. The project involved designing resilient infrastructure, implementing zero-downtime migration strategies, and building comprehensive monitoring solutions. The platform successfully handled the migration of over 100 applications with zero business impact.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Prometheus", "Grafana"],
      achievements: [
        "Zero downtime during migration of critical business applications",
        "Automated infrastructure provisioning reduced setup time by 95%",
        "Comprehensive monitoring solution with 99.9% uptime SLA",
        "Cost optimization strategies reduced cloud spend by 25%"
      ],
      metrics: {
        "Applications Migrated": "100+",
        "Downtime": "0 hours",
        "Time Saved": "1000+ hours/year",
        "Cost Reduction": "25%"
      },
      image: "🚀",
      status: "Completed",
      year: "2022-2023"
    },
    {
      id: 2,
      title: "Multi-Cloud DevOps Platform",
      category: "DevOps Transformation",
      description: "Built a unified DevOps platform supporting AWS, Azure, and GCP, enabling consistent deployment pipelines across multiple cloud providers.",
      detailedDescription: "Designed and implemented a multi-cloud DevOps platform that standardized deployment processes across AWS, Azure, and GCP. The solution included custom tooling for CI/CD pipeline orchestration, infrastructure as code templates, and comprehensive security scanning integration.",
      technologies: ["Docker", "Kubernetes", "GitLab CI", "Helm", "Vault", "Terraform", "Python", "Go"],
      achievements: [
        "Unified deployment process across 3 cloud providers",
        "Reduced deployment time from hours to minutes",
        "Integrated security scanning preventing 50+ vulnerabilities",
        "Enabled self-service infrastructure for development teams"
      ],
      metrics: {
        "Cloud Providers": "3",
        "Deployment Time": "< 10 minutes",
        "Vulnerabilities Prevented": "50+",
        "Teams Enabled": "15+"
      },
      image: "⚡",
      status: "Completed", 
      year: "2021-2022"
    },
    {
      id: 3,
      title: "Microservices Observability Suite",
      category: "Monitoring & Operations",
      description: "Implemented comprehensive observability solution for microservices architecture, providing real-time insights and automated incident response.",
      detailedDescription: "Created a complete observability stack for a complex microservices environment serving millions of users. The solution integrated distributed tracing, metrics collection, log aggregation, and intelligent alerting to provide unprecedented visibility into system behavior and performance.",
      technologies: ["Prometheus", "Grafana", "Jaeger", "ELK Stack", "Istio", "Kubernetes", "Node.js"],
      achievements: [
        "Reduced mean time to resolution (MTTR) by 80%",
        "Proactive issue detection before customer impact",
        "Custom dashboards for business and technical metrics",
        "Automated incident response reduced manual intervention"
      ],
      metrics: {
        "MTTR Reduction": "80%",
        "Services Monitored": "200+",
        "Daily Events": "10M+",
        "Uptime Improvement": "99.9%"
      },
      image: "📊",
      status: "Completed",
      year: "2020-2021"
    },
    {
      id: 4,
      title: "Infrastructure Automation Framework",
      category: "Infrastructure as Code",
      description: "Developed a comprehensive IaC framework that standardized infrastructure provisioning across multiple environments and cloud providers.",
      detailedDescription: "Built a sophisticated Infrastructure as Code framework that enabled consistent, repeatable infrastructure deployments across development, staging, and production environments. The framework included policy as code, cost optimization, and compliance checking built into the deployment process.",
      technologies: ["Terraform", "Ansible", "Python", "AWS", "Azure", "OPA", "GitHub Actions"],
      achievements: [
        "Standardized infrastructure across 20+ environments",
        "Automated compliance checking preventing policy violations",
        "Self-healing infrastructure reduced manual maintenance",
        "Template library accelerated new project setup by 90%"
      ],
      metrics: {
        "Environments": "20+",
        "Setup Time Reduction": "90%",
        "Compliance Score": "100%",
        "Maintenance Reduction": "70%"
      },
      image: "🏗️",
      status: "Completed",
      year: "2019-2020"
    },
    {
      id: 5,
      title: "AI-Powered Operations Dashboard",
      category: "Innovation Project",
      description: "Currently developing an intelligent operations dashboard that uses machine learning to predict system issues and optimize resource allocation.",
      detailedDescription: "An innovative project combining traditional DevOps practices with AI/ML capabilities to create predictive operations management. The system analyzes historical data, current metrics, and usage patterns to predict potential issues and automatically optimize resource allocation.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Redis", "Kubernetes", "FastAPI"],
      achievements: [
        "Early anomaly detection with 95% accuracy",
        "Automated scaling decisions reducing costs by 30%",
        "Predictive maintenance preventing 80% of outages",
        "Machine learning pipeline for continuous improvement"
      ],
      metrics: {
        "Prediction Accuracy": "95%",
        "Cost Savings": "30%",
        "Outage Prevention": "80%",
        "Response Time": "< 2 seconds"
      },
      image: "🤖",
      status: "In Development",
      year: "2023-2024"
    }
  ]

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{project.image}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Metrics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcase of impactful projects that drove digital transformation and operational excellence
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.image}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                    : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Key Metrics Preview */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="text-sm font-bold text-primary-600 dark:text-primary-400">{value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{key}</div>
                  </div>
                ))}
              </div>

              {/* Technologies Preview */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="skill-badge text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
                <span className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </section>
  )
}

export default Projects