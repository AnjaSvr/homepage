import { BookOpen } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import factorizationFigure from "@/assets/figures/factorization-diagram.png";
import symmetriesFigure from "@/assets/figures/symmetries-figure.png";

interface Author {
  name: string;
  link?: string; // optional, in case some authors don't have a webpage
}

interface Publication {
  title: string;
  authors: Author[];
  link: string;
  year: string;
  abstract?: string;
  figure?: string;
  keywords?: string;
}

interface Talk {
  title: string;
  venue: string; // university + city
  date: string;
  link?: string; // optional link 
  abstract?: string; // optional abstract
}



const publications: Publication[] = [
  {
    title: "Additivity of Constructible Factorization Algebras over Manifolds with Corners ",
    authors: [
      { name: "Victor Carmona", link: "https://personal.us.es/vcarmona1/" },
      { name: "Anja Švraka"}
    ],
    link: "https://arxiv.org/abs/2510.26504",
    year: "2025",
    abstract: "We prove the statement in the title, solving in this way a conjecture stated by Ginot for manifolds with corners. Along the way, we establish a derived Swiss-cheese additivity theorem and an alternative proof for the hyperdescent of factorization algebras over those manifolds.",
    figure: factorizationFigure,
    keywords: "factorization algebras, Swiss-cheese operads, homotopical algebra, derived Dunn additivity, manifolds with corners",
  },
  {
    title: "Simons Lectures on Categorical Symmetries ",
    authors: [
      { name: "Davi Costa", link: "https://physics.uchicago.edu/people/profile/clay-cordova/" },
      { name: "Michele Del Zotto" , link: "https://www.uu.se/en/contact-and-organisation/staff?query=N20-103"},
      { name: "Dan Freed", link:"https://people.math.harvard.edu/~dafr/" },
      { name: "Jonte Gödicke", link: "https://jonte-goedicke.com/" },
      { name: "Aaron Hofer", link: "https://aaron-hofer.github.io/" },
      { name: "David Jordan", link: "https://webhomes.maths.ed.ac.uk/~djordan/"},
      { name: "Davide Morgante", link: "https://davidemorgante.github.io/"},
      { name: "Robert Moscrop",link: "https://cmsa.fas.harvard.edu/ss_people/robert-moscrop/"},
      { name: "Kantaro Ohmori", link: "https://ithems.riken.jp/en/members/kantaro-omori"},
      { name: "Elias Riedel Gårding", link: "https://www.uu.se/en/contact-and-organisation/staff?query=N20-1173"},
      { name: "Claudia Scheimbauer", link: "http://www.scheimbauer.at/"},
       { name: "Anja Švraka"},
    ],
    link: " https://arxiv.org/abs/2411.09082",
    year: "2024",
    abstract: "Global Categorical Symmetries are a powerful new tool for analyzing quantum field theories. This volume compiles lecture notes from the 2022 and 2023 summer schools on Global Categorical Symmetries, held at the Perimeter Institute for Theoretical Physics and at the Swiss Map Research Station in Les Diableret. I contributed to the notes for David Jordan’s lecture “IV. Applied Cobordism Hypothesis,” in collaboration with Jonte Gödicke and Aaron Hofer.",
    figure: symmetriesFigure,
    keywords: "symmetries in quantum field theory, anomalies, symmetry categories, cobordism hypothesis, finite symmetry in QFT"
  },
];

const talks: Talk[] = [
  {
    title: "Additivity of Constructible Factorization Algebras",
    venue: "Quantum Universe Attract.Workshop, Hamburg",
    date: "November 2025",
    link: "https://indico.desy.de/event/50023/contributions/195134/",
  },
  {
    title: "Additivity of Constructible Factorization Algebras",
    venue: "Max Planck Institute for Mathematics in the Sciences, Leipzig",
    date: "December 2024",
    link: "https://www.mis.mpg.de/events/event/additivity-of-constructible-factorization-algebras",
    abstract: "Factorization algebras, introduced by Costello and Gwilliam, encode the structure of observables in perturbative quantum field theory, capturing concepts like the operator product and correlation functions. Beyond this, their local structures encompass notions such as associative algebras, vertex algebras, bimodules, and En-algebras. Examples of the latter are (possibly braided) tensor categories and n-fold loop spaces. In this talk, I will provide an overview of the surprisingly recently well-studied theory of locally constant factorization algebras. Building on this foundation, I will introduce a broader class of constructible factorization algebras, defined on manifolds with corners or, more generally, stratified manifolds. Examples are given by factorization homology. I will report on recent progress regarding the additivity of factorization algebras, including the additivity of the generalized Swiss cheese operad- a result inspired by Dunn’s theorem for the little disks operad. This is based on joint work with Victor Carmona. In our approach, we use the reformulation of factorization algebras within the framework of operads, which offers powerful tools to study their behavior over product spaces."
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Research</h1>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Research Interests</h2>
              <p className="text-foreground leading-relaxed text-lg">
                My research interests include higher algebra, higher category theory, and their applications to mathe-
                matical physics and algebraic topology. I am interested in the mathematical frameworks that underpin
                the study of quantum field theories and in the higher categorical structures that organize their algebraic
                and geometric content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Preprints</h2>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <Card 
                    key={index} 
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                         {pub.authors.map((author, i) => (
                            <span key={i}>
                              {author.link ? (
                                <a 
                                  href={author.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-primary underline hover:text-primary/80"
                                >
                                  {author.name}
                                </a>
                              ) : (
                                author.name
                              )}
                              {i < pub.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                      </CardDescription>
                    </CardHeader>
                     <CardContent>
                       <div className="flex flex-col md:flex-row gap-4">
                        {/* Abstract Column */}
                        <div className="md:w-2/3">
                          <p className="font-semibold text-foreground uppercase" style={{ fontVariant: "small-caps" }}>Abstract</p>
                          <p className="text-muted-foreground">{pub.abstract}</p>

                          {pub.keywords && (
                            <p className="mt-3 text-muted-foreground">
                              <span
                                className="font-semibold text-foreground uppercase"
                                style={{ fontVariant: "small-caps" }}
                              >
                                Keywords:
                              </span>{" "}
                              {pub.keywords}
                            </p>
                          )}
                        </div>

                        {/* Figure Column */}
                        {pub.figure && (
                          <div className="md:w-1/3 flex justify-center items-start">
                            <img 
                              src={pub.figure} 
                              alt={`${pub.title} figure`} 
                              className="rounded border border-border shadow-sm max-h-64 object-contain"
                            />
                          </div>
                        )}
                      </div>


                        <p className="text-muted-foreground italic">
                       Available at:{" "}
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        arXiv
                      </a>, {pub.year}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Talks section */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Talks</h2>
              <div className="space-y-4">
                {talks.map((talk, index) => (
                  <Card
                    key={index}
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{talk.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {talk.link ? (
                          <a
                            href={talk.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80"
                          >
                            {talk.venue}
                          </a>
                        ) : (
                          talk.venue
                        )}{" "}
                        — {talk.date}
                      </CardDescription>
                    </CardHeader>

                    {talk.abstract && (
                      <CardContent>
                        <p className="font-semibold text-foreground uppercase" style={{ fontVariant: "small-caps" }}>
                          Abstract
                        </p>
                        <p className="text-muted-foreground">{talk.abstract}</p>
                      </CardContent>
                    )}
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

export default Research;
