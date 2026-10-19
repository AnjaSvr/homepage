import { GraduationCap, Clock, Users, ExternalLink, MapPin, DoorOpen } from "lucide-react";import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";

interface Course {
  title: string;
  subtitle?: string;       // e.g. original German course name
  institution: string;
  term: string;
  lecturer?: string;
  roles?: { label: string; details?: string[]; location?: string; room?: string }[];
  description?: string;
  topics?: string[];
  link?: string;
  linkLabel?: string;
}

const currentCourse: Course = {
  title: "Mathematics for Physics Students III",
  subtitle: "Mathematik für Studierende der Physik III (MfP3)",
  institution: "University of Hamburg",
  term: "Winter semester 2026/27",
  lecturer: "Ralf Holtkamp",
  roles: [
    {
      label: "Central exercise class",
      details: ["Wednesdays, 16:15–17:45"],
      location: "Haus der Informatik · Bundesstraße 56b",
      room: "Lecture Hall 2 (Room 00-727)",
    },
    {
      label: "Tutorials",
      details: ["Group B4: Tuesdays, 10:15–11:45", "Group C1: Tuesdays, 14:15–15:45"],
      location: "MIN-Forum · Bundesstraße 56a",
      room: "Seminar Room 3.2 (Room 03-209)",
    },
  ],
  topics: [
    "Lebesgue integral",
    "Fubini's theorem",
    "Change of variables",
    "Fourier series & transform",
    "Integration on manifolds",
    "Differential forms",
    "Integral theorems",
    "Distributions",
    "PDEs",
  ],
  link: "https://www.math.uni-hamburg.de/home/holtkamp/mfp3.html",
  linkLabel: "Course page",
};

// Newest first
const previousCourses: Course[] = [
  {
    title: "Topological Quantum Field Theory",
    institution: "Technical University of Munich",
    term: "Summer semester 2026",
    description:
      "Taught by William Stewart, this course introduces topological quantum field theory from a functorial perspective, explaining how geometric objects and their gluing and cutting properties give rise to algebraic structures. Topics include cobordisms, Frobenius algebras, tensor categories, finite gauge theory and the cobordism hypothesis. I organized and ran the exercise classes.",
  },
  {
    title: "Knots Seminar",
    institution: "Technical University of Munich",
    term: "Winter semester 2025/26",
    description:
      "I co-organized a two-day student seminar on knot theory (March 26–27), covering knot and link diagrams, Reidemeister moves, knot invariants, the Jones polynomial, braids and braid groups, tangles, Seifert surfaces, Chern–Simons theory, and Khovanov homology.",
    link: "http://www.scheimbauer.at/teaching/knots25/knots.html",
    linkLabel: "Syllabus & details",
  },
  {
    title: "Bordisms & TFTs",
    institution: "Technical University of Munich",
    term: "Winter semester 2023/24",
    description:
      "Taught by Claudia Scheimbauer, this course introduced cobordism, bordism rings, and topological field theories from a functorial perspective (Atiyah–Segal), with an outlook on connections to group representations. I organized and ran the exercise classes.",
    link: "http://www.scheimbauer.at/teaching/TFT/TFTcourse.html",
    linkLabel: "Syllabus & details",
  },
  {
    title: "Algebra",
    institution: "Technical University of Munich",
    term: "Summer semesters 2023 and 2024",
  },
  {
    title: "Linear Algebra",
    institution: "Technical University of Munich",
    term: "Winter semesters 2022/23 and 2023/24",
  },
];

const Teaching = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Teaching</h1>
          </div>

          <div className="space-y-12">
            {/* ---------- Current teaching ---------- */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Currently teaching
                </h2>
              </div>

              <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-card p-8 shadow-md">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-1">
                  <h3 className="text-2xl font-bold text-foreground">{currentCourse.title}</h3>
                  <Badge className="w-fit text-sm">{currentCourse.term}</Badge>
                </div>
                {currentCourse.subtitle && (
                  <p className="text-muted-foreground italic mb-4">{currentCourse.subtitle}</p>
                )}

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {currentCourse.institution}
                  </span>
                  {currentCourse.lecturer && (
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" /> Lecture by {currentCourse.lecturer}
                    </span>
                  )}
                </div>

                {currentCourse.roles && (
                  <div className="mb-6">
                    <p className="font-semibold text-foreground uppercase mb-3" style={{ fontVariant: "small-caps" }}>
                      My role
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentCourse.roles.map((role, i) => (
                        <div key={i} className="rounded-lg border border-border bg-background p-4">
                          <p className="font-medium text-foreground">{role.label}</p>
                          {role.details?.map((d, j) => (
                            <p key={j} className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                              <Clock className="w-4 h-4 shrink-0" /> {d}
                            </p>
                          ))}
                         {role.location && (
                            <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                              <MapPin className="w-4 h-4 shrink-0" /> {role.location}
                            </p>
                          )}
                          {role.room && (
                            <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                              <DoorOpen className="w-4 h-4 shrink-0" /> {role.room}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentCourse.topics && (
                  <div className="mb-6">
                    <p className="font-semibold text-foreground uppercase mb-3" style={{ fontVariant: "small-caps" }}>
                      Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentCourse.topics.map((topic, i) => (
                        <Badge key={i} variant="secondary" className="text-sm font-normal">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {currentCourse.link && (
                  <a
                    href={currentCourse.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    {currentCourse.linkLabel ?? "More info"} <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </section>

            {/* ---------- Previous teaching (timeline) ---------- */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Previous Teaching</h2>

              <ol className="relative border-l-2 border-border ml-3 space-y-10">
                {previousCourses.map((course, index) => (
                  <li key={index} className="pl-8 relative group">
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

                    <p className="text-sm font-medium text-primary mb-1">{course.term}</p>
                    <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                    <p className="text-muted-foreground mb-2">{course.institution}</p>

                    {course.description && (
                      <p className="text-foreground leading-relaxed">{course.description}</p>
                    )}

                    {course.link && (
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-primary underline hover:text-primary/80"
                      >
                        {course.linkLabel ?? "More info"} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;