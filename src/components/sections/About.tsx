// app/components/main/AboutSection.tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About Me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-main text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About Me
        </h2>
      </div>
      <h2 className="hidden text-xl font-semibold text-secondary mb-8 tracking-wide">
        About Me
      </h2>
      <div>
        <p className="mb-4 text-secondary font-secondary">
          I&lsquo;m a frontend engineer with a specialty in web accessibility,
          focused on building pixel-perfect, intuitive user interfaces. I enjoy
          working at the intersection of design and engineering, where great
          user experience meets robust, clean, and scalable code.
        </p>
        <p className="mb-4 text-secondary font-secondary">
          Currently, I&lsquo;m a senior frontend engineer at Klaviyo, where I
          work on the component library team to help maintain and evolve our
          design system. In this role, I lead accessibility efforts across
          components, tooling, and patterns, partnering closely with designers
          and engineers to ensure accessibility is part of our core
          architecture.
        </p>
        <p className="mb-4 text-secondary font-secondary">
          Previously, Ive worked across a wide range of environments, from
          product studios to startups and large tech companies, including Apple,
          Starry Internet, and Upstatement. Alongside my professional work, I
          also created an online video course a few years ago which walks
          through building a real-world, API-driven application from scratch.
        </p>
        <p className="mb-4 text-secondary font-secondary">
          Outside of work, you can usually find me climbing, playing tennis,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds.
        </p>
      </div>
    </section>
  )
}
