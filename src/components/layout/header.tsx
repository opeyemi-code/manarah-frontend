import Link from "next/link";
import { ButtonLink } from "@/components/ui";

const navLinks = [
  { href: "/tutors", label: "Tutors" },
  { href: "/competitions", label: "Competitions" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-border bg-white/95 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            M
          </span>
          <span className="text-lg font-bold text-primary">MANARAH</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body font-medium text-neutral-text transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/login" variant="ghost" size="sm">
            Log in
          </ButtonLink>
          <ButtonLink href="/register" size="sm">
            Register
          </ButtonLink>
        </div>

        <ButtonLink href="/login" variant="outline" size="sm" className="md:hidden">
          Log in
        </ButtonLink>
      </div>
    </header>
  );
}
