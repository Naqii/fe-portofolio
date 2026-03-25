/* eslint-disable @next/next/no-html-link-for-pages */
// app/components/sidebar/Sidebar.tsx
'use client'
import { Link } from '@heroui/link'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Intersection Observer untuk mendeteksi section yang aktif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = ['about', 'projects', 'tools']
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg-flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      {/* Profile Section */}
      <div>
        <h1 className="font-main text-4xl font-bold text-secondary hover:text-accent sm:text-5xl tracking-tight">
          <a href="/">
            Sunan Baihaqi <br />
            Amrullah
          </a>
        </h1>
        <h2 className="font-secondary mt-2 text-lg tracking-tight text-accent sm:text-xl">
          Web Developer
        </h2>
        <p className="font-secondary mt-3 max-w-xs text-secondary leading-normal">
          I build fast, minimal web products and landing pages for online
          businesses
        </p>

        {/* Navigation dengan indikator aktif */}
        <nav
          className="space-y-3 hidden lg:block font-secondary"
          aria-label="In-page jump links"
        >
          <ul className="mt-16 w-max">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="group flex items-center py-3"
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 bg-accent transition-all group-hover:w-16 group-hover:bg-accent2 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === 'about' ? 'w-16 bg-slate-200' : ''
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent2 group-focus-visible:text-slate-200 ${
                    activeSection === 'about' ? 'text-slate-200' : ''
                  }`}
                >
                  About
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center py-3"
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 bg-accent transition-all group-hover:w-16 group-hover:bg-accent2 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === 'projects' ? 'w-16 bg-slate-200' : ''
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent2 group-focus-visible:text-slate-200 ${
                    activeSection === 'projects' ? 'text-slate-200' : ''
                  }`}
                >
                  Project
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('tools')}
                className="group flex items-center py-3"
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 bg-accent transition-all group-hover:w-16 group-hover:bg-accent2 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    activeSection === 'tools' ? 'w-16 bg-slate-200' : ''
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent2 group-focus-visible:text-slate-200 ${
                    activeSection === 'tools' ? 'text-slate-200' : ''
                  }`}
                >
                  Tools | Built
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0 text-xs">
          <Link
            href="https://github.com/Naqii"
            className="text-secondary dark:text-gray-500 hover:text-accent dark:hover:text-white transition-colors"
            title="Github"
            aria-label="Github (opens in a new tab)"
            target="_blank"
          >
            <span className="sr-only">Github</span>
            <FaGithub className="w-5 h-5" />
          </Link>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <Link
            href="https://www.linkedin.com/in/sunan-baihaqi-amrullah/"
            className="text-secondary dark:text-gray-500 hover:text-accent dark:hover:text-white transition-colors"
            title="Linkedin"
            aria-label="Linkedin (opens in a new tab)"
            target="_blank"
          >
            <span className="sr-only">Linkedin</span>
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <Link
            href="mailto:hqq.amrullah@gmail.com"
            className="text-secondary dark:text-gray-500 hover:text-accent dark:hover:text-white transition-colors"
            title="Email"
            aria-label="Email (opens in a new tab)"
            target="_blank"
          >
            <span className="sr-only">Email</span>
            <FaMailBulk className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </header>
  )
}
// onClick={() => scrollToSection('projects')}
//         className={`text-sm transition-colors block ${
//           activeSection === 'projects'
//             ? 'text-gray-900 dark:text-white font-medium'
//             : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'
//         }`}
