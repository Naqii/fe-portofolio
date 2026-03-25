// app/components/main/ProjectsSection.tsx
import { Link } from '@heroui/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectsSection() {
  const projects = [
    {
      name: 'Build a Spotify Connected App',
      description:
        'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
      tech: ['React', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'Spotify Profile',
      description:
        'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected Project"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-main text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <h2 className="hidden text-xl font-semibold text-secondary dark:text-gray-500 mb-8 tracking-wide">
        Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-accent dark:text-white">
                {project.name}
              </h3>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={project.github}
                  className="text-secondary hover:text-accent dark:hover:text-white"
                >
                  <FaGithub className="w-4 h-4" />
                </Link>
                <Link
                  href={project.live}
                  className="text-secondary hover:text-accent dark:hover:text-white"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <p className="text-sm text-secondary dark:text-gray-400 mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs text-accent2 dark:text-gray-500"
                >
                  {tech}
                  {techIndex < project.tech.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
