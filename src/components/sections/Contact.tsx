import { Link } from '@heroui/link'
import { FaMailBulk } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="mb-24 scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-main text-xl font-bold uppercase tracking-widest text-secondary lg:sr-only">
          Contact
        </h2>
      </div>
      <h2 className="hidden text-sm font-semibold text-secondary dark:text-gray-500 mb-8 tracking-wide">
        Contact
      </h2>
      <div className="space-y-4">
        <p className="font-secondary text-secondary dark:text-gray-400 leading-relaxed">
          I&lsquo;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
        <div className="flex items-center gap-2">
          <FaMailBulk className="w-4 h-4 text-secondary" />
          <Link
            href="mailto:hqq.amrullah@gmail.com"
            className="text-accent dark:text-white hover:text-accent2 dark:hover:text-gray-400 transition-colors"
          >
            hqq.amrullah@gmail.com
          </Link>
        </div>
      </div>
    </section>
  )
}
