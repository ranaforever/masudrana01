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
  Star,
  Filter,
  ArrowUp,
  Activity,
  UserCheck,
  ScanSearch,
  Cpu,
  Maximize2,
  Medal
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

const CERTIFICATIONS = [
  {
    title: "Quantigo AI Professional Certification",
    issuer: "Quantigo AI",
    date: "2024",
    link: "https://drive.google.com/file/d/1VrPx_guAWuKf90e7ziQ4aKuAEuVEkPkZ/view?usp=sharing",
    icon: <Cpu className="w-6 h-6" />,
    description: "Verified expertise in AI-driven data processing and high-precision quality standards."
  }
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
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    desc: "Strategic redesign of evaluation workflows that achieved a 60% efficiency boost in review times."
  },
  {
    title: "Regional Policy Mapping",
    category: "Strategy",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
    desc: "In-depth analysis and application of regional legal frameworks to digital content moderation."
  }
];

const CV_LINK = "https://drive.google.com/file/d/116xcfgDdtnqbW_WTShABaIiX029_8fZI/view?usp=sharing";

// --- Helper Functions ---

const scrollToSection = (e: React.MouseEvent | null, id: string) => {
  if (e) e.preventDefault();
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

// --- Specialized Components ---

const HudProfile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      className="relative w-full max-w-[380px] mx-auto lg:mr-0"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="absolute w-[115%] h-[115%] border border-cyan-500/20 rounded-full animate-[spin_12s_linear_infinite]"></div>
        <div className="absolute w-[130%] h-[130%] border border-dashed border-purple-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
      </div>

      <div className="absolute -top-3 -left-3 w-12 h-12 border-t-[3px] border-l-[3px] border-cyan-500/50 rounded-tl-[30px] z-20"></div>
      <div className="absolute -top-3 -right-3 w-12 h-12 border-t-[3px] border-r-[3px] border-cyan-500/50 rounded-tr-[30px] z-20"></div>
      <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-[3px] border-l-[3px] border-purple-500/50 rounded-bl-[30px] z-20"></div>
      <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-[3px] border-r-[3px] border-purple-500/50 rounded-br-[30px] z-20"></div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.4)] group aspect-[10/12.5]"
      >
        <img 
          src="https://i.ibb.co/jZxd3DGg/image-1-1.jpg" 
          alt="Masud Rana" 
          className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
        />

        <motion.div 
          animate={{ top: ["-10%", "110%", "-10%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 opacity-60 pointer-events-none"
        ></motion.div>

        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 font-mono">
          <div className="flex justify-between items-start">
            <div className="bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 px-2.5 py-1 rounded-md flex items-center gap-2">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-black text-cyan-400 uppercase">Integrity_Secure</span>
            </div>
            <div className="text-[7px] text-white/30 uppercase tracking-widest text-right">Sys_Status: 100%</div>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-[8px] text-cyan-500/60 font-black tracking-tighter">L-ID: 29384-MR</div>
            <div className="text-[8px] text-purple-400 font-bold">QA_CORE_LOAD</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 bg-slate-900/95 border border-white/10 backdrop-blur-2xl px-4 py-3 rounded-2xl z-30 shadow-2xl flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400"><ShieldCheck size={16} /></div>
        <div><div className="text-sm font-black text-white leading-none">100%</div><div className="text-[7px] text-gray-500 font-bold uppercase mt-0.5">Trust</div></div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 8, 0], x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-6 bg-slate-900/95 border border-white/10 backdrop-blur-2xl px-4 py-3 rounded-2xl z-30 shadow-2xl flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400"><ScanSearch size={16} /></div>
        <div><div className="text-sm font-black text-white leading-none">+60%</div><div className="text-[7px] text-gray-500 font-bold uppercase mt-0.5">Audit</div></div>
      </motion.div>
    </motion.div>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const response = await fetch('https://formspree.io/f/office.masud7262@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch (err) {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:col-span-7 p-10 md:p-14 bg-slate-800/30 rounded-[60px] border border-cyan-500/30 flex flex-col items-center justify-center text-center space-y-6 shadow-[0_0_50px_rgba(34,211,238,0.1)] h-full min-h-[400px]"
      >
        <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 animate-bounce">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter">Transmission Complete</h3>
        <p className="text-gray-400 max-w-sm font-medium">Your message has been securely sent to office.masud7262@gmail.com. I will respond shortly.</p>
        <button 
          onClick={() => setFormState('idle')}
          className="text-xs font-black text-cyan-400 uppercase tracking-widest hover:underline pt-4"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="lg:col-span-7 p-10 md:p-14 bg-slate-800/30 rounded-[60px] border border-white/5 space-y-8 shadow-2xl relative overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
          <input 
            required
            type="text" 
            placeholder="ENTER NAME" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 focus:border-blue-600 outline-none font-bold text-xs uppercase tracking-widest transition-colors" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="EXAMPLE@EMAIL.COM" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 focus:border-blue-600 outline-none font-bold text-xs uppercase tracking-widest transition-colors" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">How can I help you?</label>
        <textarea 
          required
          placeholder="TYPE YOUR MESSAGE HERE..." 
          rows={5} 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-slate-950 border border-slate-800 rounded-[35px] px-6 py-5 focus:border-blue-600 outline-none font-bold text-xs uppercase tracking-widest resize-none transition-colors" 
        />
      </div>
      <button 
        disabled={formState === 'sending'}
        className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-4 transition-all hover:scale-[1.02] shadow-2xl ${formState === 'sending' ? 'bg-slate-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {formState === 'sending' ? 'Sending Data...' : 'Send Message'} 
        <Send size={20} className={formState === 'sending' ? 'animate-pulse' : ''} />
      </button>
      
      {formState === 'error' && (
        <p className="text-red-400 text-[10px] font-bold text-center uppercase tracking-widest">Error transmitting data. Please check connection or try again.</p>
      )}
    </form>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'skills', 'certificates', 'portfolio', 'contact'];
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
    { name: 'Certificates', href: 'certificates' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setIsOpen(false);
    scrollToSection(e, id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-bold tracking-tighter uppercase"
          whileHover={{ scale: 1.05 }}
        >
          MASUD<span className="text-blue-500">RANA</span>
        </motion.a>

        <div className="hidden md:flex space-x-8 items-center font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[10px] tracking-widest uppercase relative group transition-colors ${activeSection === link.href ? 'text-blue-400' : 'text-gray-400 hover:text-blue-400'}`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span layoutId="navUnderline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}><Menu size={24} /></button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 w-full h-screen bg-slate-950 z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><X size={32} /></button>
            {navLinks.map((link) => (
              <a key={link.name} href={`#${link.href}`} onClick={(e) => handleNavClick(e, link.href)} className="text-3xl font-bold uppercase">{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Section = ({ id, title, children, className = "" }: { id: string; title?: string; children?: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 px-6 md:py-32 ${className}`}>
    <div className="container mx-auto">
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">{title}</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">Open to Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
              Quality <br /> <span className="text-blue-500">Excellence</span> <br /> Expert.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              I'm <span className="text-white font-bold">Masud Rana</span>. A Content Specialist & Quality Analyst focused on high-precision moderation and streamlined QA frameworks.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all hover:translate-y-[-4px] shadow-2xl shadow-blue-500/30">
                Contact Me <ChevronRight size={18} />
              </a>
              <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all backdrop-blur-sm">
                Download CV <FileText size={18} />
              </a>
            </div>
          </motion.div>
          
          <HudProfile />
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="Professional Bio" className="bg-slate-900/30">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-white leading-tight uppercase">Architecting <br /><span className="text-blue-500">Digital Safety.</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">Based on my experience across Singapore and Bangladesh, I specialize in navigating complex digital landscapes. I combine policy expertise with operational efficiency to maintain safe and high-quality online environments.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-5 bg-slate-800/50 rounded-2xl border border-white/5"><Globe className="text-blue-500" /> <span className="font-bold text-gray-200 text-xs uppercase tracking-widest">Global Reach</span></div>
              <div className="flex items-center gap-4 p-5 bg-slate-800/50 rounded-2xl border border-white/5"><Zap className="text-blue-500" /> <span className="font-bold text-gray-200 text-xs uppercase tracking-widest">Optimization</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-[40px] bg-slate-800/40 border border-white/5 hover:border-blue-500/40 transition-all text-center">
              <ShieldCheck className="text-blue-500 mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Policy Mastery</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">100% compliance</p>
            </div>
            <div className="p-8 rounded-[40px] bg-slate-800/40 border border-white/5 hover:border-purple-500/40 transition-all text-center mt-12">
              <BarChart3 className="text-purple-500 mb-4 mx-auto" size={40} />
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Efficiency</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">60% faster cycles</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work History">
        <div className="max-w-4xl mx-auto space-y-16">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <span className="text-[10px] font-black bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-600/30 uppercase tracking-widest whitespace-nowrap">{exp.period}</span>
                <p className="mt-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest">{exp.location}</p>
              </div>
              <div className="md:w-3/4 p-10 rounded-[45px] bg-slate-800/20 border border-white/5 group-hover:bg-slate-800/40 transition-all group-hover:border-blue-500/20 shadow-xl">
                <h3 className="text-2xl font-black text-white mb-1 uppercase">{exp.role}</h3>
                <p className="text-lg text-blue-500/60 font-black mb-6 tracking-tight uppercase">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-4 text-gray-400 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Core Expertise" className="bg-slate-900/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="p-10 bg-slate-800/30 rounded-[40px] border border-white/5 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">{skill.icon}</div>
                <h4 className="font-black text-xl uppercase tracking-tighter">{skill.name}</h4>
              </div>
              <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden mb-4 p-0.5">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.5 }} className="h-full bg-blue-600 rounded-full" />
              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-black uppercase tracking-widest">
                <span>Proficiency</span> <span className="text-blue-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certificates" title="Certifications">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-10 bg-slate-900/50 backdrop-blur-xl rounded-[45px] border border-white/5 group overflow-hidden shadow-2xl"
            >
              {/* Card HUD Decoration */}
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                <Medal size={80} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {cert.icon}
                </div>
                <div>
                  <div className="text-[10px] text-blue-500/60 font-black tracking-widest uppercase mb-1 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                    Verified Achievement
                  </div>
                  <h4 className="font-black text-xl uppercase tracking-tighter text-white leading-none">{cert.issuer}</h4>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-100 mb-4 leading-tight uppercase tracking-tight">{cert.title}</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed mb-8 uppercase font-bold tracking-widest">{cert.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Issue Date: {cert.date}</span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border border-blue-600/20 flex items-center gap-2 shadow-lg"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" title="Featured Work">
        <div className="grid lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <motion.div key={project.title} whileHover={{ y: -10 }} className="group rounded-[50px] overflow-hidden bg-slate-900 border border-white/5 flex flex-col h-full shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-white">{project.category}</div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{project.title}</h4>
                <p className="text-gray-400 text-xs mb-8 leading-relaxed flex-grow">{project.desc}</p>
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <a href="#" className="inline-flex items-center text-[10px] font-black text-blue-500 uppercase tracking-widest gap-2">Read Case Study <ChevronRight size={14} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Let's discuss <br /> <span className="text-blue-500">Excellence.</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed">I'm available for professional consultation on content strategy, moderation quality, and QA process optimization.</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:office.masud7262@gmail.com" className="flex items-center gap-6 p-6 rounded-[30px] bg-slate-800/20 hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700 group">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all"><Mail size={24} /></div>
                <div><p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Email</p><p className="font-bold text-lg">office.masud7262@gmail.com</p></div>
              </a>
              <a href="https://wa.me/8801625989806" target="_blank" className="flex items-center gap-6 p-6 rounded-[30px] bg-slate-800/20 hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700 group">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all"><MessageCircle size={24} /></div>
                <div><p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">WhatsApp</p><p className="font-bold text-lg">+880 1625 989806</p></div>
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <motion.a href="https://www.linkedin.com/in/ranaforever/" target="_blank" whileHover={{ scale: 1.1, rotate: 5 }} className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-[#0077b5] transition-all"><Linkedin size={24} /></motion.a>
              <motion.a href="https://www.facebook.com/ranaforever46/" target="_blank" whileHover={{ scale: 1.1, rotate: -5 }} className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-[#1877f2] transition-all"><Facebook size={24} /></motion.a>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>

      <footer className="py-20 border-t border-white/5 bg-slate-950 text-center md:text-left">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div>
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-3xl font-black tracking-tighter uppercase mb-4 block">MASUD<span className="text-blue-500">RANA</span></a>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} Professional Portfolio</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-500 text-[8px] font-black uppercase tracking-widest">Active Status: Globally Available</span>
            </div>
          </div>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
};

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 z-[100] w-14 h-14 bg-white text-slate-950 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
