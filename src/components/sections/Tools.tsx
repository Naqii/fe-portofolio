// app/components/ToolsContent.tsx
import { Card, CardBody } from '@heroui/card'
import { FaCloud, FaDatabase, FaFileCode, FaTerminal } from 'react-icons/fa'

export default function ToolsContent() {
  const tools = {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HeroUI'],
    backend: ['Node.js', 'Python', 'Express', 'FastAPI'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    devops: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    design: ['Figma', 'Adobe XD', 'Framer'],
  }

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tools | Built
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build fast, scalable web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <FaFileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.frontend.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <FaTerminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.backend.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <FaDatabase className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Database</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.database.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardBody className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <FaCloud className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold">DevOps & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.devops.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
