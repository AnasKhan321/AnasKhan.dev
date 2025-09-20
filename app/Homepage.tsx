"use client"
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Menu, X, Twitter, Phone, Mail, MapPin, ExternalLink, ArrowRight, Code2 } from 'lucide-react'
import { Inter, Poppins } from "next/font/google"
import Link from "next/link"
import { ReactTyped } from "react-typed"
import { motion } from "framer-motion"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
}) 

interface Project {
  title: string
  description: string
  url: string
  imageurl: string
  type: string
  id: string
  githuburl: string
  technologies: string[]
}

interface Skill {
  name: string
  level: string
  icon?: string 
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const aboutref = useRef<HTMLAnchorElement | null>(null)
  const projectref = useRef<HTMLAnchorElement | null>(null)
  const skillref = useRef<HTMLAnchorElement | null>(null)
  const contactref = useRef<HTMLAnchorElement | null>(null)


  const [isScrolled, setIsScrolled] = useState(false)

  const handlref = (ref: React.RefObject<HTMLAnchorElement>) => {
    const targetId = ref.current?.id.substring(1); // Using optional chaining to avoid errors if `ref.current` is null
    const targetSection = document.getElementById(targetId || ""); // Provide a fallback in case `targetId` is undefined
    console.log(targetSection);
  
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };




const Projects: Project[] = [
  {
    title: "Decentralise Twitter",
    description: "A decentralized Twitter-like social media application built on Solana blockchain. This dApp allows users to create tweets, like, comment, and bookmark posts in a fully decentralized manner.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/decentralise-twitter.png?alt=media&token=65f57858-9bb8-4387-8e9a-9c672d6b9171",
    id: "-1",
    type: "Blockchain",
    url: "https://decentraliset.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/decentralise-twitter",
    technologies: ["Solana", "Rust", "React", "Web3"]
  },
  {
    title: "WestX",
    description: "WestX is a Solana-based platform where creators launch evolving AI personalities as tokenized digital beings. Unlike typical pump-and-dump tokens, WestX introduces vesting cliffs and self-promoting AI agents.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/westxicon.png?alt=media&token=725d77f4-5b47-45f8-898d-af54d6b22201",
    id: "0",
    type: "AI & Blockchain",
    url: "https://www.westx.xyz/",
    githuburl: "https://github.com/AnasKhan321/WestX",
    technologies: ["Solana", "AI", "React.js", "TypeScript"]
  },
  {
    title: "Multi-Agent Orchestration",
    description: "MotorMind is an intelligent vehicle assistant platform that leverages AI-powered multi-agent orchestration to provide seamless vehicle allocation and recommendations.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/mmb.png?alt=media&token=37b411b8-eb67-4741-93b3-ebf602773b0d",
    id: "-12",
    type: "AI Platform",
    url: "https://mindmontiorf.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/Multi-Agent-Orchestration",
    technologies: ["AI", "React", "Node.js", "Python"]
  },
  {
    title: "Watchify",
    description: "An HLS adaptive streaming app similar to Netflix, built with Next.js, Prisma, Docker, AWS ECS, and AWS S3. Provides seamless, high-quality video streaming experience.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/watchify.png?alt=media&token=ccc70a57-d9f1-42bd-aba6-5f602b191b48",
    id: "1",
    type: "Full Stack",
    url: "https://watchify-topaz.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/watchify",
    technologies: ["Next.js", "Prisma", "Docker", "AWS", "Tailwind"]
  },
  {
    title: "LuckyLift",
    description: "A dynamic betting app showcasing advanced full-stack development and web scraping skills. Built with Next.js, Node.js, and PostgreSQL for efficient data management.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/luckylift.png?alt=media&token=3aeb6763-504d-440f-acae-c2d26cbaaadc",
    id: "2",
    type: "Web Scraping",
    url: "https://lucky-lift-client.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/LuckyLift",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"]
  },
  {
    title: "CodeWithBat",
    description: "A web application with efficient ACL (Access Control List) system. Developed with Next.js, PostgreSQL, and Node.js for secure course and tutorial management.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/codewithbat.png?alt=media&token=33cef43f-c9ae-41a5-8a94-3a2dc63a6afc",
    id: "3",
    type: "Full Stack",
    url: "https://cwb-client.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/CodeWithBat",
    technologies: ["Next.js", "PostgreSQL", "Node.js", "Tailwind"]
  },
  {
    title: "TwitterClone",
    description: "A full-stack Twitter clone built with Next.js, Prisma, PostgreSQL, and GraphQL. Replicates core Twitter features with modern, responsive UI.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/twitterclone.png?alt=media&token=970fbaa7-8918-44d0-a822-0bf3552ee252",
    id: "4",
    type: "Full Stack",
    url: "https://twitter-clone-client-alpha.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/TwitterClone",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "GraphQL"]
  },
  {
    title: "Tomato Detection",
    description: "AI-powered tomato leaf disease detection using CNN and TensorFlow. Features FastAPI backend and React.js frontend for real-time image analysis.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/leafdetection.png?alt=media&token=37d24407-6e9c-4dc9-a9cc-4b08069be845",
    id: "5",
    type: "Machine Learning",
    url: "https://tomato-leaf-detection-frontend-9y2k.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/Tomato-Leaf-Detection",
    technologies: ["TensorFlow", "FastAPI", "React", "Python"]
  },
  {
    title: "WebChatApp",
    description: "A real-time web chat application built with Next.js and Socket.IO. Features secure message storage with Prisma and file sharing capabilities.",
    imageurl: "https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/alpha.png?alt=media&token=fe008eb9-dced-40fb-ba55-6f4a8c59026f",
    id: "6",
    type: "Full Stack",
    url: "https://alpha-f.vercel.app/",
    githuburl: "https://github.com/AnasKhan321/WebChatApp",
    technologies: ["Next.js", "Socket.IO", "Prisma", "Node.js"]
  }
]


const skills: Skill[] = [
  {
    name: "Rust",
    level: "Beginner",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
  },
  {
    name: "Solana",
    level: "Intermediate",
    icon: "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png"
  },
  {
    name: "React Js",
    level: "Expert",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    name: "Next Js",
    level: "Intermediate",
    icon: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
  },
  {
    name: "Docker",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
  },
  {
    name: "Node Js",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
  },
  {
    name: "Python",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  },
  {
    name: "Redis",
    level: "Intermediate",
    icon: "https://i0.wp.com/www.returngis.net/wp-content/uploads/2019/01/Redis-Cache.png?fit=600%2C315&ssl=1g"
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
  },
  {
    name: "AWS",
    level: "Beginner",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
  },
  {
    name: "SQL",
    level: "Intermediate",
    icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"
  }
]
 
  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
          
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])


  return (
    <div className={`${poppins.variable} ${inter.variable} min-h-screen bg-gray-950 text-white overflow-x-hidden`}>
      {/* Enhanced Dark Mode Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"></div>
      
      {/* Animated Background Elements */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      <div className="grid-bg opacity-30" />
      <div className="glowing-orb orb-1 opacity-60" />
      <div className="glowing-orb orb-2 opacity-60" />
      <div className="glowing-orb orb-3 opacity-60" />
      
      <div className="content-layer">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 ${isScrolled ? "bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50" : "bg-transparent"} transition-all duration-300`}>
        <div className="container mx-auto px-6 py-4 w-[85%]">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Anas Khan
              </h1>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a
                id="#about"
                onClick={() => { handlref(aboutref) }}
                ref={aboutref}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:bg-gray-800/30 px-3 py-2 rounded-lg"
              >
                About
              </a>
              <a
                id="#projects"
                onClick={() => { handlref(projectref) }}
                ref={projectref}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:bg-gray-800/30 px-3 py-2 rounded-lg"
              >
                Projects
              </a>
              <a
                id="#skills"
                onClick={() => { handlref(skillref) }}
                ref={skillref}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:bg-gray-800/30 px-3 py-2 rounded-lg"
              >
                Skills
              </a>
              <a
                id="#contact"
                onClick={() => { handlref(contactref) }}
                ref={contactref}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 font-medium hover:bg-gray-800/30 px-3 py-2 rounded-lg"
              >
                Contact
              </a>
          </nav>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800/50"
              onClick={toggleMenu}
            >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-8">
              <a
                id="#about"
                className="text-2xl text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                id="#projects"
                className="text-2xl text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                id="#skills"
                className="text-2xl text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                id="#contact"
                className="text-2xl text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
          </nav>
        </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-cyan-400 font-medium mb-4">Hello there, I'm</p>
              <h1 className="text-6xl md:text-7xl font-bold font-poppins mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  Anas Khan
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-8">
                <ReactTyped
                  strings={[
                    "Full-Stack Developer",
                    "Web Scraping Expert",
                    "Blockchain Developer",
                    "AI Enthusiast"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Specializing in React, Next.js, Blockchain, and AI development. I create elegant solutions 
                for complex problems with a focus on performance and user experience.
              </p>
              
              <div className="flex justify-center items-center gap-6 mb-12">
                <Link href="https://github.com/AnasKhan321" target="_blank">
                  <Button
                    size="lg"
                    className="bg-white text-black  hover:bg-gray-300 transition-all duration-300 font-semibold px-8 shadow-lg hover:shadow-xl"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-black  transition-all duration-300 font-semibold px-8 hover:bg-gray-300"
                  >
                    <span className="text-black">
                      Contact Me
                    </span>
                  </Button>
                </Link>
              </div>

            
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  {/* Animated background glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main image container */}
                  <div className="relative">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/testing-95818.appspot.com/o/AnasKhanimagee.jpeg?alt=media&token=f5258b2c-6c37-4ce9-8730-46ab27931475"
                      alt="Anas Khan"
                      className="w-80 h-80 rounded-2xl object-cover mx-auto lg:mx-0 shadow-2xl border-4 border-gray-800/50 group-hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse delay-200"></div>
                    
                    {/* Professional badge */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      Full-Stack Developer
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-cyan-400 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-4 border-b-4 border-purple-400 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold font-poppins mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate web developer and blockchain enthusiast from Jodhpur, Rajasthan. 
                  I specialize in building dynamic web applications, extracting valuable data through 
                  web scraping, and developing innovative blockchain solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With expertise in modern technologies like React, Next.js, Node.js, and Solana, 
                  I constantly strive to create efficient, impactful solutions that push the boundaries 
                  of what's possible on the web.
                </p>
                <div className="pt-4">
                  <Button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Anas_Khan.pdf';
                      link.download = 'Anas_Khan.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        
        {/* Personal Details Section */}
 
        {/* Featured Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A collection of projects that showcase my expertise in full-stack development, 
                blockchain technology, and AI integration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-gray-800/60 border-gray-700/50 hover:border-gray-600 transition-all duration-300 overflow-hidden h-full backdrop-blur-xl shadow-lg shadow-black/30">
                    <div className="relative overflow-hidden">
                <img
                  src={project.imageurl}
                  alt={`${project.title} screenshot`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    
              <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-xl font-bold text-white font-poppins">
                          {project.title}
                        </CardTitle>
                      </div>
                      
                      <CardDescription className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-gray-700/70 text-gray-200 border-0 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-gray-700/70 text-gray-200 border-0 text-xs"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
              </CardContent>

                    <CardFooter className="p-6 pt-0 flex gap-3">
                      <Link href={project.url} target="_blank" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                      <Link href={project.githuburl} target="_blank">
                        <Button
                          variant="outline"
                          size="icon"
                          className="relative text-gray-300 bg-gradient-to-r from-gray-700 to-gray-600 border-cyan-500/50 transition-all duration-300 group overflow-hidden hover:shadow-lg shadow-cyan-500/25"
                          title="View Source Code"
                        >
                          <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Github className="relative z-10 h-4 w-4 group-hover:scale-125 group-hover:rotate-[15deg] transition-all duration-500 ease-out" />
                          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-700/20 to-blue-800/20 opacity-100 group-hover:opacity-100 blur-sm transition-all duration-300 transform scale-150" />
                        </Button>
                      </Link>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="https://github.com/AnasKhan321" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white bg-gray-800/60 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 font-semibold px-8 group"
                >
                  <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                My technical toolkit has expanded through various projects and professional experiences, 
                allowing me to build comprehensive solutions across different platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-slate-800/50   border-gray-700/50 hover:border-cyan-500/50 text-center p-6 transition-all duration-500 backdrop-blur-xl hover:transform hover:scale-110 shadow-xl shadow-black/40 hover:shadow-cyan-500/30 group relative overflow-hidden">
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex flex-col items-center space-y-4">
                      {/* Enhanced icon container */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-600/30 to-gray-700/50 border-2 border-gray-600/50 flex items-center justify-center group-hover:border-cyan-400/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/40 backdrop-blur-sm">
                          {skill.icon ? (
                            <img 
                              src={skill.icon} 
                              alt={`${skill.name} icon`}
                              className="w-12 h-12 object-contain group-hover:scale-125 transition-all duration-500 ease-out filter drop-shadow-lg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                // e.currentTarget.nextElementSibling!.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <Code2 
                            className="w-10 h-10 text-cyan-400 group-hover:scale-125 transition-all duration-500 ease-out drop-shadow-lg" 
                            style={{ display: skill.icon ? 'none' : 'flex' }}
                          />
                        </div>
                        
                        {/* Floating particles around icon */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 animate-pulse delay-300"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500 font-poppins">
                          {skill.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-semibold text-sm">
                          {skill.level}
                        </CardDescription>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ${
                          skill.level === 'Expert' ? 'w-full' : 
                          skill.level === 'Intermediate' ? 'w-3/4' : 'w-1/2'
                        } opacity-0 group-hover:opacity-100`}></div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 font-poppins">Frontend & Backend</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                      <Badge key={tech} className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 font-poppins">Web3 & Blockchain</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Solana', 'Rust', 'Web3.js', 'Anchor', 'Smart Contracts', 'DeFi'].map((tech) => (
                      <Badge key={tech} className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 font-poppins">Web Scraping & Python</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Python', 'Scrapy', 'BeautifulSoup', 'Selenium', 'Pandas', 'FastAPI'].map((tech) => (
                      <Badge key={tech} className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 font-poppins">Tools & DevOps</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Docker', 'AWS', 'Redis', 'MongoDB', 'Git', 'Prisma'].map((tech) => (
                      <Badge key={tech} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                I'm currently available for freelance work and open to discussing new opportunities. 
                If you have a project in mind, feel free to reach out!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              
              <Card className="relative bg-slate-800/70 border-slate-600/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 rounded-2xl overflow-hidden">
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative text-center pb-8 pt-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-white font-poppins mb-2">Get In Touch</CardTitle>
                  <CardDescription className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
                    Have a project in mind? Let's collaborate and bring your vision to life!
                  </CardDescription>
            </CardHeader>
                
                <CardContent className="relative px-8 pb-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <Input 
                          placeholder="First Name" 
                          className="bg-slate-900/70 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 h-12 rounded-xl group-hover:border-slate-500 backdrop-blur-sm" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      <div className="relative group">
                        <Input 
                          placeholder="Last Name" 
                          className="bg-slate-900/70 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 h-12 rounded-xl group-hover:border-slate-500 backdrop-blur-sm" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        className="bg-slate-900/70 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 h-12 rounded-xl group-hover:border-slate-500 backdrop-blur-sm" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <div className="relative group">
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="bg-slate-900/70 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 min-h-[140px] rounded-xl resize-none group-hover:border-slate-500 backdrop-blur-sm" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold py-4 text-lg transition-all duration-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-[1.02] group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center justify-center">
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                </div>
              </form>
            </CardContent>
          </Card>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800/50 border-slate-600/50 text-center p-8 backdrop-blur-xl rounded-2xl hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-cyan-500/10 group">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-white font-poppins text-lg group-hover:text-cyan-400 transition-colors duration-300">Email</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 text-sm">anaskhan.dev786@gmail.com</p>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800/50 border-slate-600/50 text-center p-8 backdrop-blur-xl rounded-2xl hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-blue-500/10 group">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-white font-poppins text-lg group-hover:text-blue-400 transition-colors duration-300">Phone</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 text-sm">+91 9588074262</p>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-800/50 border-slate-600/50 text-center p-8 backdrop-blur-xl rounded-2xl hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-purple-500/10 group">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-white font-poppins text-lg group-hover:text-purple-400 transition-colors duration-300">Location</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 text-sm">Jodhpur, Rajasthan, India</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-slate-800/50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  Anas Khan
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Full-stack developer specializing in React, Next.js, Blockchain, and AI development. 
                  Creating elegant solutions for complex problems.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/AnasKhan321" target="_blank">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300 group hover:shadow-md hover:shadow-cyan-500/20"
                      title="GitHub Profile"
                    >
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/anas-khan-93b643286/" target="_blank">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300 group hover:shadow-md hover:shadow-blue-500/20"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link href="https://x.com/ANASKHA96399553" target="_blank">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300 group hover:shadow-md hover:shadow-purple-500/20"
                      title="Twitter Profile"
                    >
                      <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a></li>
                  <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Contact Info</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>anaskhan.dev786@gmail.com</li>
                  <li>+91 9588074262</li>
                  <li>Jodhpur, Rajasthan, India</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800/50 mt-12 pt-8 text-center">
              <p className="text-slate-400">
                © 2025 Anas Khan. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Crafted with passion and powered by cutting-edge web technologies.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}