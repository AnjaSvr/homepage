const About = () => {
  return (
    <section className="py-12 px-6 bg-card">
      <div className="container mx-auto max-w-3xl">
        <p className="text-lg text-foreground leading-relaxed mb-8">
          Hi, I’m Anja! Since October 2026, I am a postdoc at the{" "}
          <a href="https://www.math.uni-hamburg.de/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            University of Hamburg
          </a>.
        </p>

        <p className="text-lg text-foreground leading-relaxed mb-8">
          I obtained my PhD in mathematical physics in September 2026 at the Technical University of Munich, under the supervision of{" "}
          <a href="http://www.scheimbauer.at/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Claudia Scheimbauer
          </a>{" "}
          and co-supervision of{" "}
          <a href="https://www.math.cit.tum.de/en/algebra/personen/walde/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
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
          <a href="https://sfb-higher-invariants.app.uni-regensburg.de/index.php?title=Main_Page" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            SFB 1085: Higher Invariants
          </a>{" "}
          from the Deutsche Forschungsgemeinschaft (DFG) and by the Simons Collaboration on{" "}
          <a href="https://scgcs.berkeley.edu/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Global Categorical Symmetries
          </a>.
        </p>
      </div>
    </section>
  );
};

export default About;