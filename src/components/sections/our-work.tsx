"use client"

import { useState } from "react"
import { MotionDiv } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe, X, ZoomIn } from "lucide-react"
import Image from "next/image"

type Project = {
  id: string
  title: string
  description: string
  image: string
  category: "web" | "ecommerce" | "education" | "mobile" | "all"
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  color: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "FairPlace",
    description: "Real estate platform with property listings and advanced search capabilities",
    image: "/our-work/photo-1472851294608-062f824d29cc.png",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://fairplace.in",
    githubUrl: "https://github.com",
    color: "blue"
  },
 
  {
    id: "3",
    title: "German Classes Portal",
    description: "Educational website for Aditya Sir's German language classes",
    image: "/our-work/photo-1551288049-bebda4e38f71.png",
    category: "education",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://adityasirgermanclasses.netlify.app",
    color: "purple"
  },
  {
    id: "4",
    title: "WordPress NA",
    description: "WordPress community platform with resources and tutorials",
    image: "/our-work/photo-1576091160550-2173dba999ef.png",
    category: "education",
    technologies: ["React", "WordPress API", "Netlify"],
    liveUrl: "https://wordpressna.netlify.app",
    color: "blue"
  },
  {
    id: "5",
    title: "Today's AI",
    description: "AI news and updates platform featuring latest developments",
    image: "/our-work/photo-1526628953301-3e589a6a8b74.png",
    category: "web",
    technologies: ["React", "Next.js", "Netlify"],
    liveUrl: "https://todaysai.netlify.app",
    color: "green"
  },
  {
    id: "6",
    title: "SRINC Corporate Website",
    description: "Corporate website for SRINC with service offerings and contact information",
    image: "/our-work/photo-1536240478700-b869070f9279.png",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://srinc.in",
    color: "purple"
  },
  {
    id: "7",
    title: "Karigari Demo",
    description: "E-commerce platform for artisanal handcrafted products",
    image: "/our-work/photo-1618005182384-a83a8bd57fbe.png",
    category: "ecommerce",
    technologies: ["React", "Firebase", "Netlify"],
    liveUrl: "https://karigaridemo.netlify.app",
    color: "blue"
  },
 
 
  {
    id: "10",
    title: "CodePrep - Interview Prep App",
    description: "Mobile application for technical interview preparation with coding notes, company questions, and AI assistance",
    image: "/our-work/codeprep-mobile.png",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    // liveUrl: "https://play.google.com/store/apps/codeprep",
    color: "blue"
  },  {
    id: "11", 
    title: "WinWitty - Gaming Platform",
    description: "Mobile gaming platform with daily missions, spin wheel rewards, and multiple puzzle games including Tic Tac Toe and 2048",
    image: "/our-work/winwitty-mobile.png",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
    // liveUrl: "https://play.google.com/store/apps/winwitty",
    color: "purple"
  },
  {
    id: "12",    title: "Rohum.tech",
    description: "Mental health platform offering therapy sessions and self-help resources",
    image: "/our-work/photo-1536240478700-b869070f9279.png",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://rohum.tech",
    color: "blue"
  },
  {
    id: "13",
    title: "AdiYogInGo",
    description: "Yoga and wellness platform offering classes and meditation resources",
    image: "/our-work/photo-1551288049-bebda4e38f71.png",
    category: "web",
    technologies: ["React", "Firebase", "Netlify"],
    liveUrl: "https://adiyogingo.netlify.app",
    color: "purple"
  },
  {
    id: "14",
    title: "Astro Project",
    description: "Astronomy education platform with interactive star maps and celestial information",
    image: "/our-work/photo-1576091160550-2173dba999ef.png",
    category: "education",
    technologies: ["React", "Three.js", "Netlify"],
    liveUrl: "https://astroproject155.netlify.app",
    color: "blue"
  },
  {
    id: "15",
    title: "LivelyK",
    description: "Event booking and management platform for live performances",
    image: "/our-work/photo-1563013544-824ae1b704d3.png",
    category: "web",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://livelyk.netlify.app",
    color: "green"
  },
  {
    id: "16",
    title: "FairPlace Medical",
    description: "Healthcare provider directory and appointment booking platform",
    image: "/our-work/photo-1472851294608-062f824d29cc.png",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://fairplace-med.netlify.app",
    color: "blue"
  },
  {
    id: "17",
    title: "Hotel 23K",
    description: "Luxury hotel booking platform with virtual room tours",
    image: "/our-work/photo-1618005182384-a83a8bd57fbe.png",
    category: "web",
    technologies: ["React", "Node.js", "Express"],
    liveUrl: "https://hotel23k.netlify.app",
    color: "purple"
  },
  {
    id: "18",
    title: "DCE Educational Portal",
    description: "E-learning platform for engineering students with course materials and assessments",
    image: "/our-work/photo-1526628953301-3e589a6a8b74.png",
    category: "education",
    technologies: ["React", "Firebase", "Material UI"],
    liveUrl: "https://dce2.netlify.app",
    color: "green"
  },
  {
    id: "19",
    title: "ExploreSphere",
    description: "Travel planning and destination discovery platform with interactive maps",
    image: "/our-work/photo-1536240478700-b869070f9279.png",
    category: "web",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://exploresphere.netlify.app",
    color: "blue"
  }
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Websites" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "education", label: "Education" },
  { id: "mobile", label: "Mobile Apps" },
] as const

export function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"]>("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  )

  const openImageModal = (project: Project) => {
    setSelectedProject(project)
    setSelectedImage(project.image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedProject(null)
  }

  return (
    <section id="work" className="py-20">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of successful client projects and innovative solutions
          </p>
        </MotionDiv>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-background rounded-xl overflow-hidden border">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted cursor-pointer group/image" onClick={() => openImageModal(project)}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index >= 3 ? "lazy" : undefined}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/our-work/photo-1618005182384-a83a8bd57fbe.png";
                    }}
                  />
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  {/* Links overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4" 
                       onClick={(e) => e.stopPropagation()}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <Globe className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label={`Visit ${project.title} GitHub repository`}
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-2"
                      >
                        {project.title}
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs bg-primary-500/10 text-primary-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close button */}
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Modal content */}
              <div className="bg-background rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                {/* Large image */}
                <div className="relative w-full h-[60vh] bg-muted">
                  <Image
                    src={selectedImage}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <div className="flex gap-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          Visit Site
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-lg">
                    {selectedProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}