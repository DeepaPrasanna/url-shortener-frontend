import Link from "next/link";

import { logout } from "../actions/auth";
import Dropdown from "../components/dropdown";
import { createClient } from "../utils/supabase/server";

const Header = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  console.log("header:", { data, error });

  return (
    <header className="py-4 lg:py-6 ">
      <div className=" flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Dropdown />
          <Link className="text-xl font-medium" href="/">
            TeenyURL
          </Link>
        </div>
        <nav className="hidden gap-4 sm:gap-6 md:flex ml-10">
          <Link
            href="/dashboard"
            key="dashboard"
            className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            Dashboard
          </Link>
        </nav>
        <div className="ml-auto">
          {data.user ? (
            <form action={logout}>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
                Logout
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
