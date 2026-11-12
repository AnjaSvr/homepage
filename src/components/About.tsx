import type { ReactNode } from "react";

interface NewsItem {
  date: string;
  content: ReactNode;
}

const linkClass = "text-blue-500 hover:underline";

// Newest first
const news: NewsItem[] = [
  {
    date: "Nov 2026",
    content: (
      <>
        Upcoming talk at the{" "}
        <a href="https://tqft.math.tecnico.ulisboa.pt/" className={linkClass} target="_blank" rel="noopener noreferrer">
          TQFT Club
        </a>
        , Instituto Superior Técnico, Lisbon (24 November).
      </>
    ),
  },
  {
    date: "Nov 2026",
    content: <>Upcoming talk at the Higher Structures Seminar, University of Hamburg (20 November).</>,
  },
  {
    date: "Oct 2026",
    content: (
      <>
        Started as a postdoc at the{" "}
        <a href="https://www.math.uni-hamburg.de/" className={linkClass} target="_blank" rel="noopener noreferrer">
          University of Hamburg
        </a>
        .
      </>
    ),
  },
  {
    date: "Sep 2026",
    content: <>Completed my PhD at the Technical University of Munich.</>,
  },
];

const About = () => {
  return (
    <section className="py-12 px-6 bg-card">
      <div className="container mx-auto max-w-3xl">
        <p className="text-lg text-foreground leading-relaxed mb-8">
          Hi, I’m Anja! Since October 2026, I am a postdoc at the{" "}
          <a href="https://www.math.uni-hamburg.de/" className={linkClass} target="_blank" rel="noopener noreferrer">
            University of Hamburg
          </a>.
        </p>

        <p className="text-lg text-foreground leading-relaxed mb-8">
          I obtained my PhD in mathematical physics in September 2026 at the Technical University of Munich, under the supervision of{" "}
          <a href="http://www.scheimbauer.at/" className={linkClass} target="_blank" rel="noopener noreferrer">
            Claudia Scheimbauer
          </a>{" "}
          and co-supervision of{" "}
          <a href="https://www.math.cit.tum.de/en/algebra/personen/walde/" className={linkClass} target="_blank" rel="noopener noreferrer">
            Tashi Walde
          </a>.
        </p>

        <p className="text-lg text-foreground leading-relaxed mb-8">
          My research interests include higher algebra, higher category theory, and their applications to
          mathematical physics and algebraic topology. I am interested in the mathematical frameworks
          that underpin the study of quantum field theories and in the higher categorical structures that organize their algebraic
          and geometric content.
        </p>

        <p className="text-lg text-foreground leading-relaxed mb-8">
          During my PhD, I was supported by{" "}
          <a href="https://sfb-higher-invariants.app.uni-regensburg.de/index.php?title=Main_Page" className={linkClass} target="_blank" rel="noopener noreferrer">
            SFB 1085: Higher Invariants
          </a>{" "}
          from the Deutsche Forschungsgemeinschaft (DFG) and by the Simons Collaboration on{" "}
          <a href="https://scgcs.berkeley.edu/" className={linkClass} target="_blank" rel="noopener noreferrer">
            Global Categorical Symmetries
          </a>.
        </p>

        {/* News */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">News</h2>
          <ul className="space-y-4">
            {news.map((item, index) => (
              <li key={index} className="flex flex-col sm:flex-row sm:gap-6 text-lg leading-relaxed">
                <span className="shrink-0 sm:w-24 font-semibold text-primary">{item.date}</span>
                <span className="text-foreground">{item.content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;