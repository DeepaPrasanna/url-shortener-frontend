import Link from "next/link";

import { logout } from "../actions/auth";
import Button from "../components/button";
import Dropdown from "../components/dropdown";
import { createClient } from "../utils/supabase/server";

const Header = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <header className="py-1 fixed top-0 left-0 right-0 z-50 shadow-md bg-background">
      <div className="p-3 flex items-center justify-between mx-auto">
        <Link className="text-xl font-medium" href="/">
          TeenyURL
        </Link>
        <Dropdown user={data.user} logout={logout}/>

        <nav className="hidden gap-4 sm:gap-6  md:flex">
          <Link
            href="/history"
            key="history"
            className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground py-2"
          >
            History
          </Link>
          {data.user ? (
            <form action={logout}>
              <Button secondary text="Logout" classes="h-9 px-4 py-2" />
            </form>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
