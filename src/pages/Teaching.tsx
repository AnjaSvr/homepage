import { GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Course {
  title: string;
  code: string;
  term: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

const courses: Course[] = [
  {
    title: "Knots Seminar",
    code: "",
    term: "winter semester 2025/26",
    description: "I co-organized a two-day student seminar on knot theory (March 26–27), covering topics including knot and link diagrams, Reidemeister moves, knot invariants, the Jones polynomial, braids and braid groups, tangles, Seifert surfaces, Chern–Simons theory, and Khovanov homology.",
    link: "http://www.scheimbauer.at/teaching/knots25/knots.html",
    linkLabel: "Syllabus & details"
  },
  {
    title: "Bordisms & TFTs",
    code: "",
    term: "winter semester 2023/24",
    description: "Taught by Claudia Scheimbauer, this course introduced cobordism, bordism rings, and topological field theories from a functorial perspective (Atiyah–Segal), with an outlook on connections to group representations. I organized and ran the exercise classes.",
  },
  {
    title: "Algebra",
    code: "",
    term: "summer semester 2023 and 2024",
    description: "",
  },
  {
    title: "Linear Algebra",
    code: "",
    term: "winter semester 2022/23 and 2023/24",
    description: "",
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

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Courses</h2>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <Card 
                    key={index} 
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary group"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <Badge variant="secondary" className="text-sm">
                          {course.term}
                        </Badge>
                      </div>
                      <CardDescription className="text-primary font-semibold text-lg">
                        {course.code}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-2">{course.description}</p>

                      {course.link && (
                        <p className="text-muted-foreground">
                          {course.linkLabel ?? "More info"}{" "}
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80"
                          >
                            here
                          </a>
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
