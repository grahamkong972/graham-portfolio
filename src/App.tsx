import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail,  
  Dna, 
  Database, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronDown,
  Code2,
  Award,
  BookOpen,
  Zap,
  Globe,
  Server
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "AI-SITE: Strategic Data Centers",
      event: "GovHack 2024 - Team Grid Gurus",
      description: "A robust scoring system and analytical framework identifying optimal locations for data centres across Australia. We integrated Principal Component Analysis (PCA) to combine connectivity, energy costs, climate risk, and population access into a single suitability metric.",
      tags: ["R / Shiny", "PCA Analysis", "Geospatial Data", "Infrastructure Planning"],
      icon: <Database className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500 to-indigo-400",
      link: "https://grahamkong972.shinyapps.io/govhackweb/"
    },
    {
      title: "Sharks From Space",
      event: "NASA Space Apps 2025 - Team Baby Sharks",
      description: "Created a mathematical framework to track top predators using NASA satellite data. The project suggests a new tag model to measure shark location and feeding habits, transmitting real-time data to predict foraging habitats and aid marine conservation.",
      tags: ["R / Shiny", "Marine Conservation", "NASA Data", "Predictive Modeling"],
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500 to-cyan-400",
      link: "https://grahamkong972.shinyapps.io/NASASpaceChallenge/"
    },
    {
      title: "Toohak Backend",
      event: "COMP1531 Major Project",
      description: "Built a full-stack compliant backend for a Kahoot-like quiz platform. Migrated codebase from JavaScript to TypeScript, implemented robust user session management, secure password hashing, and extensive black-box testing with Jest. Managed CI/CD pipelines via GitLab.",
      tags: ["TypeScript", "Express.js", "Jest", "CI/CD", "Auth & Sessions"],
      icon: <Server className="w-6 h-6 text-orange-400" />,
      color: "from-orange-500 to-red-400",
      link: null // Private repo usually
    },
    {
      title: "Pokemon Showdown (Graham's Edition)",
      event: "Software Design and Development Major Project",
      description: "Developed a 2D battle simulator in Unity (C#). Engineered a custom Stack Machine architecture to manage complex battle states and turn logic, replacing inefficient legacy code. Features a fully functional Team Builder with import/export (text file) capabilities, accurate stat/damage calculations, and type effectiveness logic.",
      tags: ["Unity", "C#", "State Pattern", "Game Development"],
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-500 to-green-400",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            GK.
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-200 hover:text-teal-400'
                }`}
              >
                {item}
              </button>
            ))}
            <button className="px-4 py-2 border border-teal-500 text-teal-400 rounded-full hover:bg-teal-500/10 transition-all text-sm font-medium">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 md:hidden">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-left text-lg font-medium ${
                  activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-200 hover:text-teal-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 text-sm text-teal-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Available for collaborations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Graham Kong
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              First-year <span className="text-slate-200 font-medium">Advanced Science (Bioinformatics)</span> & <span className="text-slate-200 font-medium">Computer Science</span> student at UNSW. Bridging the gap between biological data and computational logic.
            </p>

            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/grahamkong972" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/graham-kong-a8a175278/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:grahamkong21006@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Abstract Code/Bio Visual */}
            <div className="w-full h-96 bg-slate-900 rounded-2xl border border-slate-800 p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
              <div className="font-mono text-sm space-y-2 opacity-80">
                <div className="text-purple-400">class <span className="text-yellow-300">GrahamKong</span> <span className="text-slate-400">extends</span> <span className="text-yellow-300">Student</span>:</div>
                <div className="pl-4 text-blue-400">def <span className="text-yellow-300">__init__</span>(self):</div>
                <div className="pl-8 text-slate-300">self.university = <span className="text-green-400">"UNSW"</span></div>
                <div className="pl-8 text-slate-300">self.majors = [<span className="text-green-400">"Bioinformatics"</span>, <span className="text-green-400">"CompSci"</span>]</div>
                <div className="pl-8 text-slate-300">self.interests = [<span className="text-green-400">"Genomics"</span>, <span className="text-green-400">"AI"</span>, <span className="text-green-400">"Fullstack"</span>]</div>
                <div className="pl-4 text-slate-500"># Current Status</div>
                <div className="pl-4 text-blue-400">def <span className="text-yellow-300">study_hard</span>(self):</div>
                <div className="pl-8 text-slate-300">return <span className="text-purple-400">True</span></div>
              </div>
              
              {/* Floating Icons */}
              <Dna className="absolute bottom-10 right-10 w-20 h-20 text-teal-500/20 animate-pulse" />
              <Code2 className="absolute top-10 right-10 w-16 h-16 text-blue-500/20" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </div>
      </section>

      {/* About Stats Section */}
      <section id="about" className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Year", value: "1st", icon: <BookOpen className="w-5 h-5 mb-2 text-teal-400" /> },
              { label: "University", value: "UNSW", icon: <Award className="w-5 h-5 mb-2 text-blue-400" /> },
              { label: "Projects", value: "4+", icon: <Code2 className="w-5 h-5 mb-2 text-purple-400" /> },
              { label: "Focus", value: "Bio-Tech", icon: <Dna className="w-5 h-5 mb-2 text-green-400" /> },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center hover:border-teal-500/50 transition-colors">
                <div className="flex flex-col items-center justify-center">
                  {stat.icon}
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl">
              A selection of work from hackathons, university coursework, and personal initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
                {/* Top Gradient Bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-800 rounded-lg">
                      {project.icon}
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="mb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-teal-500">{project.event}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      View Project <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-10">
            I'm currently looking for new opportunities, hackathon teammates, or just people to chat about bioinformatics and code.
          </p>
          
          <a 
            href="mailto:grahamkong21006@gmail.com" 
            className="inline-flex items-center space-x-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-lg transition-all transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </a>

          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Graham Kong. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/grahamkong972" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/graham-kong-a8a175278/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a>
              <a href="mailto:grahamkong21006@gmail.com" className="hover:text-teal-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}