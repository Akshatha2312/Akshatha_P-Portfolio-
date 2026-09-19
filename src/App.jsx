import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Menu,
  MonitorSmartphone,
  MoveRight,
  Palette,
  Rocket,
  Send,
  Server,
  Sparkles,
  Trophy,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { sendContactEmail } from './emailjsService'
import profileImage from './assets/profile.jpeg'
import resumePDF from './assets/Akshatha Prabakaran.pdf'
import './App.css'

const projects = [
  {
    title: 'Home Fix',
    description: 'Home Fix — Service booking flow for local professionals.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Akshatha2312/home_fix.git',
    demo: 'https://home-fix.vercel.app/',
  },
  {
    title: 'Cravory',
    description: 'Cravory — A MERN-based multi-vendor bakery marketplace where customers can discover bakeries, browse products, manage carts/wishlists, and place orders.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Akshatha2312',
    demo: 'https://cravory-beta.vercel.app/',
  },
  {
    title: 'Click Pilot',
    description: 'Click Pilot — A demo project showcasing interactive flows and UI polish.',
    stack: ['React'],
    github: 'https://github.com/Akshatha2312/click-pilot.git',
    demo: 'https://click-pilot.vercel.app/',
  },
  {
    title: 'The Action Guardrail',
    description: 'The Action Guardrail — Safety-first interaction patterns and demo.',
    stack: ['React'],
    github: 'https://github.com/Akshatha2312/The-Action-Guardrail.git',
    demo: 'https://the-action-guardrail.vercel.app/',
    youtube: 'https://lnkd.in/ekq2DKam',
    additionalLink: 'https://lnkd.in/eqb3TMUr',
  },
]

const technicalSkills = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
  },
  {
    category: 'Core Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
    ],
  },
]

const certificationGroups = [
  {
    category: 'Python',
    items: [
      { name: 'Python Programming', platform: 'Skillrack', date: '2024', link: '#' },
      { name: 'Python', platform: 'HackerRank', link: 'https://www.hackerrank.com/certificates/bbd8a30a03b3' },
      { name: 'Python', platform: 'LinkedIn Learning', link: 'https://www.linkedin.com/learning/certificates/ba855be99cddd66144bc3d4364f6563f88a7bf11e0eeee9606e3ba5d338f7e66?trk=share_certificate' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'MERN Stack Certificate', platform: 'Coursera', date: '2025', link: '#' },
      { name: 'Frontend Web Development', platform: 'LinkedIn Learning', link: 'https://www.linkedin.com/learning/certificates/141b34bd9057a90cabfd114bf9c178ec505528878ff22ce4a5166178c783328a?trk=share_certificate' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      { name: 'Generative AI', platform: 'Simplilearn', link: 'https://www.simplilearn.com/free-generative-ai-studio-course-skillup' },
    ],
  },
  {
    category: 'Cloud / DevOps',
    items: [
      { name: 'SQL Basics', platform: 'Simplilearn', link: 'https://www.simplilearn.com/free-online-course-to-learn-sql-basics-skillup' },
      { name: 'SQL', platform: 'HackerRank', link: 'https://www.hackerrank.com/certificates/89822fdad2d7' },
    ],
  },
]

const blogPosts = [
  { title: 'Designing a clean ticketing workflow', excerpt: 'A behind-the-scenes note on how I structured a support dashboard for speed and clarity.', readTime: '4 min read', link: '#' },
  { title: 'Performance wins in a React-first portfolio', excerpt: 'How I balanced storytelling, animation, and fast load time for a polished experience.', readTime: '3 min read', link: '#' },
  { title: 'Turning a concept into an MVP', excerpt: 'A practical approach to translating an idea into a usable product with clear milestones.', readTime: '5 min read', link: '#' },
]

const testimonials = [
  { name: 'Aarav R.', role: 'Product peer', relationship: 'Collaboration', quote: 'Akshatha brings calm clarity to product ideas and turns them into polished experiences.' },
  { name: 'Meera S.', role: 'Mentor', relationship: 'Learning circle', quote: 'She balances technical depth with a strong eye for user experience and design quality.' },
  { name: 'Nikhil T.', role: 'Team mate', relationship: 'Project partner', quote: 'Reliable, thoughtful, and always willing to improve the experience for the end user.' },
]

function AppShell() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [loading, setLoading] = useState(true)
  const [explorer, setExplorer] = useState(0)
  const [celebrate, setCelebrate] = useState(false)
  const [toast, setToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [scrollTopVisible, setScrollTopVisible] = useState(false)
  const [secretUnlocked, setSecretUnlocked] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const handleMove = (event) => setMouse({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [prefersReducedMotion])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0
      setExplorer(progress)
      setScrollTopVisible(scrollTop > 460)
      if (progress >= 0.9 && !celebrate) {
        setCelebrate(true)
        window.setTimeout(() => setCelebrate(false), 2200)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [celebrate])

  useEffect(() => {
    const routeMeta = {
      '/': { title: 'Akshatha | Full Stack Developer', description: 'Akshatha is a full stack developer building bold MERN products and polished web experiences.' },
      '/about': { title: 'About | Akshatha', description: 'Learn about Akshatha, her background, skills, and certifications.' },
      '/projects': { title: 'Projects | Akshatha', description: 'Explore Akshatha’s featured projects and web development work.' },
      '/contact': { title: 'Contact | Akshatha', description: 'Reach out to Akshatha for collaboration, freelance work, or opportunities.' },
    }
    const meta = routeMeta[location.pathname] || routeMeta['/']
    document.title = meta.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', meta.description)
  }, [location.pathname])

  useEffect(() => {
    const timeout = window.setTimeout(() => setToast(false), 2200)
    return () => window.clearTimeout(timeout)
  }, [toast])

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let index = 0
    const handler = (event) => {
      if (event.key.toLowerCase() === konami[index]) {
        index += 1
        if (index === konami.length) {
          setSecretUnlocked(true)
          setToastMessage('Secret unlocked — developer mode activated ✨')
          setToast(true)
          index = 0
        }
      } else {
        index = 0
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  const glowStyle = useMemo(() => ({ transform: `translate(${mouse.x / 40}px, ${mouse.y / 40}px)` }), [mouse.x, mouse.y])

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 transition-colors duration-300 antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-slate-200/60 pointer-events-none">
        <motion.div className="h-full bg-slate-900" style={{ width: `${explorer * 100}%` }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 sm:px-10 lg:px-16 py-6">
        {/* Minimal Lightweight Header */}
        <header className="sticky top-0 z-50 mb-10 bg-[#fafafa]/90 py-4 backdrop-blur-md transition-all duration-300 border-b border-slate-200/60">
          <div className="flex items-center justify-between gap-6">
            <NavLink to="/" className="group flex items-center gap-2.5 text-xl font-extrabold tracking-[0.2em] text-slate-900 transition hover:opacity-80">
              <span className="flex h-2.5 w-2.5 rounded-full bg-slate-900 transition-transform duration-300 group-hover:scale-125" />
              AKSHATHA
            </NavLink>
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative py-1 text-sm font-bold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-slate-900 border-b-2 border-slate-900'
                        : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  setSecretUnlocked(true)
                  setToastMessage('Secret unlocked — developer mode activated ✨')
                  setToast(true)
                }}
                className="ml-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
                title="Secret shortcut"
              >
                ☄
              </button>
            </nav>
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 transition hover:bg-slate-100"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 flex flex-col gap-3 border-t border-slate-200/80 pt-4 md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 text-base font-bold transition ${
                      isActive ? 'text-slate-900 font-extrabold' : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </header>

        {/* Main Content Viewport */}
        <main className="flex-1 w-full min-h-[calc(100vh-200px)]">
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <Routes location={location}>
                <Route path="/" element={<HomeSection glowStyle={glowStyle} />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/projects" element={<ProjectsSection />} />
                <Route path="/contact" element={<ContactSection setToast={setToast} setToastMessage={setToastMessage} />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Minimal Footer */}
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 py-8 text-sm text-slate-500">
          <p className="font-medium text-slate-600">AKSHATHA — Full Stack Developer © {new Date().getFullYear()}</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Akshatha2312" target="_blank" rel="noreferrer" className="font-semibold text-slate-600 transition hover:text-slate-900">GitHub</a>
            <a href="https://linkedin.com/in/akshatha23" target="_blank" rel="noreferrer" className="font-semibold text-slate-600 transition hover:text-slate-900">LinkedIn</a>
            <a href="/contact" className="font-bold text-slate-900 transition hover:underline">Let&apos;s collaborate →</a>
          </div>
        </footer>

        {/* Floating Explorer Badge */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
          <div className="rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md">
            Site Explorer <span className="text-slate-900 font-extrabold">{Math.round(explorer * 100)}%</span>
          </div>
          <div className="w-36 overflow-hidden rounded-full border border-slate-200 bg-slate-200/80 p-0.5">
            <motion.div className="h-1 rounded-full bg-slate-900" animate={{ width: `${explorer * 100}%` }} transition={{ type: 'spring', stiffness: 140, damping: 18 }} />
          </div>
          {celebrate && <ConfettiBurst />}
        </div>

        {/* Scroll To Top Button */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 left-6 z-40 rounded-full border border-slate-200 bg-white/95 p-3 text-slate-900 shadow-sm transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-md ${
            scrollTopVisible ? 'translate-y-0 opacity-100 scale-100' : 'pointer-events-none translate-y-4 opacity-0 scale-90'
          }`}
          aria-label="Scroll to top"
        >
          ↑
        </button>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.95 }} className="fixed bottom-8 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl">
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Overlay */}
        <AnimatePresence>
          {loading && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-50/95 text-slate-900 backdrop-blur-md">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md text-4xl font-extrabold text-slate-900 animate-pulse">A</div>
                <p className="mt-5 text-xl font-extrabold tracking-[0.3em] text-slate-900">LOADING PORTFOLIO</p>
                <p className="mt-2 text-sm font-medium text-slate-500">Crafting a premium web experience</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function HomeSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="py-8 sm:py-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-slate-500">
            <BrainCircuit size={16} className="text-slate-900" /> Hello, I&apos;m Akshatha
          </div>
          
          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            Full Stack <br />
            <span className="underline decoration-slate-300 underline-offset-8">Developer</span>
          </h1>
          
          <p className="mt-6 text-xl font-bold text-slate-800 sm:text-2xl">
            Building useful, performant digital experiences.
          </p>
          
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            I turn ideas into practical software with a strong mix of engineering discipline, visual design, and product thinking.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me <ArrowRight size={18} />
            </a>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-200 hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Resume ↗
            </a>
            <a
              href={resumePDF}
              download="Akshatha_Resume.pdf"
              className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-200 hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0"
            >
              Download Resume ↓
            </a>
            <a
              href="/projects"
              className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-200 hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects <MoveRight size={18} />
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200/70">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400">Currently learning / Open to</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-bold text-slate-900 text-sm">Learning Focus</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Deepening TypeScript & scalable UI systems</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Exploring cloud deployment patterns</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Open To</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Frontend & full-stack product roles</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Collaborative sprints & freelance builds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
          <div className="profile-ring relative flex h-56 w-56 sm:h-64 sm:w-64 items-center justify-center rounded-full p-1 border-2 border-slate-200 shadow-sm">
            {imageError ? (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-5xl font-extrabold text-slate-900">A</div>
            ) : (
              <img
                loading="lazy"
                decoding="async"
                src={profileImage}
                alt="Portrait of Akshatha, full stack developer"
                onError={() => setImageError(true)}
                className="h-full w-full rounded-full object-cover"
              />
            )}
          </div>

          <div className="mt-8 w-full max-w-sm text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-slate-400">Current Focus</p>
            <h2 className="mt-2 text-xl font-extrabold text-slate-900">Crafting Full-Stack Products</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200/60 font-semibold">
                <span className="text-slate-400">01</span> Fast, scalable MERN applications
              </div>
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200/60 font-semibold">
                <span className="text-slate-400">02</span> DSA-driven problem solving
              </div>
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200/60 font-semibold">
                <span className="text-slate-400">03</span> Production-ready, user-centered builds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="print-section py-8 space-y-16">
      {/* Intro Editorial Block */}
      <div className="max-w-4xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">About Me</p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
          Engineering graduate turning ideas into software.
        </h2>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 font-normal">
          I&apos;m Akshatha, a passionate full stack developer based in Coimbatore. My journey began with engineering and grew into software development through hands-on building, debugging, and solving real-world problems. I love exploring data structures and algorithms and translating them into polished applications that feel intuitive and useful.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Resume ↗
          </a>
          <a
            href={resumePDF}
            download="Akshatha_Resume.pdf"
            className="btn-secondary inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0"
          >
            Download Resume ↓
          </a>
          <a href="/contact" className="btn-secondary rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0">
            Let&apos;s Connect
          </a>
        </div>
      </div>

      {/* Core Strengths Section */}
      <div className="pt-8 border-t border-slate-200/70">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-slate-900" size={24} />
          <h3 className="text-2xl font-extrabold text-slate-900">Core Strengths</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="pb-4 border-b md:border-b-0 md:border-r border-slate-200/70 pr-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">01</span>
            <h4 className="mt-2 text-xl font-bold text-slate-900">DSA & Problem Solving</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Comfortable with logic-driven development, algorithmic efficiency, and optimal structure.</p>
          </div>
          <div className="pb-4 border-b md:border-b-0 md:border-r border-slate-200/70 pr-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">02</span>
            <h4 className="mt-2 text-xl font-bold text-slate-900">Full-Stack Builds</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">From database modeling to modern UI components, I bring complete products to life.</p>
          </div>
          <div className="pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">03</span>
            <h4 className="mt-2 text-xl font-bold text-slate-900">Growth Mindset</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Always iterating, exploring modern tech stacks, and leveling up with every sprint.</p>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="pt-8 border-t border-slate-200/70">
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">Education Timeline</p>
        <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Learning Journey</h3>

        <div className="mt-8 space-y-8 pl-4 border-l-2 border-slate-200">
          <div className="relative pl-6">
            <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-slate-900 ring-4 ring-[#fafafa]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">2023 – 2027</span>
            <h4 className="mt-1 text-xl font-bold text-slate-900">Sri Shakthi Institute of Engineering and Technology, Coimbatore</h4>
            <p className="mt-1 text-base font-semibold text-slate-700">Bachelor of Engineering (B.E.) — Computer Science and Engineering</p>
          </div>

          <div className="relative pl-6">
            <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-slate-400 ring-4 ring-[#fafafa]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">2011 – 2023</span>
            <h4 className="mt-1 text-xl font-bold text-slate-900">Kendriya Vidyalaya, Coimbatore</h4>
            <p className="mt-1 text-base font-semibold text-slate-600">Senior Secondary Education</p>
          </div>
        </div>
      </div>

      {/* Technical Skills & Certifications */}
      <div className="pt-8 border-t border-slate-200/70 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">Technical Skills</p>
              <h3 className="mt-1 text-2xl font-extrabold text-slate-900">Skills & Tooling</h3>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">MERN + Tools</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {technicalSkills.map((group) => (
              <div key={group.category} className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 hover:shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck size={22} className="text-slate-900" />
            <h3 className="text-2xl font-extrabold text-slate-900">Certifications</h3>
          </div>

          <div className="space-y-6">
            {certificationGroups.map((group) => (
              <div key={group.category} className="pb-4 border-b border-slate-200/70 last:border-0">
                <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">{group.category}</h4>
                <div className="mt-3 space-y-2.5">
                  {group.items.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{cert.name}</p>
                        <p className="text-xs font-medium text-slate-500">{[cert.platform, cert.date].filter(Boolean).join(' • ')}</p>
                      </div>
                      {cert.link && cert.link !== '#' ? (
                        <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 transition hover:underline">
                          View ↗
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  return (
    <section id="projects" className="py-8 space-y-16">
      <div className="max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">Selected Works</p>
        <h2 className="mt-2 text-4xl sm:text-5xl font-black text-slate-900">Featured Projects</h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 font-normal">
          I focus on thoughtful product decisions, measurable impact, and polished execution from concept through production.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group pb-12 border-b border-slate-200/80 grid gap-8 lg:grid-cols-12 items-start transition-all duration-300"
          >
            <div className="lg:col-span-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">0{index + 1}</span>
              <h3 className="mt-1 text-3xl font-black text-slate-900 group-hover:text-slate-800 transition-colors">
                {project.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 pt-2">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    View Live Project ↗
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    GitHub Code
                  </a>
                ) : null}

                {project.caseStudy ? (
                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(project.caseStudy)}
                    className="btn-secondary rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-slate-900 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Read Case Study
                  </button>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>{activeCaseStudy ? <CaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} /> : null}</AnimatePresence>
    </section>
  )
}

function CaseStudyModal({ project, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/50 p-4 sm:p-6 backdrop-blur-xs">
      <motion.div initial={{ y: 20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.98 }} role="dialog" aria-modal="true" className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">Case Study</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="btn-secondary rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 transition hover:border-slate-900">Close</button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">Problem</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">Approach</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{project.approach}</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">Tech Decisions</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{project.decisions}</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">Outcome</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{project.outcome}</p>
          </div>
        </div>
        {project.improve && (
          <div className="mt-6 pt-4 border-t border-slate-100 text-sm">
            <p className="font-bold text-slate-900">What I&apos;d Improve</p>
            <p className="mt-1 leading-relaxed text-slate-700">{project.improve}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function ContactSection({ setToast, setToastMessage }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!formData.message.trim()) nextErrors.message = 'Please share a short message.'
    return nextErrors
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      setToastMessage('Please complete the form before sending.')
      setToast(true)
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'loading', message: 'Sending your message…' })

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })

      setFormData({ name: '', email: '', message: '' })
      setStatus({ type: 'success', message: 'Your message has been sent successfully.' })
      setToastMessage('Your message has been sent successfully.')
      setToast(true)
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send your message. Please try again.' })
      setToastMessage('Failed to send your message. Please try again.')
      setToast(true)
      console.error('EmailJS error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 grid gap-12 lg:grid-cols-12 items-start">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="lg:col-span-5 space-y-6">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-slate-400">Contact</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-slate-900 leading-tight">Let&apos;s work together.</h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Have an idea, freelance project, or full-time opportunity in mind? I&apos;m always open to a conversation.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-200/70 space-y-4">
          <a href="https://github.com/Akshatha2312" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-slate-200/60 pb-3 font-bold text-slate-900 transition hover:text-slate-600">
            <span className="flex items-center gap-3"><Globe size={18} className="text-slate-500" /> github.com/Akshatha2312</span>
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">↗</span>
          </a>
          <a href="https://linkedin.com/in/akshatha23" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-slate-200/60 pb-3 font-bold text-slate-900 transition hover:text-slate-600">
            <span className="flex items-center gap-3"><Globe size={18} className="text-slate-500" /> linkedin.com/in/akshatha23</span>
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">↗</span>
          </a>
          <a href="https://leetcode.com/u/AKSHATH2312" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-slate-200/60 pb-3 font-bold text-slate-900 transition hover:text-slate-600">
            <span className="flex items-center gap-3"><Trophy size={18} className="text-slate-500" /> leetcode.com/u/AKSHATH2312</span>
            <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="lg:col-span-7">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">Name</label>
            <input
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              className={`w-full border-b py-3 text-base text-slate-900 font-medium outline-none transition-colors ${
                errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-transparent focus:border-slate-900'
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs font-semibold text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              className={`w-full border-b py-3 text-base text-slate-900 font-medium outline-none transition-colors ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-transparent focus:border-slate-900'
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">Message</label>
            <textarea
              rows="4"
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              className={`w-full border-b py-3 text-base text-slate-900 font-medium outline-none transition-colors ${
                errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-transparent focus:border-slate-900'
              }`}
              placeholder="Tell me about your project or idea..."
            />
            {errors.message && <p className="mt-1 text-xs font-semibold text-red-600">{errors.message}</p>}
          </div>

          {status.message && (
            <div className={`rounded-xl border p-4 text-sm font-semibold ${status.type === 'error' ? 'border-red-200 bg-red-50 text-red-700' : status.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-slate-100 text-slate-700'}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'Sending…' : 'Send Message'} <ArrowRight size={18} />
          </button>
        </form>
      </motion.div>
    </section>
  )
}

function ConfettiBurst() {
  return <div className="pointer-events-none absolute right-0 top-0 flex h-24 w-24 items-center justify-center">{Array.from({ length: 16 }).map((_, index) => <motion.span key={index} initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: [0, 1, 0], x: [0, (index % 4 - 1.5) * 50], y: [0, -80 - (index % 4) * 20], rotate: 360 }} transition={{ duration: 1.4, ease: 'easeOut' }} className="absolute h-2.5 w-2.5 rounded-full bg-black/15" />)}</div>
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
