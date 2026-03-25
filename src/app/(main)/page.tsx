import Sidebar from '@/components/layout/Sidebar'
import AboutSection from '@/components/sections/About'
import ContactSection from '@/components/sections/Contact'
import ExperienceSection from '@/components/sections/ToolsSection'
import ProjectsSection from '@/components/sections/Projects'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
