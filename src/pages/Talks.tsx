import { Presentation } from "lucide-react";
import Header from "@/components/Header";

interface Talk {
  date: string;
  title: string;
  eventPrefix?: string; // optional text before the event name, e.g. "Workshop on"
  event: string;        // event name (this part is linked)
  link?: string;
  place: string;        // city, country
}

// Newest first
const talks: Talk[] = [
  {
    date: "October 2026",
    title: "Additivity of Constructible Factorization Algebras",
    event: "Topology Intercity Seminar (TopICS)",
    link: "https://tlundemo.com/topics.html",
    place: " Universiteit Utrecht  ·  Utrecht, Netherlands",
  },
  {
    date: "June 2026",
    title: "Additivity of Constructible Factorization Algebras",
    eventPrefix: "Workshop on",
    event: "Derived Algebraic Geometry, CoHAs and Operads",
    link: "https://math.univ-angers.fr/~bozec/rencontre1.html",
    place: "Université Angers  ·  Angers, France",
  },
  {
    date: "March 2026",
    title: "Additivity of Constructible Factorization Algebras",
    event: "ALPE Seminar",
    link: "https://www.math.univ-toulouse.fr/~rcampos/ALPE/next_event.html",
    place: "IMAG  ·  Montpellier, France",
  },
  {
    date: "November 2025",
    title: "Additivity of Constructible Factorization Algebras",
    event: "Quantum Universe Attract Workshop",
    link: "https://indico.desy.de/event/50023/contributions/195134/",
    place: "Universität Hamburg/DESY · Hamburg, Germany",
  },
  {
    date: "December 2024",
    title: "Additivity of Constructible Factorization Algebras",
    event: "Mathematical Structures in Physics Seminar",
    link: "https://www.mis.mpg.de/events/event/additivity-of-constructible-factorization-algebras",
    place: "Max Planck Institute for Mathematics in the Sciences  ·  Leipzig, Germany",
  },
];

const Talks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Presentation className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Talks</h1>
          </div>

          <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <ul className="list-disc pl-6 space-y-5 text-lg text-foreground leading-relaxed">
              {talks.map((talk, index) => (
                <li key={index}>
                  <div>
                    {talk.eventPrefix && <>{talk.eventPrefix} </>}
                    {talk.link ? (
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                      >
                        {talk.event}
                      </a>
                    ) : (
                      talk.event
                    )}
                    , {talk.date}
                  </div>
                  <div className="text-muted-foreground">{talk.place}</div>
                  <div>
                     <span className="font-semibold">Talk:</span> <em>{talk.title}</em>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Talks;