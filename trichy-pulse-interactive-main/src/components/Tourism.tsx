import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import rockfort from "@/assets/trichyrockfort1.jpeg";
import ranganatha from "@/assets/trichysrirangam.jpeg";
import kallanai from "@/assets/kallanai.jpg";

const touristSpots = [
  {
    name: "Rock Fort Temple",
    description: "Ancient 7th century fort and temple complex",
    image: rockfort,
  },
  {
    name: "Sri Ranganathaswamy Temple",
    description: "Largest functioning Hindu temple in the world",
    image: ranganatha,
  },
  {
    name: "Kallanai Dam",
    description: "Ancient dam built across Kaveri river",
    image: kallanai,
  },
  {
    name: "St. Joseph's Church",
    description: "Historic church built in 1846",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/church.jpeg?raw=true",
  },
  {
    name: "Mukkombu",
    description: "Popular picnic spot with lush greenery",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/mukkombu.jpg?raw=true",
  },
  {
    name: "Government Museum",
    description: "Houses art gallery and archaeological artifacts",
    image: "https://github.com/lazyarjun2005-rgb/unique-pixel-port/blob/main/src/assets/museumtrichy.webp?raw=true",
  },
];

const Tourism = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="tourism" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-primary mb-4">Famous Tourist Spots</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {touristSpots.map((spot, index) => (
            <Card
              key={index}
              className={`overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {spot.name}
                </h3>
                <p className="text-muted-foreground text-sm">{spot.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tourism;
