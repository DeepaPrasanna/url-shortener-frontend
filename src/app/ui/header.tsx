import Link from "next/link";

const Header = () => {
  return (
    <header className="px-2 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <Link className="text-xl font-medium" href="/">
          TeenyURL{" "}
        </Link>
        {/* <nav className="ml-10 hidden gap-4 sm:gap-6 md:flex">
          <Link
            href="/#features"
            key="Features"
            className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            Features
          </Link>

          <Link
            href="/app"
            key="History"
            className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            History
          </Link>
        </nav> */}
        <div className="ml-auto">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
