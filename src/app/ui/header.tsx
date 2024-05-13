import Link from "next/link";

const Header = () => {
  return (
    <header className="px-2 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <Link className="text-xl font-medium" href="/">
          TeenyURL{" "}
        </Link>
        <nav className="ml-10 hidden gap-4 sm:gap-6 md:flex">
          <Link
            href="/#features"
            key="Features"
            className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            Features
          </Link>

          <Link
            href="/app"
            key="Features"
            className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            History
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
