import Image from "next/image";
import { data as resumeData } from "@/data/resume";
import type { TimelineEntry } from "@/types/resume";

// Helper function to parse ISO 8601 dates without timezone conversion
function parseISODate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// Helper function to format date ranges
function formatDateRange(startDate: string, endDate?: string): string {
  const start = parseISODate(startDate);
  const startFormatted = start.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  if (!endDate) {
    return `${startFormatted} - Present`;
  }

  const end = parseISODate(endDate);
  const endFormatted = end.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return `${startFormatted} - ${endFormatted}`;
}

// Helper function to format single dates
function formatSingleDate(date: string): string {
  const d = parseISODate(date);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// Combine all items into a single timeline
type TimelineItem = {
  type: "work" | "education" | "project" | "talk";
  date: Date;
  dateStr: string;
  title: string;
  subtitle?: string;
  location?: string;
  content?: string[];
  description?: string;
};

export default function ResumeTimeline() {
  // Build timeline items from unified timeline array
  const timelineItems: TimelineItem[] = resumeData.timeline.map((entry) => {
    switch (entry.type) {
      case "work":
        return {
          type: "work",
          date: parseISODate(entry.endDate || entry.startDate),
          dateStr: formatDateRange(entry.startDate, entry.endDate),
          title: entry.position,
          subtitle: `${entry.name} | ${entry.location}`,
          content: entry.highlights,
        };

      case "project":
        return {
          type: "project",
          date: parseISODate(entry.endDate || entry.startDate),
          dateStr: formatDateRange(entry.startDate, entry.endDate),
          title: entry.name,
          subtitle: entry.location,
          description: entry.summary,
        };

      case "education":
        return {
          type: "education",
          date: parseISODate(entry.endDate),
          dateStr: formatDateRange(entry.startDate, entry.endDate),
          title: entry.institution,
          subtitle: `${entry.studyType} ${entry.area} | ${entry.location}`,
        };

      case "talk":
        return {
          type: "talk",
          date: parseISODate(entry.releaseDate),
          dateStr: formatSingleDate(entry.releaseDate),
          title: entry.name,
          subtitle: entry.publisher,
          location: entry.location,
        };

      default:
        const _exhaustiveCheck: never = entry;
        throw new Error(`Unhandled entry type: ${(_exhaustiveCheck as any).type}`);
    }
  });

  // Sort by date (newest first)
  timelineItems.sort((a, b) => b.date.getTime() - a.date.getTime());

  // Style mappings for different types
  const typeStyles = {
    work: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      dot: "bg-blue-500",
      label: "Work",
      labelBg: "bg-blue-500",
    },
    education: {
      bg: "bg-green-50",
      border: "border-green-300",
      dot: "bg-green-500",
      label: "Education",
      labelBg: "bg-green-500",
    },
    project: {
      bg: "bg-purple-50",
      border: "border-purple-300",
      dot: "bg-purple-500",
      label: "Project",
      labelBg: "bg-purple-500",
    },
    talk: {
      bg: "bg-orange-50",
      border: "border-orange-300",
      dot: "bg-orange-500",
      label: "Talk",
      labelBg: "bg-orange-500",
    },
  };

  return (
    <main className="max-w-5xl mx-auto p-8 bg-white min-h-screen shadow-lg font-raleway">
      {/* Header Section - Full Width */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="https://www.gravatar.com/avatar/cb4bdf0ed077f6b5a8a94f0548c982ea?s=128&d=mp"
            alt={resumeData.basics.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {resumeData.basics.name}
          </h1>
          <p className="text-base text-gray-600 tracking-wide mb-4">
            {resumeData.basics.label}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <div>
            <span>{resumeData.basics.location.city}, {resumeData.basics.location.region}, {resumeData.basics.location.countryCode}</span>
          </div>
          <div>
            <span>{resumeData.basics.phone}</span>
          </div>
          <div>
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="text-blue-600 hover:underline"
            >
              {resumeData.basics.email}
            </a>
          </div>
          {resumeData.basics.profiles.map((profile) => (
            <div key={profile.url}>
              <a href={profile.url} className="text-blue-600 hover:underline">
                {profile.network}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* About Me - Full Width on Top */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3 tracking-wide border-b border-gray-300 pb-1">
          About Me
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {resumeData.basics.summary}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="space-y-6">
          {timelineItems.map((item, index) => {
            const styles = typeStyles[item.type];
            const isLast = index === timelineItems.length - 1;
            return (
              <div
                key={`${item.type}-${item.title}-${index}`}
                className="relative pl-16"
              >
                {/* Timeline line - attached to each item so it works across page breaks */}
                {!isLast && (
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 -mb-6"></div>
                )}
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 w-5 h-5 rounded-full ${styles.dot} border-4 border-white shadow-md z-10`}
                ></div>

                {/* Content - no card styling */}
                <div>
                  {/* Title with badge and date */}
                  <div className="mb-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`${styles.labelBg} text-white text-sm font-bold px-2 py-0.5 rounded`}
                      >
                        {styles.label}
                      </span>
                      <h3 className="font-bold text-sm text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">
                      {item.dateStr}
                    </p>
                    {item.subtitle && (
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    )}
                    {item.location && (
                      <p className="text-sm text-gray-500">{item.location}</p>
                    )}
                  </div>

                  {/* Description or responsibilities */}
                  {item.description && (
                    <p className="text-sm text-gray-700 mt-1">
                      {item.description}
                    </p>
                  )}

                  {item.content && (
                    <ul className="space-y-0.5 text-sm text-gray-700 mt-1">
                      {item.content.map((line) => (
                        <li key={line} className="leading-relaxed">
                          • {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
