import { Footer } from "./footer";
import { Header } from "./header";
import { MobileNav } from "./mobile-nav";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-app flex-1 py-6 pb-24 md:pb-6">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  );
}
