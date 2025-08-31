// ABOUTME: Professional experience showcase with interactive cards
// ABOUTME: Highlights career achievements and technical implementations

import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "DevOps Engineer & Cloud Architect, Product Owner",
      category: "Automotive",
      description: "Led the design, build, and operation of a new AWS-based cloud platform during a corporate split, ensuring the separation of applications and infrastructure with zero downtime.",
      detailedDescription: "Led the design, build, and operation of a new AWS-based cloud platform during a corporate split, ensuring the separation of applications and infrastructure with zero downtime. Defined roadmap, architecture, and stakeholder management for the platform migration while developing custom tooling to boost developer productivity.",
      technologies: ["AWS", "EKS", "Kubernetes", "Terraform", "Ansible", "Istio", "GitHub Actions", "Jenkins", "Go", "Python", "Kotlin", "Spring Boot", "Grafana", "Prometheus", "Instana", "Wazuh", "OpenSearch", "SonarQube"],
      achievements: [
        "Defined roadmap, architecture, and stakeholder management for the platform migration",
        "Automated provisioning of complete AWS infrastructure (VPC, networking, EKS, IAM, RDS, DynamoDB) using Terraform & Ansible",
        "Migrated >100 applications (frontend/backend) to AWS → ensured business continuity during divestment",
        "Built CI/CD pipelines with GitHub Actions & Jenkins → accelerated deployments from days to hours",
        "Developed custom tooling (Go CLI, Prometheus Exporter, Python Lambdas) to boost developer productivity and automate security tasks",
        "Implemented monitoring & SIEM (Grafana, Instana, Wazuh) → improved incident detection & compliance",
        "Established service mesh (Istio) and performed load & performance testing (k6) to ensure platform resilience"
      ],
      metrics: {
        "Impact": "Zero downtime migration",
        "Scale": ">100 applications",
        "Achievement": "Full platform separation"
      },
      image: "🚀",
      status: "Current",
      year: "2022-2025"
    },
    {
      id: 2,
      title: "Software Developer",
      category: "Automotive",
      description: "Maintained and enhanced a Spring Boot REST service developed in Kotlin as part of the AWS-based cloud platform built during a corporate split.",
      detailedDescription: "Maintained and enhanced a Spring Boot REST service developed in Kotlin as part of the AWS-based cloud platform built during a corporate split. Extended and optimized existing microservice functionalities while ensuring continuous availability, security, and scalability of mission-critical services.",
      technologies: ["Kotlin", "Spring Boot", "PostgreSQL", "MongoDB", "AWS", "GitHub Actions", "Terraform", "SonarQube", "Grafana", "Prometheus", "Instana", "Docker", "Podman", "Artifactory"],
      achievements: [
        "Extended and optimized existing microservice functionalities (user/org data via LDAP, API integrations)",
        "Improved code quality and reliability with automated tests and SonarQube analysis",
        "Integrated the service with AWS cloud components (RDS, MongoDB) for persistent data handling",
        "Enhanced performance and resilience through profiling, debugging, and refactoring",
        "Supported DevOps workflows with CI/CD integration (GitHub Actions, Jenkins) and containerized deployments on Kubernetes (EKS)"
      ],
      metrics: {
        "Impact": "Continuous service availability",
        "Scale": "Mission-critical microservice",
        "Achievement": "Modernized platform features"
      },
      image: "💻",
      status: "Current",
      year: "2022-2025"
    },
    {
      id: 3,
      title: "DevOps Engineer – Cloud Infrastructure",
      category: "Automotive",
      description: "Designed and migrated a complete microservices cloud platform from IBM Cloud to AWS, enabling full automation and a year-long, zero-downtime migration of mission-critical applications.",
      detailedDescription: "Designed and migrated a complete microservices cloud platform from IBM Cloud to AWS, enabling full automation and a year-long, zero-downtime migration of mission-critical applications. Architected and deployed multi-cloud infrastructure using modern DevOps practices and established comprehensive monitoring and observability.",
      technologies: ["IBM Cloud", "AWS", "EKS", "Kubernetes", "Terraform", "Helm", "Ansible", "Istio", "Go", "Kotlin", "Python", "Jenkins", "GitLab", "GitHub", "Nexus", "Grafana", "Prometheus", "Instana", "BlackDuck"],
      achievements: [
        "Architected and deployed multi-cloud infrastructure (IBM Cloud → AWS) using Terraform, Helm, Kubernetes (EKS)",
        "Implemented security best practices for Kubernetes (NetworkPolicies, PodSecurityPolicies, vulnerability scanning with BlackDuck)",
        "Built a CI/CD platform (Jenkins, GitLab/GitHub, Nexus, Helm) supporting dozens of application teams",
        "Integrated Istio service mesh and Kafka for advanced networking and log management",
        "Developed a Golang scaling service to auto-scale Kubernetes pods → optimized cost and performance",
        "Automated VPCs, networking, RDS, MongoDB Atlas, MSK, and load balancers with Terraform modules",
        "Migrated data from IBM Cloud (Object Storage, MongoDB, PostgreSQL) to AWS S3, RDS, and MongoDB Atlas",
        "Established monitoring and observability with Instana, Grafana, Prometheus"
      ],
      metrics: {
        "Impact": "100% automated migration",
        "Scale": "Multi-cloud platform",
        "Achievement": "Zero-downtime year-long migration"
      },
      image: "☁️",
      status: "Completed",
      year: "2019-2022"
    },
    {
      id: 4,
      title: "IT Consultant Cloud Technologies / DevOps Engineer",
      category: "Machinery & IoT",
      description: "Developed and optimized a cloud-based IoT platform for a leading German automation technology manufacturer. Focused on stability, performance, cost-efficiency, and security to support commercialization of the IoT solution.",
      detailedDescription: "Developed and optimized a cloud-based IoT platform for a leading German automation technology manufacturer. Focused on stability, performance, cost-efficiency, and security to support commercialization of the IoT solution. Migrated IoT workloads into Docker containers and deployed to Azure Kubernetes Service.",
      technologies: ["Microsoft Azure", "AKS", "Docker", "Helm", "Java", "Angular", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "Grafana", "Azure Vault", "Azure DevOps", "Bitbucket"],
      achievements: [
        "Migrated IoT workloads into Docker containers and deployed to Azure Kubernetes Service (AKS) → improved scalability and maintainability",
        "Enhanced CI/CD pipelines with Azure DevOps → reduced deployment effort by >50%",
        "Optimized infrastructure resources → achieved significant cloud cost savings",
        "Secured sensitive data management with Azure Vault",
        "Improved observability and system stability using Grafana dashboards"
      ],
      metrics: {
        "Impact": ">50% deployment reduction",
        "Scale": "IoT platform",
        "Achievement": "Global rollout enabled"
      },
      image: "🏭",
      status: "Completed",
      year: "2019-2021"
    },
    {
      id: 5,
      title: "IT Consultant / DevOps Engineer",
      category: "Banking",
      description: "Defined and implemented a new requirements-to-deployment process to ensure traceability and governance of changes across applications and infrastructure.",
      detailedDescription: "Defined and implemented a new requirements-to-deployment process to ensure traceability and governance of changes across applications and infrastructure. Designed and validated an automated deployment pipeline to integrate requirements into DevOps workflows with full compliance support.",
      technologies: ["Jenkins", "Bitbucket", "GitLab", "GitHub Enterprise", "JIRA", "Confluence", "ServiceNow", "SharePoint"],
      achievements: [
        "Designed and validated an automated deployment pipeline to integrate requirements into DevOps workflows",
        "Integrated process management tools (Jira, ServiceNow) with development and operations pipelines",
        "Conducted proof-of-concepts to validate end-to-end workflows from requirement capture → development → testing → production deployment",
        "Enabled compliance through full traceability of application and infrastructure changes"
      ],
      metrics: {
        "Impact": "Full traceability",
        "Scale": "Enterprise banking",
        "Achievement": "Compliance workflow"
      },
      image: "🏦",
      status: "Completed",
      year: "2018-2019"
    },
    {
      id: 6,
      title: "IT Consultant / DevOps Engineer",
      category: "Insurance",
      description: "Led migration of legacy WebSphere applications to JBoss and Docker containers, with some apps re-engineered using Spring Boot. Designed and delivered a fully automated application platform based on Infrastructure as Code.",
      detailedDescription: "Led migration of legacy WebSphere applications to JBoss and Docker containers, with some apps re-engineered using Spring Boot. Designed and delivered a fully automated application platform based on Infrastructure as Code with comprehensive monitoring and security management.",
      technologies: ["OpenShift", "Kubernetes", "Docker", "VMware", "Ansible", "Spring Boot", "REST", "Instana", "SonarQube", "Elasticsearch", "Kibana", "Fluentd", "HashiCorp Vault", "HashiCorp Consul", "Jenkins", "GitLab"],
      achievements: [
        "Automated provisioning of entire platform components (VMware, F5 load balancers, Kubernetes/OpenShift clusters, Jenkins, GitLab, Nexus, SonarQube, LDAP, storage) using Ansible & IaC",
        "Implemented CI/CD pipelines and automated testing → accelerated and standardized deployments",
        "Integrated container-based storage with GlusterFS and introduced Camunda BPM for process automation",
        "Deployed APM tooling (Instana) and centralized logging (Elasticsearch, Fluentd, Kibana) for proactive monitoring",
        "Established secure credential and secret management with HashiCorp Vault & Consul"
      ],
      metrics: {
        "Impact": "Weeks to hours provisioning",
        "Scale": "Full platform automation",
        "Achievement": "Modern container platform"
      },
      image: "🛡️",
      status: "Completed",
      year: "2017-2018"
    },
    {
      id: 7,
      title: "Assistant Project Manager / Architect / Software Developer",
      category: "Insurance",
      description: "Modernized claims processing for property & liability insurance by replacing legacy 3270 applications with a new portal-based platform.",
      detailedDescription: "Modernized claims processing for property & liability insurance by replacing legacy 3270 applications with a new portal-based platform. Designed and developed frontend and WebService components while establishing automated deployment and monitoring solutions.",
      technologies: ["Java/JavaEE", "JSF", "AspectJ", "JavaScript", "Python", "WebSphere Portal Server", "WebSphere Application Server", "JBehave", "Selenium", "Dynatrace", "Splunk", "Jenkins", "XLDeploy"],
      achievements: [
        "Designed and developed frontend and WebService components (SOAP/REST) in Java/JavaEE",
        "Defined a unified implementation approach for Portlets, WebServices, and database architecture",
        "Coordinated team tasks and sprint planning using Jira & Confluence",
        "Implemented automated deployments with Jenkins + XLDeploy → reduced release effort",
        "Improved application stability via Dynatrace performance analysis and Splunk log monitoring",
        "Established automated test pipelines (JBehave, Selenium) ensuring higher release quality"
      ],
      metrics: {
        "Impact": "Legacy modernization",
        "Scale": "Claims processing",
        "Achievement": "Portal platform"
      },
      image: "💼",
      status: "Completed",
      year: "2015-2016"
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
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg min-w-[140px] flex-shrink-0">
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            15+ years of driving digital transformation across diverse industries
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