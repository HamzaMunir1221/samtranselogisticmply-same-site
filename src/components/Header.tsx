import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, User, Search, Ship, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Container Tracking", href: "#tracking" },
  { name: "Blog", href: "/blog", isRoute: true },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent backdrop-blur-md border-b border-border/20"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              <span className="text-2xl font-black text-primary tracking-tight">STL</span>
              <Ship className="h-3 w-3 text-primary absolute -top-1 -right-3" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <a href="#quote">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Get Quote
              </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm bg-background p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile menu header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="relative">
                      <span className="text-xl font-black text-primary tracking-tight">STL</span>
                      <Ship className="h-2.5 w-2.5 text-primary absolute -top-1 -right-2.5" />
                    </div>
                  </div>

                  {/* Navigation links */}
                  <nav className="flex-1 overflow-y-auto py-4">
                    {navLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-6 py-4 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors border-b border-border/30 last:border-b-0"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile menu footer */}
                  <div className="p-4 border-t border-border space-y-3">
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full justify-center gap-2">
                        <User className="h-4 w-4" /> Admin Login
                      </Button>
                    </Link>
                    <a href="#quote" onClick={() => setIsOpen(false)}>
                      <Button variant="default" className="w-full bg-primary hover:bg-primary/90 mt-2">
                        Get Quote
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
