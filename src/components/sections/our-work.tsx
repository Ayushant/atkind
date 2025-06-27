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
  galleryImages?: string[]
}

const projects: Project[] = [  {
    id: "1",
    title: "FairPlace",
    description: "Real estate platform with property listings and advanced search capabilities",
    image: "/our-work/web/FairPlace1.PNG",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://fairplace.in",
    githubUrl: "https://github.com",
    color: "blue"
  },
  {
    id: "2",
    title: "Wristband",
    description: "Custom wristband e-commerce platform with product customization options",
    image: "/our-work/web/wristband.PNG",
    category: "ecommerce",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://www.wristband.com/",
    color: "green"
  },
  {
    id: "2a",
    title: "Sports Gear Swag",
    description: "Sports apparel and equipment e-commerce platform with team customization",
    image: "/our-work/web/sports1.PNG",
    category: "ecommerce",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "https://www.sportsgearswag.com/",
    color: "purple"
  },
 
  {
    id: "3",
    title: "German Classes Portal",
    description: "Educational website for Aditya Sir's German language classes",
    image: "/our-work/web/germanclass.PNG",
    category: "education",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://adityasirgermanclasses.netlify.app",
    color: "purple"
  },
  {
    id: "4",
    title: "WordPress NA",
    description: "WordPress community platform with resources and tutorials",
    image: "/our-work/web/wordpressna.PNG",
    category: "education",
    technologies: ["React", "WordPress API", "Netlify"],
    liveUrl: "https://wordpressna.netlify.app",
    color: "blue"
  },
  {
    id: "5",
    title: "Today's AI",
    description: "AI news and updates platform featuring latest developments",
    image: "/our-work/web/todaysai.PNG",
    category: "web",
    technologies: ["React", "Next.js", "Netlify"],
    liveUrl: "https://todaysai.netlify.app",
    color: "green"
  },  {
    id: "6",
    title: "SRINC Corporate Website",
    description: "Corporate website for SRINC with service offerings and contact information",
    image: "/our-work/web/srinc.PNG",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "https://srinc.in",
    color: "purple"
  },
  {
    id: "7",
    title: "Karigari Demo",
    description: "E-commerce platform for artisanal handcrafted products",
    image: "/our-work/web/kar.PNG",
    category: "ecommerce",
    technologies: ["React", "Firebase", "Netlify"],
    liveUrl: "https://karigaridemo.netlify.app",
    color: "blue"
  },
 
   {
    id: "10",
    title: "CodePrep - Interview Prep App",
    description: "Mobile application for technical interview preparation with coding notes, company questions, and AI assistance",
    image: "/our-work/mobile/appdd03 (1).png",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    // liveUrl: "https://play.google.com/store/apps/codeprep",
    color: "blue",
    galleryImages: ["/our-work/mobile/appdd03 (1).png", "/our-work/mobile/appdd04 (1).png"]
  },  {
    id: "11", 
    title: "WinWitty - Gaming Platform",
    description: "Mobile gaming platform with daily missions, spin wheel rewards, and multiple puzzle games including Tic Tac Toe and 2048",
    image: "/our-work/mobile/compressed1.png",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Functions"],
    // liveUrl: "https://play.google.com/store/apps/winwitty",
    color: "purple",
    galleryImages: [
      "/our-work/mobile/compressed1.png", 
      "/our-work/mobile/compressed2.png", 
      "/our-work/mobile/compressed3.png"
    ]
  },
  {
    id: "11a",
    title: "GameHub - Multi-Game Platform",
    description: "Comprehensive gaming platform featuring classic games like puzzle, arcade, and strategy games with social features",
    image: "/our-work/mobile/kk1.png",
    category: "mobile",
    technologies: ["Unity", "C#", "Firebase", "Google Play Games"],
    color: "green",
    galleryImages: [
      "/our-work/mobile/kk1.png",
      "/our-work/mobile/kk2.png",
      "/our-work/mobile/kk3.png",
      "/our-work/mobile/kk4.png"
    ]
  },
  {
    id: "12",    title: "Rohum.tech",
    description: "Mental health platform offering therapy sessions and self-help resources",
    image: "/our-work/web/rohum.PNG",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://rohum.tech",
    color: "blue"
  },
  {
    id: "13",
    title: "AdiYogInGo",
    description: "Yoga and wellness platform offering classes and meditation resources",
    image: "/our-work/web/adiyogi.PNG",
    category: "web",
    technologies: ["React", "Firebase", "Netlify"],
    liveUrl: "https://adiyogingo.netlify.app",
    color: "purple"
  },
  {
    id: "14",
    title: "Astro Project",
    description: "Astronomy education platform with interactive star maps and celestial information",
    image: "/our-work/web/astro.PNG",
    category: "education",
    technologies: ["React", "Three.js", "Netlify"],
    liveUrl: "https://astroproject155.netlify.app",
    color: "blue"
  },
  {
    id: "15",
    title: "LivelyK",
    description: "Event booking and management platform for live performances",
    image: "/our-work/web/livelyk.PNG",
    category: "web",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://livelyk.netlify.app",
    color: "green"
  },
  {
    id: "16",
    title: "FairPlace Medical",
    description: "Healthcare provider directory and appointment booking platform",
    image: "/our-work/web/fairplacemed.PNG",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://fairplace-med.netlify.app",
    color: "blue"
  },
  {
    id: "17",
    title: "Hotel 23K",
    description: "Luxury hotel booking platform with virtual room tours",
    image: "/our-work/web/hotel23.PNG",
    category: "web",
    technologies: ["React", "Node.js", "Express"],
    liveUrl: "https://hotel23k.netlify.app",
    color: "purple"
  },
  {
    id: "18",
    title: "DCE Educational Portal",
    description: "E-learning platform for engineering students with course materials and assessments",
    image: "/our-work/web/dce.PNG",
    category: "education",
    technologies: ["React", "Firebase", "Material UI"],
    liveUrl: "https://dce2.netlify.app",
    color: "green"
  },
  {
    id: "19",
    title: "ExploreSphere",
    description: "Travel planning and destination discovery platform with interactive maps",
    image: "/our-work/web/exploresphere.PNG",
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMouseOverModal, setIsMouseOverModal] = useState(false)

  const filteredProjects = projects.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  )

  const openImageModal = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
    if (project.galleryImages && project.galleryImages.length > 0) {
      setSelectedImage(project.galleryImages[imageIndex])
    } else {
      setSelectedImage(project.image)
    }
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setIsMouseOverModal(false)
  }

  const nextImage = () => {
    if (selectedProject?.galleryImages && selectedProject.galleryImages.length > 1) {
      const nextIndex = (currentImageIndex + 1) % selectedProject.galleryImages.length
      setCurrentImageIndex(nextIndex)
      setSelectedImage(selectedProject.galleryImages[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedProject?.galleryImages && selectedProject.galleryImages.length > 1) {
      const prevIndex = currentImageIndex === 0 ? selectedProject.galleryImages.length - 1 : currentImageIndex - 1
      setCurrentImageIndex(prevIndex)
      setSelectedImage(selectedProject.galleryImages[prevIndex])
    }
  }

  // Auto-close modal when mouse leaves
  const handleMouseLeave = () => {
    setIsMouseOverModal(false)
    setTimeout(() => {
      if (!isMouseOverModal) {
        closeImageModal()
      }
    }, 500) // 500ms delay before closing
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
              className="group"
            >
              <div className="bg-background rounded-xl overflow-hidden border">                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted cursor-pointer group/image" onClick={() => openImageModal(project, 0)}>                  <Image
                    src={project.image}
                    alt={`${project.title} - Professional software development project showcasing ${project.technologies.join(', ')}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index >= 3 ? "lazy" : "eager"}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/our-work/photo-1618005182384-a83a8bd57fbe.png";
                    }}
                  />
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                    {project.galleryImages && project.galleryImages.length > 1 && (
                      <span className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                        +{project.galleryImages.length} images
                      </span>
                    )}
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
                      <span 
                        className="hover:text-primary transition-colors cursor-pointer"
                        onClick={() => openImageModal(project, 0)}
                      >
                        {project.title}
                      </span>
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
        </div>        {/* Enhanced Image Modal with Gallery */}
        {selectedImage && selectedProject && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="relative max-w-6xl max-h-[95vh] w-full"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setIsMouseOverModal(true)}
              onMouseLeave={() => setIsMouseOverModal(false)}
            >
              {/* Close button */}
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Navigation arrows for gallery */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}
              
              {/* Modal content */}
              <div className="bg-background rounded-lg overflow-hidden shadow-2xl">
                {/* Large image */}
                <div className="relative w-full h-[70vh] bg-muted">
                  <Image
                    src={selectedImage}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="95vw"
                    priority
                  />
                  
                  {/* Image counter */}
                  {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                    </div>
                  )}
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Image thumbnails for gallery */}
                  {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                    <div className="flex gap-2 justify-center">
                      {selectedProject.galleryImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentImageIndex(index)
                            setSelectedImage(img)
                          }}
                          className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${selectedProject.title} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
