"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ListItem from "./listItem";

import { useEffect, useRef } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useOutsideClick(toggleDropdown);
  return (
    <div className="relative inline-block text-left">
      <button
        className="md:hidden h-9 w-9 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground flex justify-center items-center"
        id="dropdownDefaultButton"
        type="button"
        onClick={toggleDropdown}
      >
        <GiHamburgerMenu className="h-5 w-5" />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute right-0 mt-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
          ref={dropdownRef}
        >
          <ul className="py-1" aria-labelledby="dropdownDefaultButton">
            <ListItem onClick={toggleDropdown}>
              <Link
                href="/history"
                className="hover:bg-accent hover:text-accent-foreground p-2 w-full rounded-md"
              >
                History
              </Link>
            </ListItem>
            <ListItem onClick={toggleDropdown}>
              <Link
                href="/login"
                className="hover:bg-accent hover:text-accent-foreground p-2  w-full rounded-md"
              >
                Login
              </Link>
            </ListItem>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
