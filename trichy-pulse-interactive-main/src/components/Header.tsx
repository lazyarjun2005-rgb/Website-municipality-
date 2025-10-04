import { Phone, MapPin, Facebook, Twitter, Instagram, Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import trichyLogo from "@/assets/trichy-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cityGovtItems = [
    { name: "Mayor's Office", href: "#mayor" },
    { name: "Corporation Structure", href: "#structure" },
    { name: "Ward Information", href: "#wards" }
  ];

  const departmentItems = [
    { name: "Public Health", href: "#health" },
    { name: "Engineering", href: "#engineering" },
    { name: "Town Planning", href: "#planning" },
    { name: "Revenue", href: "#revenue" }
  ];

  const eventsItems = [
    { name: "Upcoming Events", href: "#upcoming" },
    { name: "Past Events", href: "#past" }
  ];

  const newsItems = [
    { name: "Latest News", href: "#latest" },
    { name: "Press Releases", href: "#press" },
    { name: "Announcements", href: "#announcements" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[hsl(var(--accent))] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="tel:18001021994" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              1800-102-1994
            </a>
            <a href="tel:8300113000" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              83001 13000
            </a>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Bharathidasan Salai, Cantonment, Tiruchirappalli 620001
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[hsl(var(--primary))] shadow-lg" : "bg-[hsl(var(--primary))]"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img src={trichyLogo} alt="Tiruchirappalli City Municipal Corporation" className="h-14 w-auto" />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#home">HOME</a>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#about">THE CITY</a>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#leadership">LEADERSHIP</a>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#services">SERVICES</a>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#tourism">TOURISM</a>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#notifications">NOTIFICATIONS</a>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="#contact">CONTACT</a>
              </Button>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#0a0e27] border-l border-white/10 overflow-y-auto">
                <nav className="flex flex-col gap-2 mt-8">
                  <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white py-3 px-4 hover:bg-white/10 rounded transition-colors">
                    HOME
                  </a>
                  
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-white py-3 px-4 hover:bg-white/10 rounded transition-colors">
                      CITY GOVT
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-1">
                      {cityGovtItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-white/80 py-2 px-4 hover:bg-white/5 rounded transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-white py-3 px-4 hover:bg-white/10 rounded transition-colors">
                      DEPARTMENTS
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-1">
                      {departmentItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-white/80 py-2 px-4 hover:bg-white/5 rounded transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-white py-3 px-4 hover:bg-white/10 rounded transition-colors">
                      EVENTS
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-1">
                      {eventsItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-white/80 py-2 px-4 hover:bg-white/5 rounded transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-white py-3 px-4 hover:bg-white/10 rounded transition-colors">
                      NEWS
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-1">
                      {newsItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-white/80 py-2 px-4 hover:bg-white/5 rounded transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white py-3 px-4 hover:bg-white/10 rounded transition-colors">
                    CONTACT
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Notification Bar */}
      <div className="bg-[hsl(var(--secondary))] text-white py-2 px-4 overflow-hidden">
        <div className="container mx-auto flex items-center gap-2">
          <span className="font-semibold whitespace-nowrap">NOTIFICATION:</span>
          <div className="animate-slide-in-right">
            <span>Panjapur Truck Terminal Auction Contract Announcement</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
