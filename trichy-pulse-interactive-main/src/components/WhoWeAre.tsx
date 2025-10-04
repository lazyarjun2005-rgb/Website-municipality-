import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leaders = [
    {
      title: "Minister",
      name: "Thiru. M.R.K. Panneerselvam",
      role: "Hon'ble Minister for Municipal Administration",
      image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/paneer.jpeg?w=400&h=400&fit=crop"
    },
    {
      title: "Mayor of Tiruchirappalli",
      name: "Tmt. M. Anbazhagan",
      role: "Mayor, Tiruchirappalli Corporation",
      image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/trichymayor.jpg?w=400&h=400&fit=crop"
    },
    {
      title: "Commissioner of Tiruchirappalli",
      name: "Thiru. V. Saravanan, IAS",
      role: "Corporation Commissioner",
      image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/collector.jpg?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--accent))] mx-auto"></div>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <p className="text-sm text-[hsl(var(--accent))] font-semibold mb-2 uppercase tracking-wide">
                    {leader.title}
                  </p>
                  <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {leader.role}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="group/btn border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white rounded-full px-6"
                  >
                    LEARN MORE
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
