import { FileText } from "lucide-react";
import Header from "@/components/Header";

interface Conference {
  title: string;
  place: string;
  date: string;
  link?: string;
}

interface Honor {
  category: string;
  title: string;
  institution: string;
  year: string;
}

const honors: Honor[] = [
  {
    category: "Teaching Awards",
    title: "Preis für gute Lehre — 2nd Place (Best Introductory Lecture Award)",
    institution: "Technical University of Munich",
    year: "2024",
  },
  {
    category: "Student Awards",
    title: "TUM Scholarship for International Students",
    institution: "Technical University of Munich",
    year: "2021",
  },
  {
    category: "Student Awards",
    title: "German National Scholarship Program at TUM",
    institution: "Technical University of Munich",
    year: "2020",
  },
  {
    category: "Nominations",
    title: "TUM: Junge Akademie",
    institution: "Technical University of Munich",
    year: "2021",
  },
];


const conferences: Conference[] = [
  {
    title: "Higher Structures: Recent Developments and Applications",
    place: "University of Hamburg",
    date: "September 2025",
    link: "https://www.math.uni-hamburg.de/home/dyckerhoff/HigherStructuresWorkshop2025/",
  },
  {
    title: "Infinity Operads and Applications to Geometry",
    place: "University of Copenhagen",
    date: "August 2025",
    link: "https://www.math.ku.dk/english/calendar/events/infinity-operads-and-manifolds/",
  },
  {
    title: "QFT and Topological Phases via Homotopy Theory and Operator Algebras  ",
    place: "Twinned Workshop: MPIM (Bonn) and CMSA (Harvard)",
    date: "July 2025",
    link: "https://www.mpim-bonn.mpg.de/qft25",
  },
  {
    title: "Topological Symmetries and Defects in Quantum Field Theory ",
    place: "SwissMAP, Les Diablerets",
    date: "Jun 2025",
    link: "https://indico.global/event/9644/overview",
  },
  {
    title: "Gray Products and Lax Constructions",
    place: "Technical University of Munich",
    date: "March 2025",
    link: "https://jacksontvandyke.com/raitenhaslach.html",
  },
  {
    title: "Cobordism Categories - Building Bridges Between Algebra and Geometry ",
    place: "University of Copenhagen",
    date: "February 2025",
    link: "https://www.math.ku.dk/english/calendar/events/cobordism-categories_copy/",
  },
   {
    title: "Algebraic Structures in Quantum Field Theory ",
    place: "Humboldt University of Berlin",
    date: "October 2024",
    link: "https://indico.desy.de/event/45648/overview",
  },
   {
    title: "Categorical Symmetries in Quantum Field Theory ",
    place: "ICMS, Edinburgh",
    date: "Jun 2024",
    link: "https://icms.ac.uk/archive/workshop/categorical-symmetries-in-quantum-field-theory-workshop/",
  },
   {
    title: "Categorical Symmetries in Quantum Field Theory ",
    place: "SwissMAP, Les Diablerets",
    date: "September 2023",
    link: "https://indico.global/event/9595/overview",
  },
   {
    title: "Higher Structures in Functorial Field Theory ",
    place: "University of Regensburg",
    date: "August 2023",
    link: "https://www.matthias-ludewig.eu/ConferenceFFT/index.html",
  },
   {
    title: "TQFTs and Their Connections to Representation Theory and Mathematical Physics ",
    place: "Hausdorff School, Hausdorff Center for Mathematics, University of Bonn",
    date: "June 2023",
    link: "https://www.mathematics.uni-bonn.de/hsm-school/programs/schools/hsm-special-topic-schools/hs_2023_06_19",
  },

  

  
];



const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Curriculum Vitae</h1>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Ph.D. Candidate </h3>
                  <p className="text-muted-foreground">Technical University of Munich, 2022- present</p>
                  <p className="text-foreground mt-2">Topic: Additivity of Constructible Factorization Algebras</p>
                  <p className="text-foreground mt-2">Supervisor: Prof. Dr. Claudia Scheimbauer</p>
                  <p className="text-foreground mt-2">Co-supervisor: Dr. Tashi Walde</p>
                  <p className="text-foreground mt-2">Expected Graduation: September 2026</p>
                </div>
                <div className="border-l-4 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Master of Science, Mathematics </h3>
                  <p className="text-muted-foreground">Technical University of Munich, 2019-2022</p>
                  <p className="text-foreground mt-2">Topic : Invertible Topological Field Theories and Stable Homotopy Theory</p>
                  <p className="text-foreground mt-2">Supervisor: Prof. Dr. Claudia Scheimbauer</p>
                </div>
                <div className="border-l-4 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground">Bachelor’s Degree in Pure Mathematics and Applications </h3>
                  <p className="text-muted-foreground">University of Belgrade, Faculty of Mathematics, 2014-2018</p>
                </div>
              </div>
            </section>
            <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Conferences & Schools Attended
                </h2>

                <div className="space-y-6">
                  {conferences.map((conf, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-muted pl-6 transition-colors hover:border-primary"
                    >
                      <h3 className="text-lg font-semibold text-foreground">
                        {conf.link ? (
                          <a
                            href={conf.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80"
                          >
                            {conf.title}
                          </a>
                        ) : (
                          conf.title
                        )}
                      </h3>

                      <p className="text-muted-foreground">
                        {conf.place}
                      </p>

                      <p className="text-muted-foreground italic">
                        {conf.date}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

            <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Honors & Awards
              </h2>

              <div className="space-y-6">
                {honors.map((honor, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-muted pl-6 transition-colors hover:border-primary"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {honor.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {honor.institution}
                    </p>

                    <p className="text-muted-foreground italic">
                      {honor.category}, {honor.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
