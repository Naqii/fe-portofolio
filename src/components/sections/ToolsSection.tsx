export default function ToolsSection() {
  const tools = [
    {
      period: '2024 — PRESENT',
      role: 'Senior Frontend Engineer, Accessibility',
      company: 'Klaviyo',
      description:
        "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      tech: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
    },
    {
      period: '2018 — 2024',
      role: 'Lead Engineer',
      company: 'Upstatement',
      description:
        'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more.',
      tech: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'WordPress',
      ],
    },
    {
      period: 'July — Dec 2017',
      role: 'UI Engineer',
      company: 'Apple',
      description:
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
      tech: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
    },
  ]

  return (
    <section id="tools" className="mb-24 scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-main text-xl font-bold uppercase tracking-widest text-secondary lg:sr-only">
          Tools | Built
        </h2>
      </div>
      <h2 className="hidden text-xl font-semibold text-secondary dark:text-gray-500 mb-8 tracking-wide">
        Tools | Built
      </h2>
      <div className="space-y-12">
        {tools.map((exp, index) => (
          <div key={index} className="group">
            <div className="grid grid-cols-[100px_1fr] gap-6">
              <p className="text-xs text-secondary dark:text-gray-500 font-mono">
                {exp.period}
              </p>
              <div>
                <h3 className="font-semibold text-accent dark:text-white mb-1">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-sm text-secondary dark:text-gray-400 mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-accent2 dark:text-gray-500"
                    >
                      {tech}
                      {techIndex < exp.tech.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
