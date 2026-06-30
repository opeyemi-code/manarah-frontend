import Link from "next/link";

const footerLinks = [
  { href: "/tutors", label: "Find Tutors" },
  { href: "/competitions", label: "Competitions" },
  { href: "/login", label: "Log in" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-border bg-neutral-background pb-20 md:pb-0">
      <div className="container-app py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-primary">MANARAH</p>
            <p className="mt-1 text-caption text-neutral-muted">Learn · Teach · Compete</p>
          </div>

          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption text-neutral-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 border-t border-neutral-border pt-6 text-center text-caption text-neutral-muted md:text-left">
          © {new Date().getFullYear()} MANARAH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
