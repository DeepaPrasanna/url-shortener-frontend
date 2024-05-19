"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="focus:outline-none focus:ring-1 md:hidden h-9 w-9  bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
        id="dropdownDefaultButton"
        type="button"
        onClick={toggleDropdown}
      >
        <GiHamburgerMenu className="h-5 w-5" />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute left-0 mt-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
          <ul className="py-1" aria-labelledby="dropdownDefaultButton">
            <li
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              onClick={toggleDropdown}
            >
              <Link href="/history">History</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
