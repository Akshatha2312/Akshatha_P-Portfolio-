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
import './App.css'

const projects = [
  {
    title: 'Click Pilot',
    description: 'Click Pilot — A demo project showcasing interactive flows and UI polish.',
    stack: ['React'],
    github: 'https://github.com/Akshatha2312/click-pilot.git',
    demo: 'https://click-pilot.vercel.app/',
  },
  {
    title: 'Home Fix',
    description: 'Home Fix — Service booking flow for local professionals.',
    stack: ['React', 'Node.js'],
    github: 'https://github.com/Akshatha2312/home_fix.git',
    demo: 'https://home-fix.vercel.app/',
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
  {
    title: 'Field Visit Tracker',
    description: 'Field Visit Tracker — Attendance and visit monitoring tool.',
    stack: ['Django', 'Python'],
    github: 'https://github.com/Akshatha2312/Field-Visit-Tracker.git',
    demo: '',
  },
  {
    title: 'Ticketing System',
    description: 'Ticketing System — Issue tracking and triage dashboard.',
    stack: ['PHP', 'MySQL'],
    github: 'https://github.com/Akshatha2312/Ticketing-System.git',
    demo: '',
  },
  {
    title: "Achu's Home Foods",
    description: "Achu's Home Foods — Small business site and ordering demo.",
    stack: ['Web'],
    github: 'https://github.com/Akshatha2312/Achushomefoods.git',
    demo: '',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: [
      { name: 'JavaScript', level: 92, note: 'Interactive UIs and modern app logic', icon: Zap },
      { name: 'Python', level: 84, note: 'Scripting, automation, and backend patterns', icon: Sparkles },
      { name: 'PHP', level: 78, note: 'Server-side workflows and dashboards', icon: Server },
    ],
  },
  {
    title: 'Frontend',
    icon: Palette,
    items: [
      { name: 'React', level: 90, note: 'Reusable components and polished UX', icon: Zap },
      { name: 'HTML/CSS', level: 88, note: 'Flexible layouts and visual systems', icon: Palette },
      { name: 'Tailwind', level: 85, note: 'Fast, expressive UI styling', icon: Sparkles },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 86, note: 'Realtime backends and APIs', icon: Server },
      { name: 'Express', level: 82, note: 'API routing and middleware', icon: Globe },
      { name: 'Django', level: 76, note: 'Structured app architecture', icon: Database },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 82, note: 'Flexible document data models', icon: Database },
      { name: 'MySQL', level: 78, note: 'Reliable relational storage', icon: Database },
      { name: 'REST APIs', level: 84, note: 'Seamless data exchange between layers', icon: Globe },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: [
      { name: 'Git/GitHub', level: 88, note: 'Version control and clean collaboration', icon: Wrench },
      { name: 'Vercel', level: 80, note: 'Fast deployment and previews', icon: Zap },
      { name: 'VS Code', level: 85, note: 'Productive coding workflow', icon: Code2 },
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
      { name: 'Full Stack Web Development', platform: 'Udemy', date: '2024', link: '#' },
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

const openSource = [
  { repo: 'UI polish helpers', description: 'Contribution notes for shared UI refinements and reusable interaction patterns.', link: '#' },
  { repo: 'Starter templates', description: 'Improved developer experience for scaffolded projects with better defaults and clearer docs.', link: '#' },
  { repo: 'Accessibility fixes', description: 'Small but meaningful updates focused on keyboard navigation and contrast improvements.', link: '#' },
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
    <div className="relative min-h-screen overflow-hidden bg-white text-black transition-colors duration-300">
      <motion.div className="pointer-events-none absolute inset-0 opacity-0" animate={{ opacity: 0 }} transition={{ duration: 0 }} style={{ backgroundImage: 'none' }} />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-50 mb-6 rounded-full border border-black/10 bg-white px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between gap-2">
            <NavLink to="/" className="text-lg font-semibold tracking-[0.3em] text-black">AKSHATHA</NavLink>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-black' : 'text-black/60 hover:text-black'}`}>
                  {item.label}
                </NavLink>
              ))}
              <button type="button" onClick={() => { setSecretUnlocked(true); setToastMessage('Secret unlocked — developer mode activated ✨'); setToast(true) }} className="rounded-full border border-dashed border-black/10 bg-black/5 px-2.5 py-1 text-xs font-semibold text-black/80" title="Secret shortcut">☄</button>
            </nav>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-black/10 bg-black/5 p-2 text-black md:hidden" aria-label="Open menu" aria-expanded={menuOpen}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
            </div>
          </div>
          {menuOpen && (
            <div className="mt-4 flex flex-col gap-3 border-t border-black/10 pt-3 md:hidden">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-black' : 'text-black/60'}`}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </header>

        <main className="flex-1 rounded-[2rem] border border-black/10 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
              <Routes location={location}>
                <Route path="/" element={<HomeSection glowStyle={glowStyle} />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/projects" element={<ProjectsSection />} />
                <Route path="/contact" element={<ContactSection setToast={setToast} setToastMessage={setToastMessage} />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-[1.5rem] border border-black/10 bg-white px-4 py-3 text-sm text-black/60 shadow-sm">
          <a href="/contact" className="font-semibold text-black transition hover:text-black/70">Let&apos;s collaborate</a>
        </footer>

        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
          <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm">Site Explorer {Math.round(explorer * 100)}%</div>
          <div className="w-48 overflow-hidden rounded-full border border-black/10 bg-black/5">
            <motion.div className="h-2 rounded-full bg-black/30" animate={{ width: `${explorer * 100}%` }} transition={{ type: 'spring', stiffness: 140, damping: 18 }} />
          </div>
          {celebrate && <ConfettiBurst />}
        </div>

        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 left-4 z-50 rounded-full bg-black/10 p-3 text-black shadow-sm transition ${scrollTopVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`} aria-label="Scroll to top">↑</button>

        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-md">
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {loading && (
            <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center bg-white/95 text-black">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-black/5 text-3xl font-black text-black">A</div>
                <p className="mt-4 text-lg font-semibold tracking-[0.3em]">LOADING PORTFOLIO</p>
                <p className="mt-2 text-sm text-black/60">Crafting a premium monochrome experience</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function HomeSection({ glowStyle }) {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] bg-white px-6 py-16 text-black sm:px-10 lg:px-14 lg:py-24">
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute inset-0 opacity-0">
        <div className="absolute h-64 w-64 rounded-full bg-black/5 blur-3xl" style={glowStyle} />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-black/3 blur-3xl" style={glowStyle} />
      </div>
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm font-medium text-black/70 backdrop-blur"><BrainCircuit size={16} /> Building bold digital experiences</div>
          <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-7xl">Hi, I&apos;m <span className="text-black">Akshatha</span></h1>
          <p className="mt-4 text-lg text-black/70 sm:text-xl">Full Stack Developer | MERN | Problem Solver</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-black/70 sm:text-lg">I turn ideas into performant, intuitive web applications with a strong mix of engineering discipline, visual design, and product thinking.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:bg-black/80">Hire Me <ArrowRight size={18} /></a>
            <a href="/assets/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-5 py-3 font-semibold text-black transition hover:bg-black/5">Resume <MoveRight size={18} /></a>
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-5 py-3 font-semibold text-black transition hover:bg-black/5">Projects <MoveRight size={18} /></a>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-black/5 p-4 text-sm text-black/70 backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-black/60">Currently learning / open to</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-black">Learning</p>
                <ul className="mt-2 space-y-1 text-black/70">
                  <li>• Deepening TypeScript and scalable UI systems</li>
                  <li>• Exploring cloud-native deployment patterns</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black">Open to</p>
                <ul className="mt-2 space-y-1 text-black/70">
                  <li>• Frontend and full-stack product roles</li>
                  <li>• Freelance builds and collaborative sprints</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href="/about" className="rounded-full border border-black/20 bg-white px-3 py-2 text-black transition hover:bg-black/5">About</a>
            <a href="/projects" className="rounded-full border border-black/20 bg-white px-3 py-2 text-black transition hover:bg-black/5">Projects</a>
            <a href="/contact" className="rounded-full border border-black/20 bg-white px-3 py-2 text-black transition hover:bg-black/5">Contact</a>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.03, rotateY: -7, rotateX: 4, y: -6 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-md">
          <div className="rounded-[1.5rem] border border-black/10 bg-white p-6">
            <div className="flex items-center justify-center">
              <div className="profile-ring relative flex h-40 w-40 items-center justify-center rounded-full p-[4px]">
                {imageError ? <div className="flex h-full w-full items-center justify-center rounded-full bg-black/5 text-4xl font-black text-black">A</div> : <img loading="lazy" decoding="async" src="/assets/profile.jpg" alt="Portrait of Akshatha, full stack developer" onError={() => setImageError(true)} className="h-full w-full rounded-full object-cover" />}
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-black/60">Current Focus</p>
              <h2 className="mt-2 text-2xl font-semibold text-black">Crafting full-stack products</h2>
              <div className="mt-4 space-y-3 text-sm text-black/70">
                <div className="rounded-xl border border-black/10 bg-black/5 p-3">Fast, scalable MERN applications</div>
                <div className="rounded-xl border border-black/10 bg-black/5 p-3">DSA-driven problem solving</div>
                <div className="rounded-xl border border-black/10 bg-black/5 p-3">Production-ready, user-centered builds</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="print-section space-y-10 px-2 py-6 sm:px-3 lg:px-5">
      <div className="grid gap-8 items-stretch lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="h-full rounded-[2rem] border border-black/10 bg-white p-8 shadow-md">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">About Me</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl text-black">Engineering graduate turning ideas into software.</h2>
          <p className="mt-5 text-lg leading-8 text-black/70">I&apos;m Akshatha, a passionate full stack developer based in Coimbatore. My journey began with engineering and grew into software development through hands-on building, debugging, and solving real-world problems. I love exploring data structures and algorithms and translating them into polished applications that feel intuitive and useful.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/assets/resume.pdf" className="rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:bg-black/80">Download Resume</a>
            <button type="button" onClick={() => window.print()} className="rounded-full border border-black/20 bg-white px-5 py-3 font-semibold text-black transition hover:bg-black/5">Print Resume</button>
            <a href="/contact" className="rounded-full border border-black/20 bg-white px-5 py-3 font-semibold text-black transition hover:bg-black/5">Let&apos;s Connect</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="h-full rounded-[2rem] border border-black/10 bg-white p-8 shadow-md">
          <div className="flex items-center gap-3">
            <Trophy className="text-black/70" size={24} />
            <h3 className="text-2xl font-bold text-black">Core Strengths</h3>
          </div>
          <div className="mt-6 space-y-4 text-black/70">
            <div className="rounded-2xl border border-black/10 bg-black/5 p-4"><p className="font-semibold text-black">DSA & Problem Solving</p><p className="mt-1 text-sm">Comfortable with logic-driven development and efficient solutions.</p></div>
            <div className="rounded-2xl border border-black/10 bg-black/5 p-4"><p className="font-semibold text-black">Full-Stack Builds</p><p className="mt-1 text-sm">From UI to database, I enjoy bringing complete products to life.</p></div>
            <div className="rounded-2xl border border-black/10 bg-black/5 p-4"><p className="font-semibold text-black">Growth Mindset</p><p className="mt-1 text-sm">Always learning, iterating, and leveling up with every project.</p></div>
          </div>
        </motion.div>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-md">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Education</p>
        <h3 className="mt-4 text-2xl font-bold text-black">Learning Journey</h3>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-black">Kendriya Vidyalaya, Coimbatore</h4>
                <p className="mt-1 text-sm text-black/60">Senior Secondary Education</p>
              </div>
              <span className="text-sm font-semibold text-black/70 whitespace-nowrap">2011 – 2023</span>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-black">Sri Shakthi Institute of Engineering and Technology, Coimbatore</h4>
                <p className="mt-2 text-sm text-black/70">
                  <span className="font-semibold">Bachelor of Engineering (B.E.)</span>
                  <br />Computer Science and Engineering
                </p>
              </div>
              <span className="text-sm font-semibold text-black/70 whitespace-nowrap">2023 – 2027</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-md">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Currently Learning / Open To</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-xl font-bold text-black">Learning</h4>
            <ul className="mt-3 space-y-2 text-black/70">
              <li>• Deepening TypeScript patterns for resilient frontend architecture</li>
              <li>• Exploring cloud deployment, serverless workflows, and API design</li>
              <li>• Improving product thinking and cross-functional communication</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-black">Open To</h4>
            <ul className="mt-3 space-y-2 text-black/70">
              <li>• Frontend and full-stack product roles</li>
              <li>• Freelance builds and collaborative sprints</li>
              <li>• Internships, internships-to-full-time conversations, and mentorship opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-8 items-stretch xl:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="h-full rounded-[2rem] border border-black/10 bg-white p-8 shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Skills</p>
              <h3 className="mt-2 text-2xl font-bold text-black">Tech stack I&apos;m working with</h3>
            </div>
            <div className="hidden rounded-full border border-black/10 bg-black/5 px-3 py-2 text-sm font-semibold text-black sm:block">MERN + More</div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon
              return <SkillCard key={group.title} group={group} Icon={Icon} />
            })}
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="h-full rounded-[2rem] border border-black/10 bg-white p-8 text-black shadow-md">
          <div className="flex items-center gap-2 text-black/70"><BadgeCheck size={20} /><p className="text-sm font-semibold uppercase tracking-[0.35em]">Certifications</p></div>
          <h3 className="mt-4 text-2xl font-bold text-black">Learning milestones and achievements</h3>
          <div className="mt-6 space-y-6">
            {certificationGroups.map((group) => (
              <div key={group.category} className="rounded-2xl border border-black/10 bg-black/5 p-5">
                <h4 className="text-lg font-semibold text-black">{group.category}</h4>
                <div className="mt-4 space-y-3">
                  {group.items.map((cert) => (
                    <div key={cert.name} className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-black">{cert.name}</p>
                          <p className="mt-1 text-sm text-black/60">{[cert.platform, cert.date].filter(Boolean).join(' • ')}</p>
                        </div>
                        {cert.link ? <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-black/70 transition hover:text-black">View Certificate <ArrowRight size={15} /></a> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

function SkillCard({ group, Icon }) {
  const [flipped, setFlipped] = useState(false)

  const toggleFlip = () => setFlipped((value) => !value)

  return (
    <motion.button type="button" whileHover={{ y: -6, scale: 1.01 }} className="flip-card group h-48 w-full text-left" onClick={toggleFlip} onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggleFlip()
      }
    }} aria-label={`Toggle ${group.title} skill details`}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-face flip-card-front rounded-2xl border border-black/10 bg-white p-4 text-black shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <Icon size={18} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">{group.title}</span>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">{group.items[0].name}</p>
            <p className="mt-2 text-sm text-black/60">Tap or hover to explore</p>
          </div>
        </div>
        <div className="flip-card-face flip-card-back rounded-2xl border border-black/10 bg-white p-4 text-black shadow-md">
          <div className="flex items-center justify-between"><span className="text-sm font-semibold">{group.title}</span><Sparkles size={16} className="text-black/60" /></div>
          <div className="mt-4 space-y-3">
            {group.items.map((item) => {
              const ItemIcon = item.icon
              return (
                <div key={item.name} className="rounded-xl border border-black/10 bg-black/5 p-2.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2"><ItemIcon size={14} />{item.name}</span>
                    <span className="font-semibold text-black/70">{item.level}%</span>
                  </div>
                  <p className="mt-1 text-xs text-black/60">{item.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.button>
  )
}

function ProjectsSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

  return (
    <section id="projects" className="px-2 py-6 sm:px-3 lg:px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Projects</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl text-black">Selected builds that reflect my style, depth, and range.</h2>
        <p className="mt-4 text-lg leading-8 text-black/70">I focus on thoughtful product decisions, measurable impact, and polished execution from the first wireframe through deployment.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -8, scale: 1.02, rotateX: 5, rotateY: -4 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="group rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between"><div className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/70">{index + 1}</div><MonitorSmartphone className="text-black/60" size={20} /></div>
            <h3 className="text-xl font-bold text-black">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-black/70">{project.description}</p>
            <div className="mt-3 rounded-2xl border border-black/10 bg-black/5 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/60">Impact snapshot</p>
              <p className="mt-1 text-sm font-semibold text-black/80">{project.metric}</p>
              <p className="mt-1 text-sm text-black/60">{project.impact}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-xs font-medium text-black/70">{tag}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.caseStudy ? <button type="button" onClick={() => setActiveCaseStudy(project.caseStudy)} className="rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/5">View Case Study</button> : null}
              <a href={project.github} className="rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/5">GitHub</a>
              <a href={project.demo} className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80">Live Demo</a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mt-10 rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Open Source Contributions</p>
            <h3 className="mt-2 text-2xl font-bold text-black">Shared learning and contribution work</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {openSource.map((item) => (
            <div key={item.repo} className="rounded-2xl border border-black/10 bg-black/5 p-4">
              <p className="text-lg font-semibold text-black">{item.repo}</p>
              <p className="mt-2 text-sm leading-7 text-black/70">{item.description}</p>
              <a href={item.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black/70 transition hover:text-black">View PR / Commit <ArrowRight size={15} /></a>
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>{activeCaseStudy ? <CaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} /> : null}</AnimatePresence>
    </section>
  )
}

function CaseStudyModal({ project, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/20 px-4 py-6">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} role="dialog" aria-modal="true" className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-black/10 bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Case Study</p>
            <h3 className="mt-2 text-2xl font-bold text-black">{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-black/20 px-3 py-2 text-sm font-semibold text-black transition hover:bg-black/5">Close</button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/60">Problem</p>
            <p className="mt-2 text-sm leading-7 text-black/70">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/60">Approach</p>
            <p className="mt-2 text-sm leading-7 text-black/70">{project.approach}</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/60">Tech Decisions</p>
            <p className="mt-2 text-sm leading-7 text-black/70">{project.decisions}</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/60">Outcome</p>
            <p className="mt-2 text-sm leading-7 text-black/70">{project.outcome}</p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-black/10 bg-black/5 p-4 text-sm text-black/70">
          <p className="font-semibold text-black">What I&apos;d Improve</p>
          <p className="mt-2 leading-7">{project.improve}</p>
        </div>
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
    <section id="contact" className="grid gap-8 px-2 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-3">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-black/10 bg-white p-8 text-black shadow-md">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/60">Contact</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let&apos;s build something meaningful together.</h2>
        <p className="mt-4 text-lg leading-8 text-black/70">Whether it&apos;s a freelance build, an internship opportunity, or a collaborative product idea, I&apos;m always open to a conversation.</p>
        <div className="mt-8 space-y-3">
          <a href="https://github.com/Akshatha2312" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-black transition hover:bg-black/10"><Globe size={18} /> <span>github.com/Akshatha2312</span></a>
          <a href="https://linkedin.com/in/akshatha23" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-black transition hover:bg-black/10"><Globe size={18} /> <span>linkedin.com/in/akshatha23</span></a>
          <a href="https://leetcode.com/u/AKSHATH2312" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-black transition hover:bg-black/10"><Trophy size={18} /> <span>leetcode.com/u/AKSHATH2312</span></a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">Name</label>
            <input value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${errors.name ? 'border-black/20 bg-black/5' : 'border-black/10 bg-white focus:border-black/20 focus:bg-white'}`} placeholder="Your name" />
            {errors.name && <p className="mt-2 text-sm text-black/70">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">Email</label>
            <input type="email" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${errors.email ? 'border-black/20 bg-black/5' : 'border-black/10 bg-white focus:border-black/20 focus:bg-white'}`} placeholder="you@example.com" />
            {errors.email && <p className="mt-2 text-sm text-black/70">{errors.email}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">Message</label>
            <textarea rows="5" value={formData.message} onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))} className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${errors.message ? 'border-black/20 bg-black/5' : 'border-black/10 bg-white focus:border-black/20 focus:bg-white'}`} placeholder="Tell me about your idea..." />
            {errors.message && <p className="mt-2 text-sm text-black/70">{errors.message}</p>}
          </div>
          {status.message && (
            <div className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black/70">{status.message}</div>
          )}
          <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-black/60">
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
