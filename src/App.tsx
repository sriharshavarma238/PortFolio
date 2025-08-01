import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  BookOpen
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'HTML5', level: 90, icon: Code, color: 'bg-orange-500' },
    { name: 'CSS3', level: 85, icon: Palette, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, icon: Code, color: 'bg-yellow-500' },
    { name: 'React.js', level: 75, icon: Code, color: 'bg-cyan-500' },
    { name: 'Responsive Design', level: 85, icon: Smartphone, color: 'bg-green-500' },
    { name: 'UI/UX Design', level: 70, icon: Palette, color: 'bg-purple-500' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Dynamic AI-Powered Website',
      description: 'A modern, responsive website built using AI tools like Lovable and Figma. Features dynamic content, interactive elements, and a sleek user interface with smooth animations and professional design.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['AI Tools', 'Lovable', 'Figma', 'Responsive Design'],
      live: 'http://p-375524.lovable.app',
      featured: true
    },
    {
      id: 2,
      title: 'NxtQuiz - Interactive Quiz Platform',
      description: 'A comprehensive quiz game platform built with React.js featuring an intuitive interface for testing knowledge across various topics. The application includes interactive question navigation, real-time score tracking, and detailed result analysis with performance feedback.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
      live: 'https://quiz-game-one-opal.vercel.app/',
    },
    {
      id: 3,
      title: 'Jobby App',
      description: 'A comprehensive job search platform built with React.js. Features job listings, search functionality, filtering options, and user authentication. Responsive design ensures optimal experience across all devices. Login with username: rahul, password: rahul@2021',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
      live: 'https://jobby-sooty.vercel.app/',
      credentials: { username: 'rahul', password: 'rahul@2021' }
    },
    {
      id: 4,
      title: 'Tasty Kitchen',
      description: 'A food delivery application with an intuitive interface for browsing restaurants and ordering food. Built with React.js, featuring cart functionality, restaurant listings, and responsive design for seamless user experience. Login with username: rahul, password: rahul@2021',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
      live: 'https://tasty-kitchen-ivory.vercel.app/',
      credentials: { username: 'rahul', password: 'rahul@2021' }
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'NxtWave Institute Of Advanced Technologies',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      period: '2024 - 2028',
      description: 'Currently pursuing BSc in Computer Science with focus on web development, programming fundamentals, and software engineering principles. Learning modern technologies and building practical projects.',
      achievements: ['Frontend Development Specialization', 'Web Technologies Focus', 'Active in Coding Communities']
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harsha Varma
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Computer Science student passionate about creating beautiful, responsive web applications. 
            Specializing in modern frontend technologies and user experience design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 ${isDark ? 'border-blue-400 text-blue-400 hover:bg-blue-400' : ''}`}
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sriharshavarma238" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/sriharshavarmadasaraju" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:sriharshavarma238@gmail.com" className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Passionate student developer with a creative mindset</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1`}>
                <div className={`w-full h-full rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`}>
                  <img 
                    src="/src/assets/linkedin photo.jpg" 
                    alt="Profile" 
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Hi, I'm Dasaraju Sri Harsha Varma</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate Computer Science student specializing in frontend development. Currently pursuing my 
                BSc degree at NxtWave Institute Of Advanced Technologies, I have developed strong skills in modern web 
                technologies including HTML5, CSS3, JavaScript, and React.js.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I love creating responsive, user-friendly web applications that provide excellent user experiences. 
                My journey in web development has been driven by curiosity and a desire to build innovative digital 
                solutions. I'm always eager to learn new technologies and take on challenging projects.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>CS Student</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span>Frontend Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>Continuous Learner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>3+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Frontend technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="flex items-center mb-4">
                  <skill.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-3 ${isDark ? 'bg-gray-700' : ''}`}>
                  <div 
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <div className="mt-2 text-right">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Frontend applications I've built</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`rounded-xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group ${project.featured ? 'lg:col-span-2' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  {project.credentials && (
                    <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'}`}>
                      <p className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-800'} mb-1`}>Login Credentials:</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Username: <span className="font-mono font-semibold">{project.credentials.username}</span> | 
                        Password: <span className="font-mono font-semibold">{project.credentials.password}</span>
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>My academic journey</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu) => (
              <div key={edu.id} className={`p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-lg text-blue-600">{edu.field}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{edu.period}</p>
                </div>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Let's connect and discuss opportunities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                  I'm always interested in learning about new opportunities, collaborating on projects, 
                  or just having a conversation about web development. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-blue-100'}`}>
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>sriharshavarma238@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-blue-100'}`}>
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Status</h4>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Computer Science Student</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/sriharshavarma238" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-lg`}>
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/sriharshavarmadasaraju" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-lg`}>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:sriharshavarma238@gmail.com" className={`p-4 rounded-full transition-all duration-200 hover:scale-110 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-lg`}>
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300'
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Dasaraju Sri Harsha Varma. Built with React & Tailwind CSS.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://github.com/sriharshavarma238" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sriharshavarmadasaraju" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:sriharshavarma238@gmail.com" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;