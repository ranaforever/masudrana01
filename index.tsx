import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Facebook, 
  FileText, 
  Send, 
  ChevronRight, 
  CheckCircle2, 
  Search, 
  Edit3, 
  Layout, 
  BarChart3,
  Menu,
  X,
  ExternalLink,
  Quote,
  Target,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Definitions ---

const SKILLS = [
  { name: "Content Moderation", level: 98, icon: <ShieldCheck className="w-5 h-5" /> },
  { name: "Quality Assurance (QA)", level: 95, icon: <CheckCircle2 className="w-5 h-5" /> },
  { name: "Policy Compliance", level: 92, icon: <FileText className="w-5 h-5" /> },
  { name: "Metrics Analysis", level: 88, icon: <BarChart3 className="w-5 h-5" /> },
  { name: "SME Support", level: 90, icon: <Award className="w-5 h-5" /> },
  { name: "Digital Strategy", level: 85, icon: <Target className="w-5 h-5" /> },
];

const EXPERIENCE = [
  {
    role: "Content Specialist",
    company: "STALAR TECHNOLOGY PTE. LTD.",
    location: "Singapore | Remote",
    period: "Jan 2025 - Present",
    achievements: [
      "Monitoring and moderating high volumes of content to ensure compliance with company policies and local regulations.",
      "Identifying and escalating harmful, inappropriate, or policy-violating content using context-sensitive judgment.",
      "Applying deep regional understanding to make critical moderation decisions in a fast-paced environment.",
      "Collaborating with internal teams to continuously improve digital moderation practices and accuracy targets."
    ]
  },
  {
    role: "SME - QA (Quality Assurance)",
    company: "Genex Infosys Limited",
    location: "Dhaka, Bangladesh | On-site",
    period: "Nov 2023 - Jan 2025",
    achievements: [
      "Conducted comprehensive audits of customer interactions, providing actionable feedback to drive agent performance.",
      "Analyzed quality metrics and trends to identify patterns and drive large-scale process enhancements.",
      "Streamlined the QA process by implementing new evaluation frameworks, reducing review time by 50-60%.",
      "Supported cross-functional teams in addressing complex customer cases, ensuring swift resolution."
    ]
  },
  {
    role: "Digital Quality Analyst",
    company: "Creative Pulse Media",
    location: "Remote",
    period: "2019 - 2021",
    achievements: [
      "Developed automated quality checklists for cross-functional creative teams.",
      "Reviewed over 500+ digital assets monthly to ensure brand consistency.",
      "Collaborated with project managers to maintain high-standard deliverables for international clients."
    ]
  }
];

const PROJECTS = [
  {
    title: "Global Content Compliance",
    category: "Moderation",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    desc: "Implementation of policy-driven moderation frameworks for multi-regional digital platforms."
  },
  {
    title: "QA Process Optimization",
    category: "Quality Assurance",
    img: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=800&q=80",
    desc: "Strategic redesign of evaluation workflows that achieved a 60% efficiency boost in review times."
  },
  {
    title: "Regional Policy Mapping",
    category: "Strategy",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
    desc: "In-depth analysis and application of regional legal frameworks to digital content moderation."
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    text: "Masud's attention to detail is unmatched. He completely transformed our QA process, making it far more efficient than we ever expected.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Content Lead",
    text: "An absolute expert in content policy. Masud's ability to handle high-pressure moderation scenarios with poise is impressive.",
    rating: 5
  }
];

const CV_LINK = "https://drive.google.com/file/d/116xcfgDdtnqbW_WTShABaIiX029_8fZI/view?usp=sharing";

// --- Helper Functions ---

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'skills', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section === 'home' && scrollPosition < 500) {
          setActiveSection('home');
          continue;
        }
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Reviews', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setIsOpen(false);
    scrollToSection(e, id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          MASUD<span className="text-blue-500">RANA</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm transition-all tracking-wide uppercase relative group ${activeSection === link.href ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                />
              )}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-slate-950 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className={`text-3xl font-bold transition-colors ${activeSection === link.href ? 'text-blue-500' : 'text-white hover:text-blue-500'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-4 px-10 py-4 bg-blue-600 rounded-full text-xl font-bold text-white shadow-xl shadow-blue-500/30"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Section = ({ id, title, children, className = "" }: { id: string; title?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 px-6 md:py-32 ${className}`}>
    <div className="container mx-auto">
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{title}</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">
                Open to Opportunities
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
              Quality <br />
              <span className="gradient-text">Excellence</span> <br />
              Expert.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
              I'm <span className="text-white font-bold">Masud Rana</span>. A Content Specialist & Quality Analyst focused on high-precision moderation and streamlined QA frameworks.
            </p>
            <div className="flex flex-wrap gap-5">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold flex items-center gap-3 transition-all hover:translate-y-[-4px] shadow-2xl shadow-blue-500/30 text-white"
              >
                Contact Me <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold flex items-center gap-3 transition-all backdrop-blur-sm text-white"
              >
                Download CV <FileText className="w-5 h-5 text-blue-500" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white/5 shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)] bg-slate-900 aspect-square md:aspect-auto">
              <img 
                src="https://i.ibb.co/jZxd3DGg/image-1-1.jpg" 
                alt="Masud Rana - Content Specialist" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-slate-900/90 border border-white/10 backdrop-blur-xl p-6 rounded-3xl z-20 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Compliance Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="Professional Bio" className="bg-slate-900/30">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-white leading-tight uppercase">
              A Context-Sensitive <br />
              <span className="text-blue-500">Moderation Specialist.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Based on my experience across Singapore and Bangladesh, I specialize in navigating complex digital landscapes. I combine policy expertise with operational efficiency to maintain safe and high-quality online environments.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My recent work focuses on scaling moderation accuracy and streamlining QA evaluation frameworks, reducing operational overhead by over 50%.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
                <Globe className="text-blue-500" />
                <span className="font-semibold text-gray-200 text-sm">Regional Policy Expert</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
                <Zap className="text-blue-500" />
                <span className="font-semibold text-gray-200 text-sm">Process Optimizer</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="p-8 rounded-[32px] bg-slate-800/40 border border-white/5 hover:border-blue-500/40 transition-all group text-center">
                <ShieldCheck className="text-blue-500 mb-4 mx-auto" size={40} />
                <h4 className="text-xl font-bold mb-2">Policy Mastery</h4>
                <p className="text-sm text-gray-400 tracking-tighter">Ensuring 100% compliance with local and global regulations.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="p-8 rounded-[32px] bg-slate-800/40 border border-white/5 hover:border-purple-500/40 transition-all group text-center">
                <BarChart3 className="text-purple-500 mb-4 mx-auto" size={40} />
                <h4 className="text-xl font-bold mb-2">Efficiency</h4>
                <p className="text-sm text-gray-400 tracking-tighter">Reducing QA review cycles by 60% through framework innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work History">
        <div className="max-w-4xl mx-auto space-y-16">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/4">
                  <span className="text-sm font-black bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-600/30 whitespace-nowrap">
                    {exp.period}
                  </span>
                  <p className="mt-3 text-xs text-gray-500 font-bold uppercase tracking-widest">{exp.location}</p>
                </div>
                <div className="md:w-3/4 p-8 md:p-10 rounded-[40px] bg-slate-800/20 border border-white/5 group-hover:bg-slate-800/40 transition-all group-hover:border-blue-500/20">
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors uppercase">{exp.role}</h3>
                  <p className="text-lg text-gray-500 font-bold mb-6 tracking-tight uppercase">{exp.company}</p>
                  <ul className="space-y-4">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-4 text-gray-400 text-base leading-relaxed">
                        <span className="text-blue-500 font-bold mt-1.5"><CheckCircle2 size={16} /></span> 
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Core Expertise" className="bg-slate-900/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-800/30 rounded-[35px] border border-white/5 hover:border-blue-500/30 transition-all relative overflow-hidden group"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <h4 className="font-black text-xl uppercase tracking-tight">{skill.name}</h4>
              </div>
              <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden mb-4 p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-700 to-blue-400 rounded-full"
                ></motion.div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500 font-black uppercase tracking-widest">
                <span>Proficiency</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" title="Featured Work">
        <div className="grid lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group rounded-[45px] overflow-hidden bg-slate-900 border border-white/5 relative flex flex-col h-full shadow-2xl"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  {project.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <a href="#" className="inline-flex items-center text-xs font-black text-blue-500 uppercase tracking-widest gap-2 group/btn">
                    Read Case Study <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" title="Client References" className="bg-slate-900/30">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-slate-800/20 border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-xs text-gray-500 uppercase font-black tracking-widest">{testimonial.role}</p>
                </div>
              </div>
              <Quote className="absolute top-10 right-10 text-white/5" size={60} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Establish Connection">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-4xl font-black mb-6 leading-tight uppercase tracking-tighter">Let's discuss <br /> <span className="text-blue-500">Excellence.</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm available for professional consultation on content strategy, moderation quality, and QA process optimization.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:office.masud7262@gmail.com" className="flex items-center gap-6 p-6 rounded-[25px] bg-slate-800/20 hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700 group">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="font-bold text-lg">office.masud7262@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/8801625989806" target="_blank" className="flex items-center gap-6 p-6 rounded-[25px] bg-slate-800/20 hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700 group">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="font-bold text-lg">+880 1625 989806</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/ranaforever/" target="_blank" className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-[#0077b5] transition-all hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href="https://www.facebook.com/ranaforever46/" target="_blank" className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-[#1877f2] transition-all hover:-translate-y-1">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <form className="lg:col-span-7 p-10 md:p-14 bg-slate-800/30 rounded-[50px] border border-white/5 space-y-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-5 focus:outline-none focus:border-blue-600 transition-colors font-medium text-white" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email</label>
                <input type="email" placeholder="example@email.com" className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-5 focus:outline-none focus:border-blue-600 transition-colors font-medium text-white" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
              <textarea placeholder="How can I help you?" rows={5} className="w-full bg-slate-950 border-2 border-slate-800 rounded-[30px] px-6 py-5 focus:outline-none focus:border-blue-600 transition-colors resize-none font-medium text-white"></textarea>
            </div>
            <button className="w-full py-6 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all hover:scale-[1.02] shadow-2xl shadow-blue-500/40 active:scale-95 group text-white">
              Send Message <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-slate-950 relative overflow-hidden text-center md:text-left">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className="text-3xl font-black tracking-tighter mb-6 block"
              >
                MASUD<span className="text-blue-500">RANA</span>
              </a>
              <p className="text-gray-500 text-lg max-w-sm leading-relaxed mb-8 mx-auto md:mx-0">
                Maintaining digital integrity through context-aware moderation and SME-level QA.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h5>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-400">About</a></li>
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-blue-400">Portfolio</a></li>
                <li><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:text-blue-400">Reviews</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black uppercase tracking-widest text-sm mb-8">Legal</h5>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 font-medium">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Masud Rana. Professional Portfolio.</p>
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-500 text-xs font-black uppercase tracking-widest">Available for Remote Projects</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);