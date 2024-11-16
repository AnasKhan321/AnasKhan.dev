"use client"
import { useState   , useEffect, useRef} from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Menu , X   , Twitter } from 'lucide-react'
import {Libre_Baskerville}  from "next/font/google"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Project {
  title : string , 
  description : string , 
  url : string , 
  imageurl : string ,
  type : string , 
  id : string  
}

interface Skill {
  name : string , 
  level : string
}

const libreBask = Libre_Baskerville({
  weight: ['400'],
  subsets: ['latin'],
})

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




const Projects : Project[] = [
  {
    title : "Watchify"  , 
    description : "This project is an HLS adaptive streaming app, similar to Netflix, built using Next.js, Prisma, Docker, AWS ECS, AWS S3, Tailwind CSS, and Shadcn UI. The app provides a seamless, high-quality video streaming experience with adaptive bitrate streaming, ensuring smooth playback across various network conditions and devices."  , 
    imageurl : "https://s3.ap-south-1.amazonaws.com/hls.anaskhan/66.png"  , 
    id : "1"  , 
    type : "Full Stack Development" , 
    url : "https://watchify-topaz.vercel.app/"
  } , 
  {
    title : "LuckyLift"  , 
    description : "LuckyLift is a dynamic betting app designed to showcase both advanced full-stack development and web scraping skills. Built using Next.js for the frontend, Node.js for backend functionality, Tailwind CSS and Shadcn UI for a modern, responsive design, and Prisma with PostgreSQL for efficient database management, LuckyLift combines a seamless user experience with powerful backend capabilities."  , 
    imageurl : "https://s3.ap-south-1.amazonaws.com/hls.anaskhan/luckylift.png"  , 
    id : "2"  , 
    type : "Web Scraping" , 
    url : "https://watchify-topaz.vercel.app/"

  },
  {
    title : "CodeWithBat"  , 
    description : "CodeWith Bat is a web application built to manage and enforce access control using an efficient ACL (Access Control List) system. Developed with Next.js, PostgreSQL, Tailwind CSS, Shadcn UI, and Node.js, the app provides secure, as a I admin only I can add courses and tutorials in it"  , 
    imageurl : "https://s3.ap-south-1.amazonaws.com/hls.anaskhan/cwb.png"  , 
    id : "3"  , 
    type : "Full Stack Development" , 
    url : "https://cwb-client.vercel.app/"

  },

  {
    title : "TwitterClone"  , 
    description : "This Twitter clone is a full-stack web app built with Next.js, Prisma, PostgreSQL, Node.js, Tailwind CSS, and GraphQL. It replicates core Twitter features such as user authentication, tweeting, and interactions, all within a responsive, modern UI."  , 
    imageurl : "https://s3.ap-south-1.amazonaws.com/hls.anaskhan/tw.png"  , 
    id : "4"  , 
    type : "Full Stack Development " , 
    url : "https://twitter-clone-client-alpha.vercel.app/"

  },

  {
    title : "Tomato Detection"  , 
    description : "This Tomato Leaf Detection project leverages a Convolutional Neural Network (CNN) built with TensorFlow to accurately identify diseases in tomato leaves. The backend is developed with FastAPI in Python, enabling efficient processing and prediction serving, while the frontend is created with React.js, styled using Tailwind CSS for a modern, responsive design. Users can upload images of tomato leaves, which are analyzed in real-time to provide disease detection results, helping farmers and gardeners take preventive measures. This integration of advanced machine learning with a streamlined UI makes the application both powerful and user-friendly."  , 
    imageurl : "https://s3.ap-south-1.amazonaws.com/hls.anaskhan/tomat.png"  , 
    id : "5"  , 
    type : "Machine Learning" , 
    url : "https://tomato-leaf-detection-frontend-9y2k.vercel.app/"

  },


]


const skills  : Skill[] = [
  {
    name : "React Js "  , 
    level : "Expert"
  }  , 
  {
    name : "Next Js"  , 
    level : "Intermediate"
  } , {
    name : "Docker"  , 
    level :"Intermediate"
  }  , {

    name : "Node Js "  , 
    level : "Intermediate"
  }  , 

  {
    name : "Python" , 
    level : "Intermediate"
  }  , 
  {
    name : "Redis" , 
    level : "Intermediate"
  } , 

  {
    name : "Tailwind CSS" , 
    level : "Expert"
  } , 


  {
    name : "TypeScript" , 
    level : "Intermediate"
  } , 

  {
    name : "PostgreSQL" , 
    level : "Intermediate"
  } , 


  {
    name : "AWS" , 
    level : "Beginner"
  } , 
  {
    name : "MongoDB"   , 
    level : "Intermediate"
  } , 
  {
    name : "SQL"  , 
    level : "Intermediate"
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
    <div className={`  min-h-screen bg-gradient-to-br from-[#000000] via-[#14213d] to-[#fca311] text-[#e5e5e5]`}>
      <header className={`sticky top-0 z-10 ${isScrolled? "bg-[#000000]/50"  : "bg-black"} transition-all     backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fca311] to-[#e5e5e5]">Anas Khan</h1>
          <nav className="hidden md:flex space-x-4">
            <a id="#about" onClick={()=>{handlref(aboutref)}} ref={aboutref} className="  cursor-pointer  text-[#e5e5e5] hover:text-[#fca311] transition-colors">About</a>
            <a id="#projects"  onClick={()=>{handlref(projectref)}}   ref={projectref} className="  cursor-pointer  text-[#e5e5e5] hover:text-[#fca311] transition-colors">Projects</a>
            <a id="#skills"    onClick={()=>{handlref(skillref)}} ref={skillref} className="  cursor-pointer  text-[#e5e5e5] hover:text-[#fca311] transition-colors">Skills</a>
            <a id="#contact" onClick={()=>{handlref(contactref)}} ref={contactref} className="  cursor-pointer  text-[#e5e5e5] hover:text-[#fca311] transition-colors">Contact</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-[#e5e5e5]" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-[#000000]/95 flex items-center justify-center md:hidden">
          <nav className="flex flex-col space-y-4 text-center items-center ">
            <a  id="#about" className="text-2xl text-[#e5e5e5] hover:text-[#fca311] transition-colors" onClick={toggleMenu}>About</a>
            <a id="#projects" className="text-2xl text-[#e5e5e5] hover:text-[#fca311] transition-colors" onClick={toggleMenu}>Projects</a>
            <a id="#skills" className="text-2xl text-[#e5e5e5] hover:text-[#fca311] transition-colors" onClick={toggleMenu}>Skills</a>
            <a id="#contact" className="text-2xl text-[#e5e5e5] hover:text-[#fca311] transition-colors" onClick={toggleMenu}>Contact</a>
            <div className='text-center' onClick={toggleMenu}>
            <X className="text-center text-2xl "/> 

            </div>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 py-16">
        <section id="about" className="mb-20 flex flex-col md:flex-row items-center gap-12 justify-between">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#fca311] to-[#e5e5e5]">Hello, I&apos;m Anas Khan</h2>
            <p className="text-xl mb-6 text-[#e5e5e5]">
            I&apos;m Anas Khan, a passionate web developer and web scraper from Jodhpur, Rajasthan. I specialize in building dynamic web applications and extracting valuable data from online sources, constantly honing my skills to create efficient, impactful solutions.
            </p>
            <div className="flex space-x-4">
              <Link  href="https://github.com/AnasKhan321"  target="blank"> 
              <Button variant="outline" size="icon" className="bg-[#14213d] hover:bg-[#fca311] text-[#e5e5e5] hover:text-[#000000] transition-colors">
                <Github className="h-5 w-5" />
              </Button></Link>

              <Link  href="https://www.linkedin.com/in/anas-khan-93b643286/" target="blank"> 
              <Button variant="outline" size="icon" className="bg-[#14213d] hover:bg-[#fca311] text-[#e5e5e5] hover:text-[#000000] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button></Link>

              <Link  href="https://x.com/ANASKHA96399553"  target="blank">
              <Button variant="outline" size="icon" className="bg-[#14213d] hover:bg-[#fca311] text-[#e5e5e5] hover:text-[#000000] transition-colors">
                <Twitter className="h-5 w-5" />
              </Button></Link>
            </div>
          </div>
          <div className="w-[320px] profileimage  ">
          
            <img
              src="https://s3.ap-south-1.amazonaws.com/hls.anaskhan/profileimage.jpg"
              alt="Anas Khan"
              className=" p-image   transition-all  cursor-pointer rounded-full w-80 h-80 object-cover mx-auto "
            />
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fca311] to-[#e5e5e5]">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project) => (
              <Card key={project.id} className="bg-[#14213d] border-[#fca311] overflow-hidden group  mt-10  cursor-pointer">
              <CardHeader className="p-0">
                <img
                  src={project.imageurl}
                  alt={`${project.title} screenshot`}
                  className="w-full  h-64 object-cover cursor-pointer transition-transform group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className={`text-2xl font-bold text-[#fca311] ${libreBask.className}`}>{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-[#fca311] text-[#000000]">{project.type}</Badge>
                </div>
                <CardDescription className="text-[#e5e5e5] tracking-wider">{project.description.substring(0, 200 )}</CardDescription>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link href={project.url} target="blank" >
                <Button className="w-full bg-[#fca311] text-[#000000] font-bold hover:bg-[#e5e5e5] transition-colors">View Project</Button> </Link>
              </CardFooter>
            </Card>
          ))}
        
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fca311] to-[#e5e5e5]">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill , index ) => (
              <Card key={index} className="bg-[#14213d] border-[#fca311] text-center p-6 hover:bg-[#fca311] hover:text-[#000000] transition-colors group  cursor-pointer  ">
                <CardTitle className="text-xl mb-2 text-[#fca311] group-hover:text-[#000000]">{skill.name}</CardTitle>
                <CardDescription className="text-[#e5e5e5] group-hover:text-[#14213d] tracking-wider">{skill.level}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fca311] to-[#e5e5e5]">Get in Touch</h2>
          <Card className="bg-[#14213d] border-[#fca311]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#fca311]">Contact Me</CardTitle>
              <CardDescription className="text-[#e5e5e5]">Have a project in mind? Let&apos;s collaborate and bring your vision to life!</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder:text-[#e5e5e5]/50" />
                  <Input placeholder="Last Name" className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder:text-[#e5e5e5]/50" />
                </div>
                <Input type="email" placeholder="Email" className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder:text-[#e5e5e5]/50" />
                <Textarea placeholder="Your message" className="bg-[#000000] border-[#fca311] text-[#e5e5e5] placeholder:text-[#e5e5e5]/50" />
                <Button type="submit" className="w-full bg-[#fca311] text-[#000000] font-bold hover:bg-[#e5e5e5] transition-colors">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-[#000000] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#e5e5e5]">&copy; 2023 Anas Khan. All rights reserved.</p>
          <p className="mt-2 text-sm text-[#e5e5e5]/75">Crafted with passion and powered by cutting-edge web technologies.</p>
        </div>
      </footer>
    </div>
  )
}