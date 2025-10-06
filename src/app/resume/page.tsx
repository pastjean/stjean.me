import Image from "next/image";
import resumeData from "@/data/resume.json";

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white min-h-screen shadow-lg font-raleway">
      {/* Header Section - Full Width */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-8 pb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="https://www.gravatar.com/avatar/cb4bdf0ed077f6b5a8a94f0548c982ea?s=128&d=mp"
            alt="Pierre-Alexandre St-Jean"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {resumeData.personal.name}
          </h1>
          <p className="text-base text-gray-600 tracking-wide mb-4">
            {resumeData.personal.title}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-400"></span>
            <span>{resumeData.personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-400"></span>
            <span>{resumeData.personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-400"></span>
            <a
              href={`mailto:${resumeData.personal.website}`}
              className="text-blue-600 hover:underline"
            >
              {resumeData.personal.website}
            </a>
          </div>
        </div>
      </div>

      {/* About Me - Full Width on Top */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-wide border-b border-gray-300 pb-1">
          {resumeData.about.title}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {resumeData.about.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Education Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-wide border-b border-gray-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.year}-${edu.location}`}
                  className="flex gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-gray-600">{edu.school}</p>
                    <p className="text-xs text-gray-500">
                      {edu.year} | {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-wide border-b border-gray-300 pb-1">
              {resumeData.links.title}
            </h2>
            <div className="space-y-2">
              {resumeData.links.items.map((link) => (
                <div key={link.url}>
                  <h3 className="font-semibold text-sm text-gray-900">
                    {link.label}
                  </h3>
                  <a
                    href={link.url}
                    className="text-xs text-blue-600 underline break-all"
                  >
                    {link.url}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-wide border-b border-gray-300 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {resumeData.projects.map((project) => (
                <div
                  key={`${project.title}-${project.period}-${project.location}`}
                  className="flex gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-semibold">
                      {project.period}
                    </p>
                    <p className="text-xs text-gray-600">{project.location}</p>
                    <p className="text-xs text-gray-700 mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Talks Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-wide border-b border-gray-300 pb-1">
              TALKS
            </h2>
            <div className="space-y-4">
              {resumeData.talks.map((talk) => (
                <div key={`${talk.title}-${talk.date}`} className="flex gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-400 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {talk.title}
                    </h3>
                    <p className="text-xs text-gray-600">{talk.location}</p>
                    <p className="text-xs text-gray-500">{talk.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Work Experience */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-gray-900 mb-6 tracking-wide border-b border-gray-300 pb-1">
            WORK EXPERIENCE
          </h2>

          <div className="space-y-6">
            {resumeData.workExperience.map((job) => (
              <div
                key={`${job.title}-${job.company}-${job.period}`}
                className="flex gap-4"
              >
                <div className="w-4 h-4 rounded-full bg-gray-400 flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="font-bold text-sm text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-semibold">
                      {job.period}
                    </p>
                    <p className="text-xs text-gray-600">
                      {job.company} | {job.location}
                    </p>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {job.responsibilities.map((responsibility) => (
                      <li
                        key={`${job.title}-${job.company}-${responsibility}`}
                        className="leading-relaxed"
                      >
                        • {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
