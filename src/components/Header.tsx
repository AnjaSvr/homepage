import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Left: Name + affiliation */}
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
                Anja Švraka
              </h1>
            </Link>
            <p className="text-sm text-muted-foreground">
               Department of Mathematics
            </p>
            <p className="text-sm text-muted-foreground">
              University of Hamburg
            </p>
          </div>

          {/* Right: Navigation */}
          <nav className="flex gap-4 md:gap-6">
            {[
              { path: "/", label: "Home" },
              { path: "/cv", label: "CV" },
              { path: "/research", label: "Research" },
               { path: "/talks", label: "Talks" },
              { path: "/teaching", label: "Teaching" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm md:text-base font-medium transition-colors hover:text-primary ${
                  isActive(path) ? "text-primary" : "text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
