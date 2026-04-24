"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/users" className="navbar-brand">
          User-Base
        </Link>
        <div className="navbar-links">
          <Link
            href="/users"
            className={`nav-link ${pathname === "/users" ? "active" : ""}`}
          >
            All Users
          </Link>
        </div>
      </div>
    </nav>
  );
}
